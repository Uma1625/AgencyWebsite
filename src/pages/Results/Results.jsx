import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiCheckCircle, HiSparkles, HiStar } from 'react-icons/hi';
import { FaQuoteLeft } from 'react-icons/fa';
import './Results.css';
import CTASection from '../../components/CTASection/CTASection';
import Premium3DCard from '../../components/Premium3DCard/Premium3DCard';
import PremiumCarousel from '../../components/PremiumCarousel/PremiumCarousel';

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
            problem: 'High patient acquisition cost (₹500+) and low show-up rates from existing campaigns.',
            solution: 'Implemented location-based Google Ads with "Near Me" targeting and automated appointment reminders.',
            impact: 'Reduced CPL by 74% and improved patient show-up rate by 40%.',
            features: ['Google Ads', 'Local SEO', 'Automated Reminders'],
            gradient: 'linear-gradient(135deg, #e11d48 0%, #be123c 100%)'
        },
        {
            title: 'Premium Real Estate Developer',
            industry: 'Real Estate',
            metrics: {
                leads: '250+',
                cpl: '₹450',
                duration: '2 Months'
            },
            problem: 'Generated many leads but few were qualified for luxury price points.',
            solution: 'Shifted to high-intent Meta Lead Forms with custom qualification questions and video tours.',
            impact: 'Generated 250+ HNI leads with a 15% site visit conversion rate.',
            features: ['Meta Ads', 'Video Marketing', 'Lead Qualification'],
            gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)'
        },
        {
            title: 'Engineering College',
            industry: 'Education',
            metrics: {
                leads: '1200+',
                cpl: '₹85',
                duration: 'Admission Season'
            },
            problem: 'Struggling to fill seats due to intense competition and generic marketing.',
            solution: 'Launched "Campus Life" video series and geo-targeted ads in feeder cities.',
            impact: 'Achieved full occupancy for the academic year with 1200+ qualified inquiries.',
            features: ['Video Campaigns', 'Geo-Targeting', 'SEO'],
            gradient: 'linear-gradient(135deg, #9333ea 0%, #7c3aed 100%)'
        },
        {
            title: 'Dental Clinic Chain',
            industry: 'Healthcare',
            metrics: {
                leads: '300+',
                cpl: '₹95',
                duration: '4 Months'
            },
            problem: 'New branches had low visibility and empty appointment slots.',
            solution: 'Deployed Hyper-Local SEO and "Emergency Dentist" Google Search campaigns.',
            impact: 'New branches reached break-even patient volume within 2 months.',
            features: ['Local SEO', 'Search Ads', 'WhatsApp Booking'],
            gradient: 'linear-gradient(135deg, #ec4899 0%, #db2777 100%)'
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

            {/* Case Studies Carousel */}
            <section className="case-studies-section section" ref={resultsRef}>
                <div className="container">
                    <div className="section-header">
                        <span className="subtitle">Our Work</span>
                        <h2>Case <span className="gold-text">Studies</span></h2>
                    </div>

                    {/* Replaced Grid with Premium Carousel */}
                    <div className="case-studies-carousel-container">
                        <PremiumCarousel
                            items={caseStudies}
                            renderItem={(study, index) => (
                                <Premium3DCard key={index} className="case-study-card-wrapper" glowColor={study.gradient}>
                                    <div className="case-study-card">
                                        <div className="case-study-header" style={{ background: study.gradient }}>
                                            <span className="industry-tag">{study.industry}</span>
                                            <h3>{study.title}</h3>
                                        </div>

                                        <div className="case-study-content">
                                            <div className="case-section problem">
                                                <h4><span className="icon">⚠️</span> Problem Statement</h4>
                                                <p>{study.problem}</p>
                                            </div>

                                            <div className="case-section solution">
                                                <h4><span className="icon">💡</span> What We Did</h4>
                                                <p>{study.solution}</p>
                                            </div>

                                            <div className="case-section result">
                                                <h4><span className="icon">🚀</span> The Outcome</h4>
                                                <div className="case-study-metrics">
                                                    <div className="metric">
                                                        <span className="metric-value">{study.metrics.leads}</span>
                                                        <span className="metric-label">Leads</span>
                                                    </div>
                                                    <div className="metric">
                                                        <span className="metric-value">{study.metrics.cpl}</span>
                                                        <span className="metric-label">CPL</span>
                                                    </div>
                                                    <div className="metric">
                                                        <span className="metric-value">{study.metrics.duration}</span>
                                                        <span className="metric-label">Duration</span>
                                                    </div>
                                                </div>
                                                <p className="impact-text">{study.impact}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Premium3DCard>
                            )}
                        />
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
                            <Premium3DCard key={index} className="testimonial-card-wrapper">
                                <motion.div
                                    className="testimonial-card card"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.15 }}
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
                            </Premium3DCard>
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
