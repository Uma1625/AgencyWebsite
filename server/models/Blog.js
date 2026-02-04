const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    // Basic Info
    title: {
        type: String,
        required: true,
        maxlength: 65
    },
    slug: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    content: {
        type: String,
        required: true
    },

    // SEO Fields
    metaTitle: {
        type: String,
        maxlength: 60
    },
    metaDescription: {
        type: String,
        maxlength: 160
    },
    focusKeyword: {
        type: String
    },
    secondaryKeywords: [{
        type: String
    }],

    // AI SEO
    quickAnswer: {
        type: String,
        maxlength: 500  // ~60 words
    },
    faqs: [{
        question: String,
        answer: String
    }],
    contentIntent: {
        type: String,
        enum: ['Informational', 'Commercial', 'Transactional', 'Navigational']
    },

    // Images
    featuredImage: {
        url: String,
        altText: String,
        title: String
    },

    // Author Info (E-E-A-T)
    author: {
        name: {
            type: String,
            default: 'Vinay'
        },
        bio: String,
        image: String
    },

    // Categories & Tags
    categories: [{
        type: String
    }],
    tags: [{
        type: String
    }],

    // Schema & Structured Data
    schemaType: {
        type: String,
        enum: ['Article', 'BlogPosting', 'HowTo', 'FAQPage'],
        default: 'BlogPosting'
    },

    // Publishing Controls
    status: {
        type: String,
        enum: ['Draft', 'Review', 'Published', 'Archived'],
        default: 'Draft'
    },
    indexingEnabled: {
        type: Boolean,
        default: true
    },
    canonicalUrl: {
        type: String
    },

    // Social SEO (Open Graph)
    ogTitle: String,
    ogDescription: String,
    ogImage: String,

    // Internal & External Links
    internalLinks: [{
        url: String,
        anchorText: String
    }],
    externalLinks: [{
        url: String,
        anchorText: String,
        relFollow: {
            type: Boolean,
            default: false
        }
    }],

    // Sensitive Content Flag
    sensitiveContent: {
        type: String,
        enum: ['None', 'Healthcare', 'Finance', 'Education'],
        default: 'None'
    },

    // Auto-calculated fields
    wordCount: {
        type: Number,
        default: 0
    },
    readingTime: {
        type: Number,
        default: 0
    },

    // Timestamps
    publishedAt: Date
}, {
    timestamps: true  // Adds createdAt and updatedAt
});

// Pre-save middleware to calculate word count and reading time
blogSchema.pre('save', function (next) {
    if (this.content) {
        // Strip HTML tags and count words
        const textContent = this.content.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
        this.wordCount = textContent.split(' ').filter(word => word.length > 0).length;
        // Average reading speed: 200 words per minute
        this.readingTime = Math.ceil(this.wordCount / 200);
    }

    // Auto-generate canonical URL if not set
    if (!this.canonicalUrl && this.slug) {
        this.canonicalUrl = `/blog/${this.slug}`;
    }

    next();
});

// Auto-generate slug from title
blogSchema.pre('validate', function (next) {
    if (this.title && !this.slug) {
        this.slug = this.title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-+|-+$/g, '');
    }
    next();
});

module.exports = mongoose.model('Blog', blogSchema);
