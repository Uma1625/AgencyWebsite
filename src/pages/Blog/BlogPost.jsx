import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaUserEdit, FaClock, FaArrowLeft, FaTag, FaFolder } from 'react-icons/fa';
import './BlogPost.css';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const BlogPost = () => {
    const { slug } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchBlog();
    }, [slug]);

    const fetchBlog = async () => {
        try {
            setLoading(true);
            const response = await fetch(`${API_BASE}/blogs/slug/${slug}`);

            if (!response.ok) {
                throw new Error('Blog not found');
            }

            const data = await response.json();
            setBlog(data);

            // Update page meta tags dynamically
            updateMetaTags(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const updateMetaTags = (blogData) => {
        // Update document title
        document.title = blogData.metaTitle || blogData.title;

        // Update meta description
        let metaDesc = document.querySelector('meta[name="description"]');
        if (!metaDesc) {
            metaDesc = document.createElement('meta');
            metaDesc.name = 'description';
            document.head.appendChild(metaDesc);
        }
        metaDesc.content = blogData.metaDescription || blogData.quickAnswer || '';

        // Update OG tags
        updateOGTag('og:title', blogData.ogTitle || blogData.metaTitle || blogData.title);
        updateOGTag('og:description', blogData.ogDescription || blogData.metaDescription || '');
        updateOGTag('og:image', blogData.ogImage || blogData.featuredImage?.url || '');
        updateOGTag('og:type', 'article');

        // Add canonical URL
        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.rel = 'canonical';
            document.head.appendChild(canonical);
        }
        canonical.href = window.location.origin + (blogData.canonicalUrl || `/blog/${blogData.slug}`);
    };

    const updateOGTag = (property, content) => {
        let tag = document.querySelector(`meta[property="${property}"]`);
        if (!tag) {
            tag = document.createElement('meta');
            tag.setAttribute('property', property);
            document.head.appendChild(tag);
        }
        tag.content = content;
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-IN', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
    };

    // Generate Schema.org JSON-LD
    const generateSchema = () => {
        if (!blog) return null;

        const baseSchema = {
            "@context": "https://schema.org",
            "@type": blog.schemaType || "BlogPosting",
            "headline": blog.title,
            "description": blog.metaDescription || blog.quickAnswer,
            "image": blog.featuredImage?.url ? `${window.location.origin}${blog.featuredImage.url}` : undefined,
            "author": {
                "@type": "Person",
                "name": blog.author?.name || "Abhivrudhi Agency"
            },
            "publisher": {
                "@type": "Organization",
                "name": "Abhivrudhi Agency",
                "logo": {
                    "@type": "ImageObject",
                    "url": `${window.location.origin}/logo.png`
                }
            },
            "datePublished": blog.publishedAt || blog.createdAt,
            "dateModified": blog.updatedAt,
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": window.location.href
            }
        };

        // Add FAQ schema if FAQs exist
        if (blog.faqs && blog.faqs.length > 0) {
            const faqSchema = {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": blog.faqs.map(faq => ({
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": faq.answer
                    }
                }))
            };

            return [baseSchema, faqSchema];
        }

        return baseSchema;
    };

    if (loading) {
        return (
            <div className="blog-post-loading">
                <div className="loader"></div>
                <p>Loading article...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="blog-post-error">
                <h1>Blog Not Found</h1>
                <p>The article you're looking for doesn't exist or has been removed.</p>
                <Link to="/blog" className="back-link">
                    <FaArrowLeft /> Back to Blog
                </Link>
            </div>
        );
    }

    return (
        <article className="blog-post-page">
            {/* Schema.org JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(generateSchema()) }}
            />

            {/* Background */}
            <div className="blog-post-bg">
                <div className="post-gradient"></div>
                <div className="post-grid-overlay"></div>
            </div>

            {/* Back Link */}
            <div className="container">
                <Link to="/blog" className="back-to-blog">
                    <FaArrowLeft /> Back to Blog
                </Link>
            </div>

            {/* Hero Section */}
            <header className="post-hero">
                <div className="container">
                    <motion.div
                        className="post-hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Categories */}
                        {blog.categories && blog.categories.length > 0 && (
                            <div className="post-categories">
                                {blog.categories.map((cat, i) => (
                                    <span key={i} className="category-tag">
                                        <FaFolder /> {cat}
                                    </span>
                                ))}
                            </div>
                        )}

                        {/* Title (H1) */}
                        <h1>{blog.title}</h1>

                        {/* Meta Info */}
                        <div className="post-meta">
                            <span className="meta-item">
                                <FaUserEdit /> {blog.author?.name || 'Abhivrudhi Team'}
                            </span>
                            <span className="meta-item">
                                <FaCalendarAlt /> {formatDate(blog.publishedAt || blog.createdAt)}
                            </span>
                            <span className="meta-item">
                                <FaClock /> {blog.readingTime || 5} min read
                            </span>
                        </div>

                        {/* Quick Answer / TL;DR */}
                        {blog.quickAnswer && (
                            <motion.div
                                className="quick-answer"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <span className="quick-label">Quick Answer</span>
                                <p>{blog.quickAnswer}</p>
                            </motion.div>
                        )}
                    </motion.div>
                </div>
            </header>

            {/* Featured Image */}
            {blog.featuredImage?.url && (
                <div className="post-featured-image">
                    <div className="container">
                        <img
                            src={blog.featuredImage.url.startsWith('http') ? blog.featuredImage.url : `http://localhost:5000${blog.featuredImage.url}`}
                            alt={blog.featuredImage.altText || blog.title}
                            title={blog.featuredImage.title}
                        />
                    </div>
                </div>
            )}

            {/* Main Content */}
            <div className="post-content-wrapper">
                <div className="container">
                    <div className="post-layout">
                        {/* Main Content */}
                        <main className="post-content">
                            <div
                                className="content-body"
                                dangerouslySetInnerHTML={{ __html: blog.content }}
                            />
                        </main>

                        {/* Sidebar */}
                        <aside className="post-sidebar">
                            {/* Author Card */}
                            {blog.author && (
                                <div className="author-card">
                                    <h4>About the Author</h4>
                                    {blog.author.image && (
                                        <img
                                            src={blog.author.image}
                                            alt={blog.author.name}
                                            className="author-image"
                                        />
                                    )}
                                    <h5>{blog.author.name}</h5>
                                    {blog.author.bio && <p>{blog.author.bio}</p>}
                                </div>
                            )}

                            {/* Tags */}
                            {blog.tags && blog.tags.length > 0 && (
                                <div className="tags-card">
                                    <h4>Tags</h4>
                                    <div className="tags-list">
                                        {blog.tags.map((tag, i) => (
                                            <span key={i} className="tag">
                                                <FaTag /> {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </aside>
                    </div>

                    {/* FAQ Section */}
                    {blog.faqs && blog.faqs.length > 0 && (
                        <motion.section
                            className="faq-section"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2>Frequently Asked Questions</h2>
                            <div className="faq-list">
                                {blog.faqs.map((faq, index) => (
                                    <div key={index} className="faq-item" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                                        <h3 itemProp="name">{faq.question}</h3>
                                        <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                                            <p itemProp="text">{faq.answer}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.section>
                    )}

                    {/* CTA Section */}
                    <section className="post-cta">
                        <div className="cta-content">
                            <h2>Need Help with Your Marketing?</h2>
                            <p>Get a free consultation with our performance marketing experts.</p>
                            <a href="/contact" className="cta-btn">Get Free Consultation</a>
                        </div>
                    </section>
                </div>
            </div>
        </article>
    );
};

export default BlogPost;
