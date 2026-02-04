require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const dns = require('dns');

// Fix DNS resolution for MongoDB SRV on some networks
dns.setServers(['8.8.8.8', '8.8.4.4', '1.1.1.1']);

const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Serve uploaded images
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// MongoDB Connection with retry
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('✅ Connected to MongoDB Atlas - agency_blog');
    } catch (err) {
        console.error('❌ MongoDB connection error:', err.message);
        console.log('⏳ Retrying in 5 seconds...');
        setTimeout(connectDB, 5000);
    }
};

connectDB();

// Routes
const blogRoutes = require('./routes/blogs');
const authRoutes = require('./routes/auth');
const uploadRoutes = require('./routes/upload');

app.use('/api/blogs', blogRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/upload', uploadRoutes);

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', message: 'Agency Blog Server is running' });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Agency Blog Server running on port ${PORT}`);
    console.log(`📝 API endpoints:`);
    console.log(`   - GET    /api/blogs`);
    console.log(`   - GET    /api/blogs/:id`);
    console.log(`   - GET    /api/blogs/slug/:slug`);
    console.log(`   - POST   /api/blogs`);
    console.log(`   - PUT    /api/blogs/:id`);
    console.log(`   - DELETE /api/blogs/:id`);
    console.log(`   - POST   /api/auth/login`);
    console.log(`   - POST   /api/upload/image`);
});
