import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { FaChartLine, FaHospital, FaHome, FaGraduationCap, FaShoppingCart, FaBuilding, FaArrowRight } from 'react-icons/fa';
import './Insights.css';
import Premium3DCard from '../../components/Premium3DCard/Premium3DCard';

const Insights = () => {
    const industries = [
        {
            icon: <FaHospital />,
            name: "Healthcare",
            insights: [
                "Patient acquisition costs vary 40-60% by location",
                "Video testimonials increase conversion by 35%",
                "Mobile-first approach critical - 70% traffic is mobile"
            ],
            avgCPL: "₹150-300"
        },
        {
            icon: <FaHome />,
            name: "Real Estate",
            insights: [
                "Lead quality improves with location-based targeting",
                "Weekend campaigns show 25% higher engagement",
                "Virtual tours reduce unqualified leads by 40%"
            ],
            avgCPL: "₹200-500"
        },
        {
            icon: <FaGraduationCap />,
            name: "Education",
            insights: [
                "Parent targeting outperforms student targeting",
                "Admission season requires 3x budget allocation",
                "Webinar funnels convert 2x better than direct ads"
            ],
            avgCPL: "₹100-250"
        },
        {
            icon: <FaShoppingCart />,
            name: "E-commerce",
            insights: [
                "Retargeting shows 300% better ROAS",
                "Cart abandonment campaigns recover 15% sales",
                "Influencer + paid ads combo increases reach by 50%"
            ],
            avgCPL: "₹50-150"
        },
        {
            icon: <FaBuilding />,
            name: "B2B Services",
            insights: [
                "LinkedIn ads show higher lead quality",
                "Long-form content builds trust before conversion",
                "Decision-making cycle: 30-90 days average"
            ],
            avgCPL: "₹300-800"
        }
    ];

    const trends = [
        {
            title: "AI-Powered Optimization",
            description: "Machine learning algorithms now optimize bids and targeting in real-time, improving ROAS by 20-30%."
        },
        {
            title: "First-Party Data Focus",
            description: "With cookie deprecation, building first-party data strategies is critical for sustainable growth."
        },
        {
            title: "Video Content Dominance",
            description: "Short-form video ads (Reels, Shorts) show 2x engagement compared to static images."
        },
        {
            title: "Omnichannel Attribution",
            description: "Multi-touch attribution models provide clearer ROI visibility across channels."
        }
    ];

    const heroRef = useRef(null);
    const heroInView = useInView(heroRef, { once: true });

    return (
        <div className="insights-page">
            {/* 3D DATA GLOBE BACKGROUND */}
            <div className="insights-globe-bg">
                <div className="insights-bg-gradient"></div>

                {/* Central Data Globe */}
                <div className="insights-data-globe">
                    <div className="data-ring ring-1"></div>
                    <div className="data-ring ring-2"></div>
                    <div className="data-ring ring-3"></div>
                    <div className="data-core-glow"></div>
                </div>

                {/* Floating Data Particles */}
                <div className="insights-particles">
                    {[...Array(30)].map((_, i) => (
                        <div key={i} className="i-particle" style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            opacity: Math.random() * 0.5 + 0.3
                        }}></div>
                    ))}
                </div>

                {/* Grid Overlay */}
                <div className="insights-grid-overlay"></div>
            </div>

            {/* Video Hero Section */}
            <section className="insights-hero" ref={heroRef}>
                <div className="hero-video-container">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="hero-video"
                        poster="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920"
                    >
                        {/* Reusing existing motion graphics or similar video */}
                        <source src="/motion_graphics1.mp4" type="video/mp4" />
                    </video>
                    <div className="hero-overlay" />
                </div>

                <div className="hero-bokeh">
                    <motion.div
                        className="bokeh-circle bokeh-1"
                        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                        transition={{ duration: 8, repeat: Infinity }}
                    />
                    <motion.div
                        className="bokeh-circle bokeh-2"
                        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
                        transition={{ duration: 10, repeat: Infinity }}
                    />
                </div>

                <div className="container">
                    <motion.div
                        className="insights-hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={heroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.span
                            className="section-label"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: 0.2 }}
                        >
                            <FaChartLine /> Market Intelligence
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={heroInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.3 }}
                        >
                            Data-Backed <span className="gradient-text">Growth Strategies</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={heroInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.4 }}
                        >
                            Proprietary performance benchmarks and industry trends to help you dominate your market in 2026.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Industry Insights */}
            <section className="industry-insights-section">
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2>Industry Performance Benchmarks</h2>
                        <p>Average metrics based on our campaign data across industries</p>
                        <p className="disclaimer-note">*Results vary by industry, budget, and market conditions.</p>
                    </motion.div>

                    <div className="industry-grid">
                        {industries.map((industry, index) => (
                            <Premium3DCard key={industry.name} className="industry-card-wrapper" glowColor={index % 2 === 0 ? "#DC2626" : "#F97316"}>
                                <motion.div
                                    className="industry-card"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <div className="industry-header">
                                        <div className="industry-icon">{industry.icon}</div>
                                        <div>
                                            <h3>{industry.name}</h3>
                                            <span className="avg-cpl">Avg CPL: {industry.avgCPL}</span>
                                        </div>
                                    </div>

                                    {/* Morphographic Trend Graph - Animated SVG */}
                                    <div className="trend-graph-container">
                                        <svg viewBox="0 0 200 60" className="trend-graph-svg">
                                            <defs>
                                                <linearGradient id={`grad-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                                                    <stop offset="0%" stopColor="rgba(220, 38, 38, 0.2)" />
                                                    <stop offset="100%" stopColor="rgba(249, 115, 22, 1)" />
                                                </linearGradient>
                                            </defs>
                                            <motion.path
                                                d="M0,50 Q50,40 80,30 T200,10"
                                                fill="none"
                                                stroke={`url(#grad-${index})`}
                                                strokeWidth="3"
                                                initial={{ pathLength: 0, opacity: 0 }}
                                                whileInView={{ pathLength: 1, opacity: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 + index * 0.1 }}
                                            />
                                            <motion.path
                                                d="M0,50 Q50,40 80,30 T200,10 L200,60 L0,60 Z"
                                                fill={`url(#grad-${index})`}
                                                opacity="0.2"
                                                initial={{ scaleY: 0 }}
                                                whileInView={{ scaleY: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 + index * 0.1 }}
                                            />
                                        </svg>
                                    </div>

                                    <ul className="industry-insights">
                                        {industry.insights.map((insight, i) => (
                                            <li key={i}>{insight}</li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </Premium3DCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trends */}
            <section className="trends-section">
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2>2026 Performance <span className="gradient-text">Marketing Trends</span></h2>
                        <p>Key trends shaping the digital advertising landscape</p>
                    </motion.div>

                    <div className="trends-grid">
                        {trends.map((trend, index) => (
                            <Premium3DCard key={trend.title} className="trend-card-wrapper" glowColor="#6366F1">
                                <motion.div
                                    className="trend-card"
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.6 }}
                                >
                                    <div className="trend-icon-wrapper">
                                        <FaChartLine className="trend-icon" />
                                        <div className="icon-pulse"></div>
                                    </div>
                                    <div>
                                        <h3>{trend.title}</h3>
                                        <p>{trend.description}</p>
                                    </div>
                                </motion.div>
                            </Premium3DCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="insights-cta">
                <div className="container">
                    <motion.div
                        className="cta-content"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2>Want Industry-Specific Insights for Your Business?</h2>
                        <p>Get a free audit with custom benchmarks for your industry.</p>
                        <a href="/contact" className="cta-btn">
                            Get Free Audit <FaArrowRight />
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Insights;
