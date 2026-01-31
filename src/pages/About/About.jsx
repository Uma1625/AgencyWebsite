import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiCheckCircle, HiLightBulb, HiUserGroup, HiHeart, HiSparkles } from 'react-icons/hi';
import { FaAward, FaRocket, FaHandshake } from 'react-icons/fa';
import './About.css';
import CTASection from '../../components/CTASection/CTASection';

const About = () => {
    const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [storyRef, storyInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [valuesRef, valuesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [teamRef, teamInView] = useInView({ triggerOnce: true, threshold: 0.1 });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const values = [
        { icon: <HiLightBulb />, title: 'Innovation', description: 'Embracing new technologies for cutting-edge solutions.', color: '#6366F1' },
        { icon: <FaHandshake />, title: 'Integrity', description: 'Transparency and honesty in all relationships.', color: '#F59E0B' },
        { icon: <FaRocket />, title: 'Excellence', description: 'Striving for perfection in every project.', color: '#06B6D4' },
        { icon: <HiHeart />, title: 'Passion', description: 'Love for digital marketing drives our success.', color: '#EC4899' }
    ];

    const team = [
        { name: 'Vinay', role: 'Founder & Ads Expert', color: '#DC2626', description: 'Performance marketing specialist with expertise in Google Ads and Meta Ads. Passionate about helping businesses grow through data-driven advertising strategies.' },
        { name: 'Bhanu', role: 'Creative Head', color: '#F97316', description: 'Creative strategist leading our design and content team. Turns complex marketing messages into compelling visual stories.' },
        { name: 'Sunny', role: 'Video Editor', color: '#06B6D4', description: 'Video production expert creating engaging content that captures attention and drives conversions.' }
    ];

    const milestones = [
        { year: '2019', title: 'Founded', description: 'Started with a vision' },
        { year: '2020', title: 'First 10 Clients', description: 'Built initial portfolio' },
        { year: '2022', title: 'Video Studio', description: 'Launched production facility' },
        { year: '2024', title: '150+ Projects', description: 'Achieved milestone' }
    ];

    return (
        <div className="about-page">
            {/* UNIQUE ABOUT BACKGROUND - Pink/Purple Dual Spheres */}
            <div className="about-globe-bg">
                <div className="about-bg-gradient"></div>
                <div className="about-sphere-left">
                    <div className="about-arc arc-1"></div>
                    <div className="about-arc arc-2"></div>
                    <div className="about-glow glow-left"></div>
                </div>
                <div className="about-sphere-right">
                    <div className="about-arc arc-1"></div>
                    <div className="about-arc arc-2"></div>
                    <div className="about-glow glow-right"></div>
                </div>
                <div className="about-waves">
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className="wave-line" style={{
                            bottom: `${15 + i * 15}%`,
                            animationDelay: `${i * 0.8}s`
                        }}></div>
                    ))}
                </div>
                <div className="about-particles">
                    {[...Array(25)].map((_, i) => (
                        <div key={i} className="a-particle" style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 10}s`
                        }}></div>
                    ))}
                </div>
            </div>


            {/* Hero Section with Video Background */}
            <section className="about-hero" ref={heroRef}>
                <div className="hero-video-container">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="hero-video"
                        poster="/image11.jpg"
                    >
                        <source src="/video_about.mp4" type="video/mp4" />
                    </video>
                    <div className="hero-overlay" />
                </div>
                <div className="hero-bokeh">
                    <div className="bokeh-circle bokeh-1" />
                    <div className="bokeh-circle bokeh-2" />
                </div>
                <div className="container">
                    <motion.div
                        className="about-hero-content"
                        initial="hidden"
                        animate={heroInView ? "visible" : "hidden"}
                        variants={containerVariants}
                    >
                        <motion.span className="page-badge" variants={itemVariants}>
                            <HiSparkles /> About Us
                        </motion.span>
                        <motion.h1 variants={itemVariants}>
                            We're <span className="gradient-text">Abhivrudi</span>
                        </motion.h1>
                        <motion.p variants={itemVariants}>
                            A passionate team dedicated to transforming businesses through creative excellence.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Story Section */}
            <section className="story-section section" ref={storyRef}>
                <div className="container">
                    <div className="story-grid">
                        <motion.div
                            className="story-content"
                            initial={{ opacity: 0, x: -60 }}
                            animate={storyInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="subtitle">Our Story</span>
                            <h2>From Vision to <span className="gradient-text">Reality</span></h2>
                            <p>Founded in 2019, Abhivrudi Agency was born from a simple belief: every business deserves exceptional digital presence.</p>
                            <p>We specialize in working with hospitals, clinics, educational institutions, and real estate companies, crafting tailored solutions that deliver results.</p>
                            <div className="story-features">
                                {['150+ Successful Projects', '50+ Happy Clients', '5+ Years Experience'].map((feature, i) => (
                                    <motion.div
                                        key={i}
                                        className="story-feature"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={storyInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ delay: 0.3 + i * 0.1 }}
                                    >
                                        <HiCheckCircle className="feature-icon" />
                                        <span>{feature}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div
                            className="story-visual"
                            initial={{ opacity: 0, x: 60 }}
                            animate={storyInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="story-image-wrapper">
                                <img src="/image5.jpg" alt="Team" />
                                <motion.div
                                    className="story-award"
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                >
                                    <FaAward className="award-icon" />
                                    <span>Award Winning</span>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="timeline-section section">
                <div className="container">
                    <div className="section-header">
                        <span className="subtitle">Our Journey</span>
                        <h2>Milestones <span className="gold-text">Achieved</span></h2>
                    </div>
                    <div className="timeline">
                        {milestones.map((milestone, index) => (
                            <motion.div
                                key={index}
                                className="timeline-item"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="timeline-year">{milestone.year}</div>
                                <h4>{milestone.title}</h4>
                                <p>{milestone.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="values-section section" ref={valuesRef}>
                <div className="container">
                    <motion.div className="section-header" initial="hidden" animate={valuesInView ? "visible" : "hidden"} variants={containerVariants}>
                        <motion.span className="subtitle" variants={itemVariants}>Our Values</motion.span>
                        <motion.h2 variants={itemVariants}>What Drives Us <span className="gradient-text">Forward</span></motion.h2>
                    </motion.div>
                    <div className="values-grid">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                className="value-card card"
                                initial={{ opacity: 0, y: 40 }}
                                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -15 }}
                            >
                                <div className="value-icon" style={{ background: `${value.color}20`, color: value.color }}>
                                    {value.icon}
                                </div>
                                <h3>{value.title}</h3>
                                <p>{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="team-section section" ref={teamRef}>
                <div className="container">
                    <div className="section-header">
                        <span className="subtitle">Our Team</span>
                        <h2>Meet the <span className="gradient-text">Experts</span></h2>
                    </div>

                    {/* Founder Note */}
                    <motion.div
                        className="founder-note"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <p>
                            "Abhivrudhi Agency is a performance marketing agency helping businesses grow through
                            data-driven advertising. We believe in transparency, honest communication, and delivering
                            measurable results. Our approach is performance-driven, optimisation-based, and focused on
                            scalable growth."
                        </p>
                        <span className="founder-name">— Vinay, Founder</span>
                    </motion.div>

                    <div className="team-grid enhanced">
                        {team.map((member, index) => (
                            <motion.div
                                key={index}
                                className="team-card card enhanced"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={teamInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -15 }}
                            >
                                <div className="team-avatar" style={{ background: `linear-gradient(135deg, ${member.color} 0%, ${member.color}88 100%)` }}>
                                    {member.name.split(' ').map(n => n[0]).join('')}
                                </div>
                                <h4>{member.name}</h4>
                                <span className="team-role" style={{ color: member.color }}>{member.role}</span>
                                <p className="team-description">{member.description}</p>
                                <span className="photo-placeholder">📷 Photo coming soon</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="mission-section">
                <div className="container">
                    <div className="mission-grid">
                        <motion.div className="mission-card" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <div className="mission-icon"><HiLightBulb /></div>
                            <h3>Our Mission</h3>
                            <p>To empower businesses with innovative digital marketing solutions that drive growth and create lasting impact.</p>
                        </motion.div>
                        <motion.div className="mission-card" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                            <div className="mission-icon"><HiUserGroup /></div>
                            <h3>Our Vision</h3>
                            <p>To be the leading digital marketing partner for healthcare, education, and real estate sectors.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Unified CTA Section */}
            <CTASection />
        </div>
    );
};

export default About;

