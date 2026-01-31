import { motion } from 'framer-motion';
import { FaCalendarAlt, FaUserEdit, FaArrowRight } from 'react-icons/fa';
import './Blog.css';

const Blog = () => {
    // Placeholder blog posts
    const blogPosts = [
        {
            id: 1,
            title: "How to Reduce Cost Per Lead in Healthcare Marketing",
            excerpt: "Learn proven strategies to optimize your healthcare advertising campaigns and reduce CPL while maintaining lead quality.",
            category: "Healthcare",
            author: "Vinay",
            date: "Coming Soon",
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400"
        },
        {
            id: 2,
            title: "Meta Ads vs Google Ads: Which is Better for Lead Generation?",
            excerpt: "A comprehensive comparison of Meta and Google advertising platforms for B2B and B2C lead generation.",
            category: "Digital Marketing",
            author: "Vinay",
            date: "Coming Soon",
            image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400"
        },
        {
            id: 3,
            title: "5 Common Mistakes in Performance Marketing Campaigns",
            excerpt: "Avoid these costly mistakes that many businesses make when running paid advertising campaigns.",
            category: "Strategy",
            author: "Bhanu",
            date: "Coming Soon",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400"
        },
        {
            id: 4,
            title: "The Ultimate Guide to Real Estate Lead Generation",
            excerpt: "Discover how real estate agents and developers can generate high-quality leads through digital advertising.",
            category: "Real Estate",
            author: "Vinay",
            date: "Coming Soon",
            image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400"
        },
        {
            id: 5,
            title: "Understanding Ad Compliance: Google & Meta Policies",
            excerpt: "Stay compliant with advertising policies to avoid account suspensions and ad rejections.",
            category: "Compliance",
            author: "Sunny",
            date: "Coming Soon",
            image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=400"
        },
        {
            id: 6,
            title: "Weekly Reporting Best Practices for Marketing Agencies",
            excerpt: "How we structure our weekly reports to keep clients informed and campaigns optimized.",
            category: "Reporting",
            author: "Bhanu",
            date: "Coming Soon",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400"
        }
    ];

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
                    <div className="blog-grid">
                        {blogPosts.map((post, index) => (
                            <motion.article
                                key={post.id}
                                className="blog-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="blog-card-image">
                                    <img src={post.image} alt={post.title} />
                                    <span className="blog-category">{post.category}</span>
                                </div>
                                <div className="blog-card-content">
                                    <h2>{post.title}</h2>
                                    <p>{post.excerpt}</p>
                                    <div className="blog-card-meta">
                                        <span className="meta-item">
                                            <FaUserEdit /> {post.author}
                                        </span>
                                        <span className="meta-item">
                                            <FaCalendarAlt /> {post.date}
                                        </span>
                                    </div>
                                    <button className="read-more-btn" disabled>
                                        Coming Soon <FaArrowRight />
                                    </button>
                                </div>
                            </motion.article>
                        ))}
                    </div>

                    <motion.div
                        className="blog-coming-soon"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <p>📝 More articles coming soon! We're working on valuable content to help you grow your business.</p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Blog;
