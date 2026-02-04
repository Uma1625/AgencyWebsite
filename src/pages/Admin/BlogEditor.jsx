import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    FaSave, FaArrowLeft, FaPlus, FaTrash, FaImage, FaCheck, FaTimes,
    FaHeading, FaLink, FaExternalLinkAlt, FaQuestionCircle, FaRobot,
    FaUserEdit, FaTags, FaGlobe, FaSearch, FaExclamationTriangle,
    FaCheckCircle, FaTimesCircle, FaInfoCircle
} from 'react-icons/fa';
import './BlogEditor.css';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const BlogEditor = ({ token, blogId, onBack, onSave }) => {
    const [loading, setLoading] = useState(false);
    const [saving, setSaving] = useState(false);
    const [activeSection, setActiveSection] = useState('basic');

    // Form state with all SEO fields
    const [formData, setFormData] = useState({
        // Basic Info
        title: '',
        slug: '',
        content: '',

        // SEO Fields
        metaTitle: '',
        metaDescription: '',
        focusKeyword: '',
        secondaryKeywords: [],

        // AI SEO
        quickAnswer: '',
        faqs: [],
        contentIntent: 'Informational',

        // Images
        featuredImage: { url: '', altText: '', title: '' },

        // Author
        author: { name: 'Vinay', bio: '', image: '' },

        // Categories & Tags
        categories: [],
        tags: [],

        // Schema
        schemaType: 'BlogPosting',

        // Publishing
        status: 'Draft',
        indexingEnabled: true,
        canonicalUrl: '',

        // Social SEO
        ogTitle: '',
        ogDescription: '',
        ogImage: '',

        // Links
        internalLinks: [],
        externalLinks: [],

        // Compliance
        sensitiveContent: 'None'
    });

    // SEO Health Check state
    const [seoHealth, setSeoHealth] = useState({
        score: 0,
        warnings: [],
        passed: []
    });

    // Category and author options
    const categoryOptions = ['Digital Marketing', 'Healthcare Marketing', 'Google Ads', 'Meta Ads', 'SEO', 'Real Estate', 'Education', 'Strategy'];
    const authorOptions = ['Vinay', 'Bhanu', 'Sunny'];
    const intentOptions = ['Informational', 'Commercial', 'Transactional', 'Navigational'];
    const schemaOptions = ['Article', 'BlogPosting', 'HowTo', 'FAQPage'];
    const statusOptions = ['Draft', 'Review', 'Published', 'Archived'];
    const sensitiveOptions = ['None', 'Healthcare', 'Finance', 'Education'];

    // Load existing blog if editing
    useEffect(() => {
        if (blogId) {
            fetchBlog();
        }
    }, [blogId]);

    // Calculate SEO health whenever form changes
    useEffect(() => {
        calculateSeoHealth();
    }, [formData]);

    const fetchBlog = async () => {
        try {
            setLoading(true);
            const response = await fetch(`${API_BASE}/blogs/${blogId}`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            const data = await response.json();
            setFormData({
                ...formData,
                ...data,
                secondaryKeywords: data.secondaryKeywords || [],
                faqs: data.faqs || [],
                categories: data.categories || [],
                tags: data.tags || [],
                internalLinks: data.internalLinks || [],
                externalLinks: data.externalLinks || [],
                featuredImage: data.featuredImage || { url: '', altText: '', title: '' },
                author: data.author || { name: 'Vinay', bio: '', image: '' }
            });
        } catch (err) {
            console.error('Failed to fetch blog:', err);
        } finally {
            setLoading(false);
        }
    };

    const calculateSeoHealth = () => {
        const warnings = [];
        const passed = [];

        // Title check
        if (!formData.title) {
            warnings.push('Blog title is missing');
        } else if (formData.title.length < 30 || formData.title.length > 65) {
            warnings.push(`Title length (${formData.title.length}) should be 30-65 characters`);
        } else {
            passed.push('Title length is optimal');
        }

        // Meta title check
        if (!formData.metaTitle) {
            warnings.push('Meta title is missing');
        } else if (formData.metaTitle.length > 60) {
            warnings.push(`Meta title (${formData.metaTitle.length}) exceeds 60 characters`);
        } else {
            passed.push('Meta title is set');
        }

        // Meta description check
        if (!formData.metaDescription) {
            warnings.push('Meta description is missing');
        } else if (formData.metaDescription.length < 120 || formData.metaDescription.length > 160) {
            warnings.push(`Meta description (${formData.metaDescription.length}) should be 120-160 characters`);
        } else {
            passed.push('Meta description length is optimal');
        }

        // Focus keyword check
        if (!formData.focusKeyword) {
            warnings.push('Focus keyword is missing');
        } else {
            passed.push('Focus keyword is set');
        }

        // Quick Answer (AI SEO)
        if (!formData.quickAnswer) {
            warnings.push('Quick Answer / TL;DR is missing (important for AI SEO)');
        } else {
            passed.push('Quick Answer is set');
        }

        // FAQ check
        if (formData.faqs.length === 0) {
            warnings.push('No FAQs added (helps with "People Also Ask")');
        } else {
            passed.push(`${formData.faqs.length} FAQ(s) added`);
        }

        // Featured image check
        if (!formData.featuredImage?.url) {
            warnings.push('Featured image is missing');
        } else if (!formData.featuredImage?.altText) {
            warnings.push('Featured image alt text is missing');
        } else {
            passed.push('Featured image with alt text is set');
        }

        // Internal links check
        if (formData.internalLinks.length < 2) {
            warnings.push('Add at least 2 internal links');
        } else {
            passed.push(`${formData.internalLinks.length} internal links added`);
        }

        // Content check
        if (!formData.content || formData.content.length < 500) {
            warnings.push('Content is too short (aim for 1200-2500 words)');
        } else {
            passed.push('Content has sufficient length');
        }

        // Categories check
        if (formData.categories.length === 0) {
            warnings.push('No category selected');
        } else {
            passed.push('Category is set');
        }

        const score = Math.round((passed.length / (passed.length + warnings.length)) * 100);
        setSeoHealth({ score, warnings, passed });
    };

    const handleChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleNestedChange = (parent, field, value) => {
        setFormData(prev => ({
            ...prev,
            [parent]: { ...prev[parent], [field]: value }
        }));
    };

    const generateSlug = () => {
        const slug = formData.title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-+|-+$/g, '');
        handleChange('slug', slug);
    };

    // FAQ handlers
    const addFaq = () => {
        setFormData(prev => ({
            ...prev,
            faqs: [...prev.faqs, { question: '', answer: '' }]
        }));
    };

    const updateFaq = (index, field, value) => {
        const newFaqs = [...formData.faqs];
        newFaqs[index][field] = value;
        handleChange('faqs', newFaqs);
    };

    const removeFaq = (index) => {
        handleChange('faqs', formData.faqs.filter((_, i) => i !== index));
    };

    // Internal link handlers
    const addInternalLink = () => {
        setFormData(prev => ({
            ...prev,
            internalLinks: [...prev.internalLinks, { url: '', anchorText: '' }]
        }));
    };

    const updateInternalLink = (index, field, value) => {
        const newLinks = [...formData.internalLinks];
        newLinks[index][field] = value;
        handleChange('internalLinks', newLinks);
    };

    const removeInternalLink = (index) => {
        handleChange('internalLinks', formData.internalLinks.filter((_, i) => i !== index));
    };

    // External link handlers
    const addExternalLink = () => {
        setFormData(prev => ({
            ...prev,
            externalLinks: [...prev.externalLinks, { url: '', anchorText: '', relFollow: false }]
        }));
    };

    const updateExternalLink = (index, field, value) => {
        const newLinks = [...formData.externalLinks];
        newLinks[index][field] = value;
        handleChange('externalLinks', newLinks);
    };

    const removeExternalLink = (index) => {
        handleChange('externalLinks', formData.externalLinks.filter((_, i) => i !== index));
    };

    // Keywords handlers
    const [newKeyword, setNewKeyword] = useState('');

    const addSecondaryKeyword = () => {
        if (newKeyword.trim() && !formData.secondaryKeywords.includes(newKeyword.trim())) {
            handleChange('secondaryKeywords', [...formData.secondaryKeywords, newKeyword.trim()]);
            setNewKeyword('');
        }
    };

    const removeSecondaryKeyword = (keyword) => {
        handleChange('secondaryKeywords', formData.secondaryKeywords.filter(k => k !== keyword));
    };

    // Tags handlers
    const [newTag, setNewTag] = useState('');

    const addTag = () => {
        if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
            handleChange('tags', [...formData.tags, newTag.trim()]);
            setNewTag('');
        }
    };

    const removeTag = (tag) => {
        handleChange('tags', formData.tags.filter(t => t !== tag));
    };

    // Category toggle
    const toggleCategory = (category) => {
        if (formData.categories.includes(category)) {
            handleChange('categories', formData.categories.filter(c => c !== category));
        } else {
            handleChange('categories', [...formData.categories, category]);
        }
    };

    // Image upload
    const handleImageUpload = async (e, field) => {
        const file = e.target.files[0];
        if (!file) return;

        const formDataUpload = new FormData();
        formDataUpload.append('image', file);

        try {
            const response = await fetch(`${API_BASE}/upload/image`, {
                method: 'POST',
                headers: { 'Authorization': `Bearer ${token}` },
                body: formDataUpload
            });
            const data = await response.json();

            if (field === 'featuredImage') {
                handleNestedChange('featuredImage', 'url', data.url);
            } else if (field === 'ogImage') {
                handleChange('ogImage', data.url);
            } else if (field === 'authorImage') {
                handleNestedChange('author', 'image', data.url);
            }
        } catch (err) {
            console.error('Image upload failed:', err);
        }
    };

    // Save blog
    const handleSave = async () => {
        setSaving(true);
        try {
            const url = blogId
                ? `${API_BASE}/blogs/${blogId}`
                : `${API_BASE}/blogs`;

            const method = blogId ? 'PUT' : 'POST';

            const response = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                onSave();
            } else {
                const error = await response.json();
                alert(error.message || 'Failed to save blog');
            }
        } catch (err) {
            console.error('Save failed:', err);
            alert('Failed to save blog. Please try again.');
        } finally {
            setSaving(false);
        }
    };

    const sections = [
        { id: 'basic', label: 'Basic Info', icon: <FaHeading /> },
        { id: 'seo', label: 'SEO Fields', icon: <FaSearch /> },
        { id: 'ai-seo', label: 'AI SEO', icon: <FaRobot /> },
        { id: 'images', label: 'Images', icon: <FaImage /> },
        { id: 'author', label: 'Author', icon: <FaUserEdit /> },
        { id: 'categories', label: 'Categories & Tags', icon: <FaTags /> },
        { id: 'links', label: 'Links', icon: <FaLink /> },
        { id: 'social', label: 'Social SEO', icon: <FaGlobe /> },
        { id: 'publishing', label: 'Publishing', icon: <FaCheck /> }
    ];

    if (loading) {
        return <div className="editor-loading">Loading blog data...</div>;
    }

    return (
        <div className="blog-editor">
            <div className="editor-bg">
                <div className="editor-gradient"></div>
            </div>

            {/* Header */}
            <header className="editor-header">
                <button className="back-btn" onClick={onBack}>
                    <FaArrowLeft /> Back to Dashboard
                </button>
                <h1>{blogId ? 'Edit Blog Post' : 'Create New Blog Post'}</h1>
                <button
                    className="save-btn"
                    onClick={handleSave}
                    disabled={saving}
                >
                    <FaSave /> {saving ? 'Saving...' : 'Save Blog'}
                </button>
            </header>

            <div className="editor-layout">
                {/* Sidebar Navigation */}
                <nav className="editor-sidebar">
                    {sections.map(section => (
                        <button
                            key={section.id}
                            className={`nav-btn ${activeSection === section.id ? 'active' : ''}`}
                            onClick={() => setActiveSection(section.id)}
                        >
                            {section.icon}
                            <span>{section.label}</span>
                        </button>
                    ))}

                    {/* SEO Health Card */}
                    <div className={`seo-health-card ${seoHealth.score >= 80 ? 'good' : seoHealth.score >= 50 ? 'warning' : 'poor'}`}>
                        <h4>SEO Score</h4>
                        <div className="score-circle">
                            <span>{seoHealth.score}%</span>
                        </div>
                        <p>{seoHealth.warnings.length} issues</p>
                    </div>
                </nav>

                {/* Main Editor */}
                <main className="editor-main">
                    {/* Basic Info Section */}
                    {activeSection === 'basic' && (
                        <motion.section
                            className="editor-section"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <h2><FaHeading /> Basic Information</h2>

                            <div className="form-group">
                                <label>
                                    Blog Title (H1) *
                                    <span className="char-count">{formData.title.length}/65</span>
                                </label>
                                <input
                                    type="text"
                                    value={formData.title}
                                    onChange={(e) => handleChange('title', e.target.value)}
                                    placeholder="Enter a compelling, keyword-rich title (55-65 chars ideal)"
                                    maxLength={65}
                                />
                            </div>

                            <div className="form-group slug-group">
                                <label>URL Slug *</label>
                                <div className="slug-input">
                                    <span className="slug-prefix">/blog/</span>
                                    <input
                                        type="text"
                                        value={formData.slug}
                                        onChange={(e) => handleChange('slug', e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, '-'))}
                                        placeholder="url-friendly-slug"
                                    />
                                    <button type="button" onClick={generateSlug}>Auto Generate</button>
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Blog Content *</label>
                                <p className="field-hint">Use H2, H3, bullet points, numbered lists. Structure is critical for SEO.</p>
                                <textarea
                                    value={formData.content}
                                    onChange={(e) => handleChange('content', e.target.value)}
                                    placeholder="Write your blog content here. Use HTML for formatting: <h2>, <h3>, <ul>, <li>, <blockquote>, etc."
                                    rows={20}
                                />
                                <div className="content-stats">
                                    Word Count: ~{formData.content.replace(/<[^>]*>/g, ' ').split(/\s+/).filter(w => w).length} |
                                    Reading Time: ~{Math.ceil(formData.content.replace(/<[^>]*>/g, ' ').split(/\s+/).filter(w => w).length / 200)} min
                                </div>
                            </div>
                        </motion.section>
                    )}

                    {/* SEO Fields Section */}
                    {activeSection === 'seo' && (
                        <motion.section
                            className="editor-section"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <h2><FaSearch /> On-Page SEO Fields</h2>

                            <div className="form-group">
                                <label>
                                    Meta Title *
                                    <span className="char-count">{formData.metaTitle.length}/60</span>
                                </label>
                                <input
                                    type="text"
                                    value={formData.metaTitle}
                                    onChange={(e) => handleChange('metaTitle', e.target.value)}
                                    placeholder="Compelling title for search results (max 60 chars)"
                                    maxLength={60}
                                />
                            </div>

                            <div className="form-group">
                                <label>
                                    Meta Description *
                                    <span className="char-count">{formData.metaDescription.length}/160</span>
                                </label>
                                <textarea
                                    value={formData.metaDescription}
                                    onChange={(e) => handleChange('metaDescription', e.target.value)}
                                    placeholder="Compelling description for search results (150-160 chars ideal)"
                                    maxLength={160}
                                    rows={3}
                                />
                            </div>

                            <div className="form-group">
                                <label>Focus Keyword (Primary) *</label>
                                <input
                                    type="text"
                                    value={formData.focusKeyword}
                                    onChange={(e) => handleChange('focusKeyword', e.target.value)}
                                    placeholder="e.g., clinic google ads"
                                />
                            </div>

                            <div className="form-group">
                                <label>Secondary Keywords</label>
                                <div className="keyword-input">
                                    <input
                                        type="text"
                                        value={newKeyword}
                                        onChange={(e) => setNewKeyword(e.target.value)}
                                        onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addSecondaryKeyword())}
                                        placeholder="Add keyword and press Enter"
                                    />
                                    <button type="button" onClick={addSecondaryKeyword}><FaPlus /></button>
                                </div>
                                <div className="keywords-list">
                                    {formData.secondaryKeywords.map((keyword, i) => (
                                        <span key={i} className="keyword-tag">
                                            {keyword}
                                            <button onClick={() => removeSecondaryKeyword(keyword)}><FaTimes /></button>
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.section>
                    )}

                    {/* AI SEO Section */}
                    {activeSection === 'ai-seo' && (
                        <motion.section
                            className="editor-section"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <h2><FaRobot /> AI SEO (Featured Snippets & AI Answers)</h2>

                            <div className="form-group">
                                <label>
                                    Quick Answer / TL;DR ⭐
                                    <span className="hint">(40-60 words, renders near top of blog)</span>
                                </label>
                                <textarea
                                    value={formData.quickAnswer}
                                    onChange={(e) => handleChange('quickAnswer', e.target.value)}
                                    placeholder="Write a concise, direct answer to the main question. This helps with featured snippets and AI answers."
                                    rows={4}
                                />
                            </div>

                            <div className="form-group">
                                <label>Content Intent Type</label>
                                <select
                                    value={formData.contentIntent}
                                    onChange={(e) => handleChange('contentIntent', e.target.value)}
                                >
                                    {intentOptions.map(opt => (
                                        <option key={opt} value={opt}>{opt}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="form-group faqs-section">
                                <label>
                                    <FaQuestionCircle /> FAQ Section
                                    <span className="hint">(Helps rank for "People Also Ask")</span>
                                </label>

                                {formData.faqs.map((faq, index) => (
                                    <div key={index} className="faq-item">
                                        <div className="faq-header">
                                            <span>FAQ #{index + 1}</span>
                                            <button
                                                type="button"
                                                className="remove-faq"
                                                onClick={() => removeFaq(index)}
                                            >
                                                <FaTrash />
                                            </button>
                                        </div>
                                        <input
                                            type="text"
                                            value={faq.question}
                                            onChange={(e) => updateFaq(index, 'question', e.target.value)}
                                            placeholder="Question (e.g., Are Google Ads allowed for clinics?)"
                                        />
                                        <textarea
                                            value={faq.answer}
                                            onChange={(e) => updateFaq(index, 'answer', e.target.value)}
                                            placeholder="Answer (concise, direct answer)"
                                            rows={3}
                                        />
                                    </div>
                                ))}

                                <button type="button" className="add-btn" onClick={addFaq}>
                                    <FaPlus /> Add FAQ
                                </button>
                            </div>
                        </motion.section>
                    )}

                    {/* Images Section */}
                    {activeSection === 'images' && (
                        <motion.section
                            className="editor-section"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <h2><FaImage /> Image SEO</h2>

                            <div className="form-group image-upload-group">
                                <label>Featured Image *</label>
                                <div className="image-preview">
                                    {formData.featuredImage?.url ? (
                                        <img src={`http://localhost:5000${formData.featuredImage.url}`} alt="Preview" />
                                    ) : (
                                        <div className="placeholder"><FaImage /> No image</div>
                                    )}
                                </div>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => handleImageUpload(e, 'featuredImage')}
                                />
                                <p className="hint">Or paste image URL:</p>
                                <input
                                    type="text"
                                    value={formData.featuredImage?.url || ''}
                                    onChange={(e) => handleNestedChange('featuredImage', 'url', e.target.value)}
                                    placeholder="https://example.com/image.jpg"
                                />
                            </div>

                            <div className="form-group">
                                <label>Image Alt Text * (Critical for SEO)</label>
                                <input
                                    type="text"
                                    value={formData.featuredImage?.altText || ''}
                                    onChange={(e) => handleNestedChange('featuredImage', 'altText', e.target.value)}
                                    placeholder="e.g., clinic google ads lead generation strategy"
                                />
                            </div>

                            <div className="form-group">
                                <label>Image Title (Optional)</label>
                                <input
                                    type="text"
                                    value={formData.featuredImage?.title || ''}
                                    onChange={(e) => handleNestedChange('featuredImage', 'title', e.target.value)}
                                    placeholder="Optional image title"
                                />
                            </div>
                        </motion.section>
                    )}

                    {/* Author Section */}
                    {activeSection === 'author' && (
                        <motion.section
                            className="editor-section"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <h2><FaUserEdit /> Author Info (E-E-A-T)</h2>
                            <p className="section-hint">Author info builds Experience, Expertise, Authority, and Trust for Google.</p>

                            <div className="form-group">
                                <label>Author Name *</label>
                                <select
                                    value={formData.author?.name || 'Vinay'}
                                    onChange={(e) => handleNestedChange('author', 'name', e.target.value)}
                                >
                                    {authorOptions.map(author => (
                                        <option key={author} value={author}>{author}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Author Bio</label>
                                <textarea
                                    value={formData.author?.bio || ''}
                                    onChange={(e) => handleNestedChange('author', 'bio', e.target.value)}
                                    placeholder="Brief author bio highlighting expertise..."
                                    rows={3}
                                />
                            </div>

                            <div className="form-group">
                                <label>Author Image URL</label>
                                <input
                                    type="text"
                                    value={formData.author?.image || ''}
                                    onChange={(e) => handleNestedChange('author', 'image', e.target.value)}
                                    placeholder="https://example.com/author.jpg"
                                />
                            </div>
                        </motion.section>
                    )}

                    {/* Categories & Tags Section */}
                    {activeSection === 'categories' && (
                        <motion.section
                            className="editor-section"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <h2><FaTags /> Categories & Tags</h2>

                            <div className="form-group">
                                <label>Categories * (Select at least 1)</label>
                                <div className="category-grid">
                                    {categoryOptions.map(cat => (
                                        <button
                                            key={cat}
                                            type="button"
                                            className={`category-btn ${formData.categories.includes(cat) ? 'selected' : ''}`}
                                            onClick={() => toggleCategory(cat)}
                                        >
                                            {formData.categories.includes(cat) ? <FaCheck /> : <FaPlus />}
                                            {cat}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Tags (Optional)</label>
                                <div className="tag-input">
                                    <input
                                        type="text"
                                        value={newTag}
                                        onChange={(e) => setNewTag(e.target.value)}
                                        onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                                        placeholder="Add tag and press Enter"
                                    />
                                    <button type="button" onClick={addTag}><FaPlus /></button>
                                </div>
                                <div className="tags-list">
                                    {formData.tags.map((tag, i) => (
                                        <span key={i} className="tag-item">
                                            {tag}
                                            <button onClick={() => removeTag(tag)}><FaTimes /></button>
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Schema Type</label>
                                <select
                                    value={formData.schemaType}
                                    onChange={(e) => handleChange('schemaType', e.target.value)}
                                >
                                    {schemaOptions.map(opt => (
                                        <option key={opt} value={opt}>{opt}</option>
                                    ))}
                                </select>
                            </div>
                        </motion.section>
                    )}

                    {/* Links Section */}
                    {activeSection === 'links' && (
                        <motion.section
                            className="editor-section"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <h2><FaLink /> Internal & External Links</h2>

                            <div className="form-group links-section">
                                <label>
                                    <FaLink /> Internal Links
                                    <span className="hint">(Minimum 2 recommended)</span>
                                </label>

                                {formData.internalLinks.map((link, index) => (
                                    <div key={index} className="link-item">
                                        <input
                                            type="text"
                                            value={link.url}
                                            onChange={(e) => updateInternalLink(index, 'url', e.target.value)}
                                            placeholder="e.g., /services or /blog/another-post"
                                        />
                                        <input
                                            type="text"
                                            value={link.anchorText}
                                            onChange={(e) => updateInternalLink(index, 'anchorText', e.target.value)}
                                            placeholder="Anchor text"
                                        />
                                        <button
                                            type="button"
                                            className="remove-link"
                                            onClick={() => removeInternalLink(index)}
                                        >
                                            <FaTrash />
                                        </button>
                                    </div>
                                ))}

                                <button type="button" className="add-btn" onClick={addInternalLink}>
                                    <FaPlus /> Add Internal Link
                                </button>
                            </div>

                            <div className="form-group links-section">
                                <label>
                                    <FaExternalLinkAlt /> External Links
                                    <span className="hint">(Optional references)</span>
                                </label>

                                {formData.externalLinks.map((link, index) => (
                                    <div key={index} className="link-item external">
                                        <input
                                            type="text"
                                            value={link.url}
                                            onChange={(e) => updateExternalLink(index, 'url', e.target.value)}
                                            placeholder="https://external-site.com"
                                        />
                                        <input
                                            type="text"
                                            value={link.anchorText}
                                            onChange={(e) => updateExternalLink(index, 'anchorText', e.target.value)}
                                            placeholder="Anchor text"
                                        />
                                        <label className="checkbox-label">
                                            <input
                                                type="checkbox"
                                                checked={link.relFollow}
                                                onChange={(e) => updateExternalLink(index, 'relFollow', e.target.checked)}
                                            />
                                            Follow
                                        </label>
                                        <button
                                            type="button"
                                            className="remove-link"
                                            onClick={() => removeExternalLink(index)}
                                        >
                                            <FaTrash />
                                        </button>
                                    </div>
                                ))}

                                <button type="button" className="add-btn" onClick={addExternalLink}>
                                    <FaPlus /> Add External Link
                                </button>
                            </div>
                        </motion.section>
                    )}

                    {/* Social SEO Section */}
                    {activeSection === 'social' && (
                        <motion.section
                            className="editor-section"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <h2><FaGlobe /> Social SEO (Open Graph)</h2>
                            <p className="section-hint">These fields control how your blog appears when shared on social media.</p>

                            <div className="form-group">
                                <label>OG Title (defaults to Meta Title if empty)</label>
                                <input
                                    type="text"
                                    value={formData.ogTitle}
                                    onChange={(e) => handleChange('ogTitle', e.target.value)}
                                    placeholder="Title for social sharing"
                                />
                            </div>

                            <div className="form-group">
                                <label>OG Description (defaults to Meta Description if empty)</label>
                                <textarea
                                    value={formData.ogDescription}
                                    onChange={(e) => handleChange('ogDescription', e.target.value)}
                                    placeholder="Description for social sharing"
                                    rows={3}
                                />
                            </div>

                            <div className="form-group">
                                <label>OG Image URL (1200x630 recommended)</label>
                                <input
                                    type="text"
                                    value={formData.ogImage}
                                    onChange={(e) => handleChange('ogImage', e.target.value)}
                                    placeholder="https://example.com/social-image.jpg"
                                />
                            </div>
                        </motion.section>
                    )}

                    {/* Publishing Section */}
                    {activeSection === 'publishing' && (
                        <motion.section
                            className="editor-section"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <h2><FaCheck /> Publishing & Indexing</h2>

                            <div className="form-group">
                                <label>Blog Status *</label>
                                <select
                                    value={formData.status}
                                    onChange={(e) => handleChange('status', e.target.value)}
                                >
                                    {statusOptions.map(opt => (
                                        <option key={opt} value={opt}>{opt}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="form-group checkbox-group">
                                <label className="checkbox-label">
                                    <input
                                        type="checkbox"
                                        checked={formData.indexingEnabled}
                                        onChange={(e) => handleChange('indexingEnabled', e.target.checked)}
                                    />
                                    Allow Search Engine Indexing
                                </label>
                            </div>

                            <div className="form-group">
                                <label>Canonical URL (auto-generated)</label>
                                <input
                                    type="text"
                                    value={formData.canonicalUrl || `/blog/${formData.slug}`}
                                    onChange={(e) => handleChange('canonicalUrl', e.target.value)}
                                    placeholder="/blog/your-slug"
                                />
                            </div>

                            <div className="form-group">
                                <label>Sensitive Content Type</label>
                                <select
                                    value={formData.sensitiveContent}
                                    onChange={(e) => handleChange('sensitiveContent', e.target.value)}
                                >
                                    {sensitiveOptions.map(opt => (
                                        <option key={opt} value={opt}>{opt}</option>
                                    ))}
                                </select>
                                <p className="hint">Helps with ad compliance and AI safety classification.</p>
                            </div>
                        </motion.section>
                    )}
                </main>

                {/* SEO Health Sidebar */}
                <aside className="seo-health-sidebar">
                    <h3>SEO Health Check</h3>

                    <div className={`health-score ${seoHealth.score >= 80 ? 'good' : seoHealth.score >= 50 ? 'warning' : 'poor'}`}>
                        <div className="score-value">{seoHealth.score}%</div>
                        <div className="score-label">
                            {seoHealth.score >= 80 ? 'Good' : seoHealth.score >= 50 ? 'Needs Work' : 'Poor'}
                        </div>
                    </div>

                    {seoHealth.warnings.length > 0 && (
                        <div className="health-warnings">
                            <h4><FaExclamationTriangle /> Issues ({seoHealth.warnings.length})</h4>
                            <ul>
                                {seoHealth.warnings.map((warning, i) => (
                                    <li key={i}><FaTimesCircle /> {warning}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {seoHealth.passed.length > 0 && (
                        <div className="health-passed">
                            <h4><FaCheckCircle /> Passed ({seoHealth.passed.length})</h4>
                            <ul>
                                {seoHealth.passed.map((item, i) => (
                                    <li key={i}><FaCheckCircle /> {item}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </aside>
            </div>
        </div>
    );
};

export default BlogEditor;
