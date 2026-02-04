import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaUserEdit, FaArrowRight, FaClock } from 'react-icons/fa';
import './Blog.css';
import Premium3DCard from '../../components/Premium3DCard/Premium3DCard';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const Blog = () => {
    const navigate = useNavigate();
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        try {
            setLoading(true);
            const response = await fetch(`${API_BASE}/blogs?status=Published`);

            if (!response.ok) {
                throw new Error('Failed to fetch blogs');
            }

            const data = await response.json();
            setBlogs(data);
        } catch (err) {
            // If API fails, show placeholder content
            console.log('API not available, showing placeholder content');
            setBlogs([
                {
                    _id: '1',
                    title: "How to Reduce Cost Per Lead in Healthcare Marketing",
                    quickAnswer: "Learn proven strategies to optimize your healthcare advertising campaigns and reduce CPL while maintaining lead quality.",
                    categories: ["Healthcare"],
                    author: { name: "Vinay" },
                    createdAt: new Date().toISOString(),
                    readingTime: 8,
                    slug: 'reduce-cpl-healthcare',
                    featuredImage: { url: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=400" },
                    status: 'Coming Soon'
                },
                {
                    _id: '2',
                    title: "Meta Ads vs Google Ads: Which is Better for Lead Generation?",
                    quickAnswer: "A comprehensive comparison of Meta and Google advertising platforms for B2B and B2C lead generation.",
                    categories: ["Digital Marketing"],
                    author: { name: "Vinay" },
                    createdAt: new Date().toISOString(),
                    readingTime: 10,
                    slug: 'meta-vs-google-ads',
                    featuredImage: { url: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400" },
                    status: 'Coming Soon'
                },
                {
                    _id: '3',
                    title: "5 Common Mistakes in Performance Marketing Campaigns",
                    quickAnswer: "Avoid these costly mistakes that many businesses make when running paid advertising campaigns.",
                    categories: ["Strategy"],
                    author: { name: "Bhanu" },
                    createdAt: new Date().toISOString(),
                    readingTime: 6,
                    slug: 'performance-marketing-mistakes',
                    featuredImage: { url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400" },
                    status: 'Coming Soon'
                },
                {
                    _id: '4',
                    title: "The Ultimate Guide to Real Estate Lead Generation",
                    quickAnswer: "Discover how real estate agents and developers can generate high-quality leads through digital advertising.",
                    categories: ["Real Estate"],
                    author: { name: "Vinay" },
                    createdAt: new Date().toISOString(),
                    readingTime: 12,
                    slug: 'real-estate-lead-generation',
                    featuredImage: { url: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400" },
                    status: 'Coming Soon'
                },
                {
                    _id: '5',
                    title: "Understanding Ad Compliance: Google & Meta Policies",
                    quickAnswer: "Stay compliant with advertising policies to avoid account suspensions and ad rejections.",
                    categories: ["Compliance"],
                    author: { name: "Sunny" },
                    createdAt: new Date().toISOString(),
                    readingTime: 7,
                    slug: 'ad-compliance-guide',
                    featuredImage: { url: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=400" },
                    status: 'Coming Soon'
                },
                {
                    _id: '6',
                    title: "Weekly Reporting Best Practices for Marketing Agencies",
                    quickAnswer: "How we structure our weekly reports to keep clients informed and campaigns optimized.",
                    categories: ["Reporting"],
                    author: { name: "Bhanu" },
                    createdAt: new Date().toISOString(),
                    readingTime: 5,
                    slug: 'weekly-reporting-best-practices',
                    featuredImage: { url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400" },
                    status: 'Coming Soon'
                }
            ]);
        } finally {
            setLoading(false);
        }
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-IN', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        });
    };

    const isPublished = (blog) => blog.status === 'Published';

    return (
        <div className="blog-page">
            {/* 3D Globe Background with Visible Arcs */}
            <div className="blog-bg">
                <div className="blog-gradient"></div>
                {/* Large Half Globe - Right Side */}
                <div className="blog-half-globe">
                    <div className="blog-arc arc-1"></div>
                    <div className="blog-arc arc-2"></div>
                    <div className="blog-arc arc-3"></div>
                </div>
                <div className="blog-glow glow-1"></div>
                <div className="blog-glow glow-2"></div>
                {/* Floating Particles */}
                <div className="blog-particles">
                    {[...Array(20)].map((_, i) => (
                        <div key={i} className="blog-particle" style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 8}s`
                        }}></div>
                    ))}
                </div>
                {/* Grid Lines */}
                <div className="blog-grid-overlay"></div>
            </div>

            {/* Hero Section */}
            <section className="blog-hero">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="blog-hero-content"
                    >
                        <span className="section-label">Our Blog</span>
                        <h1>Performance Marketing <span className="gradient-text">Insights</span></h1>
                        <p>Data-backed strategies, industry trends, and actionable tips to grow your business through performance marketing.</p>
                    </motion.div>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="blog-grid-section">
                <div className="container">
                    {loading ? (
                        <div className="blog-loading">
                            <div className="loader"></div>
                            <p>Loading articles...</p>
                        </div>
                    ) : (
                        <>
                            <div className="blog-grid">
                                {blogs.map((post, index) => (
                                    <div key={post._id} className="blog-card-wrapper">
                                        <motion.article
                                            className="blog-card"
                                            initial={{ opacity: 0, y: 30 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                        >
                                            <div className="blog-card-image">
                                                <img
                                                    src={post.featuredImage?.url?.startsWith('http')
                                                        ? post.featuredImage.url
                                                        : `http://localhost:5000${post.featuredImage?.url || ''}`
                                                    }
                                                    alt={post.featuredImage?.altText || post.title}
                                                />
                                                <span className="blog-category">{post.categories?.[0] || 'General'}</span>
                                            </div>
                                            <div className="blog-card-content">
                                                <h2>{post.title}</h2>
                                                <p>{post.quickAnswer || post.metaDescription || ''}</p>
                                                <div className="blog-card-meta">
                                                    <span className="meta-item">
                                                        <FaUserEdit /> {post.author?.name || 'Abhivrudhi'}
                                                    </span>
                                                    <span className="meta-item">
                                                        <FaClock /> {post.readingTime || 5} min
                                                    </span>
                                                </div>
                                                {isPublished(post) ? (
                                                    <button
                                                        className="read-more-btn active"
                                                        onClick={() => navigate(`/blog/${post.slug}`)}
                                                    >
                                                        Read Article <FaArrowRight />
                                                    </button>
                                                ) : (
                                                    <button className="read-more-btn" disabled>
                                                        Coming Soon <FaArrowRight />
                                                    </button>
                                                )}
                                            </div>
                                        </motion.article>
                                    </div>
                                ))}
                            </div>

                            {blogs.length === 0 && !loading && (
                                <motion.div
                                    className="blog-coming-soon"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                >
                                    <p>📝 Articles are being prepared. Check back soon for valuable content to help you grow your business!</p>
                                </motion.div>
                            )}

                            {blogs.some(b => b.status === 'Coming Soon') && (
                                <motion.div
                                    className="blog-coming-soon"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                >
                                    <p>📝 More articles coming soon! We're working on valuable content to help you grow your business.</p>
                                </motion.div>
                            )}
                        </>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Blog;
