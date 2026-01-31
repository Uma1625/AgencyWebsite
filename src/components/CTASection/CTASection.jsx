import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiSparkles, HiCheckCircle, HiArrowRight } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';
import './CTASection.css';

const CTASection = () => {
    // Text animation for brand name
    const letterVariants = {
        hidden: { opacity: 0, y: 50, rotateX: -90 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
                delay: i * 0.08,
                duration: 0.6,
                ease: [0.6, -0.05, 0.01, 0.99]
            }
        })
    };

    const brandName = "bhivrudhi";

    return (
        <section className="cta-split-section">
            {/* Dark Gradient Background with particles */}
            <div className="cta-dark-bg">
                <div className="cta-gradient-layer"></div>
                <div className="cta-particles">
                    {[...Array(30)].map((_, i) => (
                        <div key={i} className={`particle particle-${i % 5}`} style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${15 + Math.random() * 10}s`
                        }}></div>
                    ))}
                </div>
                {/* Floating geometric shapes */}
                <div className="floating-shapes">
                    <div className="shape shape-1"></div>
                    <div className="shape shape-2"></div>
                    <div className="shape shape-3"></div>
                </div>
            </div>

            <div className="container">
                <div className="cta-split-grid">
                    {/* Left Side - Content */}
                    <motion.div
                        className="cta-left-content"
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.span
                            className="cta-badge"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <HiSparkles /> Let's Grow Together
                        </motion.span>

                        <motion.h2
                            className="cta-split-title"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            Ready to <span className="gradient-highlight">Transform</span><br />
                            Your Business?
                        </motion.h2>

                        <motion.p
                            className="cta-split-desc"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            Get your free growth audit today. No obligations, just actionable insights to boost your leads and revenue.
                        </motion.p>

                        <motion.div
                            className="cta-features-list"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            <div className="cta-feature-item">
                                <div className="feature-check"><HiCheckCircle /></div>
                                <span>Free Growth Audit</span>
                            </div>
                            <div className="cta-feature-item">
                                <div className="feature-check"><HiCheckCircle /></div>
                                <span>No Long-Term Contracts</span>
                            </div>
                            <div className="cta-feature-item">
                                <div className="feature-check"><HiCheckCircle /></div>
                                <span>Talk to a Real Expert</span>
                            </div>
                        </motion.div>

                        <motion.div
                            className="cta-split-buttons"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                        >
                            <Link to="/contact">
                                <motion.button
                                    className="btn-cta-gold"
                                    whileHover={{
                                        scale: 1.05,
                                        boxShadow: "0 25px 60px rgba(245, 158, 11, 0.5)",
                                        y: -4
                                    }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Get Your Free Quote <HiArrowRight />
                                </motion.button>
                            </Link>
                            <motion.a
                                href="https://wa.me/917416506826?text=Hi%2C%20I%20want%20a%20free%20growth%20audit"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-cta-green"
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0 25px 60px rgba(37, 211, 102, 0.5)",
                                    y: -4
                                }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <FaWhatsapp /> WhatsApp Us
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    {/* Right Side - Premium 3D Brand Visual with Morphographics */}
                    <motion.div
                        className="cta-right-visual"
                        initial={{ opacity: 0, x: 60, rotateY: -15 }}
                        whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <div className="brand-visual-3d">
                            {/* Holographic Background */}
                            <div className="holographic-bg"></div>

                            {/* Animated Orbit Rings with Gradient */}
                            <motion.div
                                className="brand-orbit orbit-outer"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                            >
                                <div className="orbit-dot dot-1"></div>
                                <div className="orbit-dot dot-2"></div>
                                <div className="orbit-dot dot-3"></div>
                            </motion.div>
                            <motion.div
                                className="brand-orbit orbit-middle"
                                animate={{ rotate: -360 }}
                                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                            >
                                <div className="orbit-dot dot-4"></div>
                                <div className="orbit-dot dot-5"></div>
                            </motion.div>
                            <motion.div
                                className="brand-orbit orbit-inner"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                            />

                            {/* Premium 3D Logo Container with Holographic Effect */}
                            <motion.div
                                className="brand-logo-container-3d"
                                animate={{
                                    scale: [1, 1.05, 1],
                                    rotateY: [0, 5, -5, 0],
                                }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            >
                                {/* Holographic Shimmer Overlay */}
                                <div className="holographic-shimmer"></div>

                                {/* Logo Inner with 3D Transform */}
                                <motion.div
                                    className="brand-logo-inner-3d"
                                    animate={{
                                        boxShadow: [
                                            "0 0 60px rgba(239, 68, 68, 0.4), 0 0 100px rgba(220, 38, 38, 0.2), inset 0 0 30px rgba(255,255,255,0.1)",
                                            "0 0 100px rgba(239, 68, 68, 0.6), 0 0 150px rgba(220, 38, 38, 0.3), inset 0 0 50px rgba(255,255,255,0.2)",
                                            "0 0 60px rgba(239, 68, 68, 0.4), 0 0 100px rgba(220, 38, 38, 0.2), inset 0 0 30px rgba(255,255,255,0.1)"
                                        ]
                                    }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                >
                                    <span className="brand-logo-letter-3d">A</span>
                                </motion.div>

                                {/* Reflection Effect */}
                                <div className="logo-reflection"></div>
                            </motion.div>

                            {/* Premium 3D Brand Name with Morphing Animation */}
                            <motion.div
                                className="brand-name-3d-container"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                {/* Main Brand Text with 3D Effect */}
                                <div className="brand-name-wrapper">
                                    <motion.span
                                        className="brand-prefix-3d"
                                        initial={{ opacity: 0, scale: 0, rotateY: -180 }}
                                        whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
                                    >
                                        A
                                    </motion.span>
                                    <div className="brand-suffix-3d">
                                        {brandName.split('').map((letter, index) => (
                                            <motion.span
                                                key={index}
                                                className="morph-letter"
                                                custom={index}
                                                variants={letterVariants}
                                                initial="hidden"
                                                whileInView="visible"
                                                viewport={{ once: true }}
                                            >
                                                {letter}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>

                                {/* Glowing Underline */}
                                <motion.div
                                    className="brand-underline"
                                    initial={{ scaleX: 0, opacity: 0 }}
                                    whileInView={{ scaleX: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 1.2, duration: 0.8 }}
                                />
                            </motion.div>

                            {/* Floating Tech Icons with Enhanced Animation */}
                            <motion.div
                                className="floating-tech tech-1"
                                animate={{
                                    y: [0, -20, 0],
                                    rotate: [0, 10, 0],
                                    scale: [1, 1.1, 1]
                                }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <div className="tech-icon-3d">📊</div>
                            </motion.div>
                            <motion.div
                                className="floating-tech tech-2"
                                animate={{
                                    y: [0, 15, 0],
                                    x: [0, -10, 0],
                                    rotate: [0, -15, 0]
                                }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <div className="tech-icon-3d">🚀</div>
                            </motion.div>
                            <motion.div
                                className="floating-tech tech-3"
                                animate={{
                                    y: [0, -12, 0],
                                    x: [0, 12, 0],
                                    scale: [1, 1.15, 1]
                                }}
                                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <div className="tech-icon-3d">💡</div>
                            </motion.div>
                            <motion.div
                                className="floating-tech tech-4"
                                animate={{
                                    y: [0, 18, 0],
                                    rotate: [0, -20, 0]
                                }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <div className="tech-icon-3d">⚡</div>
                            </motion.div>

                            {/* Enhanced Glow Layers */}
                            <div className="brand-glow glow-purple"></div>
                            <div className="brand-glow glow-blue"></div>
                            <div className="brand-glow glow-pink"></div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
