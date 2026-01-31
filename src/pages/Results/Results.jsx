import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { HiArrowRight, HiCheckCircle, HiSparkles, HiStar } from 'react-icons/hi';
import { FaWhatsapp, FaQuoteLeft } from 'react-icons/fa';
import './Results.css';
import CTASection from '../../components/CTASection/CTASection';

const Results = () => {
    const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [resultsRef, resultsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

    const caseStudies = [
        {
            title: 'Multi-Specialty Clinic',
            industry: 'Healthcare',
            metrics: {
                leads: '400+',
                cpl: '₹130',
                duration: '3 Months'
            },
            description: 'Generated high-quality patient leads with location-specific targeting.',
            features: ['Google Ads Campaign', 'Local SEO', 'Social Media Management'],
            gradient: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)'
        },
        {
            title: 'Premium Real Estate Developer',
            industry: 'Real Estate',
            metrics: {
                leads: '250+',
                cpl: '₹450',
                duration: '2 Months'
            },
            description: 'Qualified property buyer leads for premium residential project.',
            features: ['Meta Ads', 'Lead Funnels', 'Video Marketing'],
            gradient: 'linear-gradient(135deg, #06B6D4 0%, #0EA5E9 100%)'
        },
        {
            title: 'Engineering College',
            industry: 'Education',
            metrics: {
                leads: '1200+',
                cpl: '₹85',
                duration: 'Admission Season'
            },
            description: 'Admission inquiries from target states with high conversion rate.',
            features: ['Performance Marketing', 'Campus Videos', 'SEO'],
            gradient: 'linear-gradient(135deg, #F59E0B 0%, #F97316 100%)'
        },
        {
            title: 'Dental Clinic Chain',
            industry: 'Healthcare',
            metrics: {
                leads: '300+',
                cpl: '₹95',
                duration: '4 Months'
            },
            description: 'Multiple location leads with appointment booking integration.',
            features: ['Google Ads', 'Reputation Management', 'WhatsApp Marketing'],
            gradient: 'linear-gradient(135deg, #10B981 0%, #059669 100%)'
        }
    ];

    const testimonials = [
        {
            name: 'Dr. Ramesh Kumar',
            role: 'Director, City Hospital',
            content: 'Abhivrudhi transformed our digital presence. Our patient inquiries increased by 200%! The ROI has been exceptional.',
            rating: 5
        },
        {
            name: 'Priya Sharma',
            role: 'Principal, DAV School',
            content: 'The video campaign was exceptional. We got more than double the admissions compared to last year. Highly recommended!',
            rating: 5
        },
        {
            name: 'Vikram Reddy',
            role: 'MD, Prime Properties',
            content: 'Best investment for our real estate marketing. They understand what sells and deliver consistent quality leads.',
            rating: 5
        }
    ];

    return (
        <div className="results-page">
            {/* UNIQUE RESULTS BACKGROUND - Green Bottom Wave */}
            <div className="results-globe-bg">
                <div className="results-bg-gradient"></div>
                <div className="results-wave-globe">
                    <div className="results-arc arc-1"></div>
                    <div className="results-arc arc-2"></div>
                    <div className="results-arc arc-3"></div>
                    <div className="results-glow"></div>
                </div>
                <div className="results-data-lines">
                    {[...Array(8)].map((_, i) => (
                        <div key={i} className="data-line" style={{
                            bottom: `${10 + i * 10}%`,
                            animationDelay: `${i * 0.5}s`
                        }}></div>
                    ))}
                </div>
                <div className="results-particles">
                    {[...Array(25)].map((_, i) => (
                        <div key={i} className="r-particle" style={{
                            left: `${Math.random() * 100}%`,
                            top: `${30 + Math.random() * 70}%`,
                            animationDelay: `${Math.random() * 10}s`
                        }}></div>
                    ))}
                </div>
            </div>


            {/* Hero Section */}
            <section className="results-hero" ref={heroRef}>
                <div className="hero-video-container">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="hero-video"
                        poster="/image2.jpg"
                    >
                        <source src="/video_results.mp4" type="video/mp4" />
                    </video>
                    <div className="hero-overlay" />
                </div>
                <div className="hero-bokeh">
                    <div className="bokeh-circle bokeh-1" />
                    <div className="bokeh-circle bokeh-2" />
                </div>
                <div className="container">
                    <motion.div
                        className="results-hero-content"
                        initial={{ opacity: 0, y: 40 }}
                        animate={heroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="page-badge"><HiSparkles /> Case Studies</span>
                        <h1>Proven <span className="gradient-text">Results</span></h1>
                        <p>Real numbers. Real businesses. Real growth.</p>
                    </motion.div>
                </div>
            </section>

            {/* Video Testimonial Section */}
            <section className="video-section section">
                <div className="container">
                    <div className="section-header">
                        <span className="subtitle"><FaQuoteLeft /> Client Success Story</span>
                        <h2>What Our <span className="gradient-text">Clients Say</span></h2>
                    </div>
                    <div className="video-testimonial-wrapper">
                        <motion.div
                            className="video-container"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <video
                                controls
                                poster="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800"
                                className="testimonial-video"
                            >
                                <source src="/motion_graphics2.mp4" type="video/mp4" />
                            </video>
                        </motion.div>
                        <p className="video-disclaimer">
                            "This is not an actor. This is a real client sharing real results achieved with Abhivrudhi Agency."
                        </p>
                    </div>
                </div>
            </section>

            {/* Case Studies Grid */}
            <section className="case-studies-section section" ref={resultsRef}>
                <div className="container">
                    <div className="section-header">
                        <span className="subtitle">Our Work</span>
                        <h2>Case <span className="gold-text">Studies</span></h2>
                    </div>
                    <div className="case-studies-grid">
                        {caseStudies.map((study, index) => (
                            <motion.div
                                key={index}
                                className="case-study-card card"
                                initial={{ opacity: 0, y: 40 }}
                                animate={resultsInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                            >
                                <div className="case-study-header" style={{ background: study.gradient }}>
                                    <span className="industry-tag">{study.industry}</span>
                                    <h3>{study.title}</h3>
                                </div>
                                <div className="case-study-metrics">
                                    <div className="metric">
                                        <span className="metric-value">{study.metrics.leads}</span>
                                        <span className="metric-label">Leads</span>
                                    </div>
                                    <div className="metric">
                                        <span className="metric-value">{study.metrics.cpl}</span>
                                        <span className="metric-label">Cost/Lead</span>
                                    </div>
                                    <div className="metric">
                                        <span className="metric-value">{study.metrics.duration}</span>
                                        <span className="metric-label">Duration</span>
                                    </div>
                                </div>
                                <p className="case-study-description">{study.description}</p>
                                <ul className="case-study-features">
                                    {study.features.map((feature, i) => (
                                        <li key={i}><HiCheckCircle /> {feature}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials-section section">
                <div className="container">
                    <div className="section-header">
                        <span className="subtitle">Testimonials</span>
                        <h2>What Our Clients Say About <span className="gradient-text">Abhivrudhi</span></h2>
                    </div>
                    <div className="testimonials-grid">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                className="testimonial-card card"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                whileHover={{ y: -10 }}
                            >
                                <div className="testimonial-rating">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <HiStar key={i} className="star-icon" />
                                    ))}
                                </div>
                                <p className="testimonial-content">"{testimonial.content}"</p>
                                <div className="testimonial-author">
                                    <div className="author-avatar">{testimonial.name[0]}</div>
                                    <div className="author-info">
                                        <h5>{testimonial.name}</h5>
                                        <span>{testimonial.role}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How We Measure Success */}
            <section className="measure-success-section section">
                <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
                    <h2 style={{ marginBottom: '24px' }}>How We Measure <span className="gradient-text">Success</span></h2>
                    <p style={{ marginBottom: '32px', color: 'var(--text-light)' }}>
                        We believe in complete transparency. Our reporting aligns with Google Partner requirements and includes:
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                        <div className="measurement-card" style={{ padding: '20px', background: 'rgba(30,30,40,0.6)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <h4 style={{ color: '#fff', marginBottom: '8px' }}>Google & Meta Reports</h4>
                            <p style={{ fontSize: '0.9rem' }}>Direct dashboard data</p>
                        </div>
                        <div className="measurement-card" style={{ padding: '20px', background: 'rgba(30,30,40,0.6)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <h4 style={{ color: '#fff', marginBottom: '8px' }}>Analytics Integration</h4>
                            <p style={{ fontSize: '0.9rem' }}>GA4 & CRM tracking</p>
                        </div>
                        <div className="measurement-card" style={{ padding: '20px', background: 'rgba(30,30,40,0.6)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <h4 style={{ color: '#fff', marginBottom: '8px' }}>Weekly Reporting</h4>
                            <p style={{ fontSize: '0.9rem' }}>Consistent updates</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <CTASection />
        </div>
    );
};

export default Results;
