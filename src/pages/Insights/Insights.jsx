import { motion } from 'framer-motion';
import { FaChartLine, FaHospital, FaHome, FaGraduationCap, FaShoppingCart, FaBuilding, FaArrowRight } from 'react-icons/fa';
import './Insights.css';

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

    return (
        <div className="insights-page">
            {/* Background */}
            <div className="insights-bg">
                <div className="insights-gradient"></div>
                <div className="insights-glow glow-1"></div>
                <div className="insights-glow glow-2"></div>
                <div className="insights-grid-pattern"></div>
            </div>

            {/* Hero */}
            <section className="insights-hero">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="insights-hero-content"
                    >
                        <span className="section-label">Industry Insights</span>
                        <h1>Data-Backed <span className="gradient-text">Market Intelligence</span></h1>
                        <p>Performance benchmarks and trends to help you make informed marketing decisions.</p>
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
                            <motion.div
                                key={industry.name}
                                className="industry-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="industry-header">
                                    <div className="industry-icon">{industry.icon}</div>
                                    <h3>{industry.name}</h3>
                                    <span className="avg-cpl">Avg CPL: {industry.avgCPL}</span>
                                </div>
                                <ul className="industry-insights">
                                    {industry.insights.map((insight, i) => (
                                        <li key={i}>{insight}</li>
                                    ))}
                                </ul>
                            </motion.div>
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
                        <h2>2026 Performance Marketing Trends</h2>
                        <p>Key trends shaping the digital advertising landscape</p>
                    </motion.div>

                    <div className="trends-grid">
                        {trends.map((trend, index) => (
                            <motion.div
                                key={trend.title}
                                className="trend-card"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <FaChartLine className="trend-icon" />
                                <div>
                                    <h3>{trend.title}</h3>
                                    <p>{trend.description}</p>
                                </div>
                            </motion.div>
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
