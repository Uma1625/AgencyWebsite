const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');

// GET all blogs (with optional status filter)
router.get('/', async (req, res) => {
    try {
        const { status, limit } = req.query;
        let query = {};

        if (status) {
            query.status = status;
        }

        let blogs = Blog.find(query).sort({ createdAt: -1 });

        if (limit) {
            blogs = blogs.limit(parseInt(limit));
        }

        const result = await blogs;
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET single blog by slug
router.get('/slug/:slug', async (req, res) => {
    try {
        const blog = await Blog.findOne({ slug: req.params.slug });
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        res.json(blog);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET single blog by ID
router.get('/:id', async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        res.json(blog);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// POST create new blog
router.post('/', async (req, res) => {
    try {
        const blog = new Blog(req.body);

        // Set publishedAt if status is Published
        if (blog.status === 'Published' && !blog.publishedAt) {
            blog.publishedAt = new Date();
        }

        const newBlog = await blog.save();
        res.status(201).json(newBlog);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// PUT update blog
router.put('/:id', async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }

        // Update all fields
        Object.keys(req.body).forEach(key => {
            blog[key] = req.body[key];
        });

        // Set publishedAt if status changed to Published
        if (req.body.status === 'Published' && !blog.publishedAt) {
            blog.publishedAt = new Date();
        }

        const updatedBlog = await blog.save();
        res.json(updatedBlog);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// DELETE blog
router.delete('/:id', async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }

        await Blog.findByIdAndDelete(req.params.id);
        res.json({ message: 'Blog deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET blog statistics
router.get('/stats/overview', async (req, res) => {
    try {
        const total = await Blog.countDocuments();
        const published = await Blog.countDocuments({ status: 'Published' });
        const draft = await Blog.countDocuments({ status: 'Draft' });
        const review = await Blog.countDocuments({ status: 'Review' });

        res.json({ total, published, draft, review });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
