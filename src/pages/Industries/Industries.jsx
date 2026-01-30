import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { HiArrowRight, HiCheckCircle, HiSparkles } from 'react-icons/hi';
import { FaHospital, FaGraduationCap, FaBuilding, FaHotel, FaStethoscope, FaChalkboardTeacher } from 'react-icons/fa';
import './Industries.css';
import CTASection from '../../components/CTASection/CTASection';

const Industries = () => {
    const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [industriesRef, industriesInView] = useInView({ triggerOnce: true, threshold: 0.1 });

    const industries = [
        {
            icon: <FaHospital />,
            title: 'Healthcare',
            subtitle: 'Hospitals & Clinics',
            description: 'Specialized marketing strategies for healthcare providers to connect with patients.',
            features: ['Patient-Centric Campaigns', 'Doctor Profile Videos', 'Online Reputation Management', 'Healthcare SEO'],
            gradient: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
            image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600'
        },
        {
            icon: <FaGraduationCap />,
            title: 'Education',
            subtitle: 'Schools & Colleges',
            description: 'Creative solutions to showcase academic excellence and attract students.',
            features: ['Campus Tour Videos', 'Admission Campaigns', 'Social Media Growth', 'Event Coverage'],
            gradient: 'linear-gradient(135deg, #F59E0B 0%, #F97316 100%)',
            image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600'
        },
        {
            icon: <FaBuilding />,
            title: 'Real Estate',
            subtitle: 'Properties & Developers',
            description: 'Showcase properties with stunning visuals and targeted marketing.',
            features: ['Property Videography', 'Virtual Tours', 'Lead Generation', 'Drone Photography'],
            gradient: 'linear-gradient(135deg, #06B6D4 0%, #0EA5E9 100%)',
            image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600'
        },
        {
            icon: <FaHotel />,
            title: 'Hospitality',
            subtitle: 'Hotels & Restaurants',
            description: 'Attract guests with mouthwatering visuals and engaging campaigns.',
            features: ['Food Photography', 'Ambiance Videos', 'Review Management', 'Influencer Marketing'],
            gradient: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
            image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600'
        }
    ];

    return (
        <div className="industries-page">
            {/* UNIQUE INDUSTRIES BACKGROUND - Blue/Teal Top Corner Globe */}
            <div className="industries-globe-bg">
                <div className="industries-bg-gradient"></div>
                <div className="industries-corner-globe">
                    <div className="industries-arc arc-1"></div>
                    <div className="industries-arc arc-2"></div>
                    <div className="industries-arc arc-3"></div>
                    <div className="industries-glow"></div>
                </div>
                <div className="industries-hexagons">
                    {[...Array(15)].map((_, i) => (
                        <div key={i} className="hex-shape" style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 8}s`
                        }}></div>
                    ))}
                </div>
                <div className="industries-particles">
                    {[...Array(20)].map((_, i) => (
                        <div key={i} className="i-particle" style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 12}s`
                        }}></div>
                    ))}
                </div>
            </div>


            {/* Hero Section */}
            <section className="industries-hero" ref={heroRef}>
                <div className="hero-video-container">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="hero-video"
                        poster="/image1.jpg"
                    >
                        <source src="/video_industries.mp4" type="video/mp4" />
                    </video>
                    <div className="hero-overlay" />
                </div>
                <div className="hero-bokeh">
                    <div className="bokeh-circle bokeh-1" />
                    <div className="bokeh-circle bokeh-2" />
                </div>
                <div className="container">
                    <motion.div className="industries-hero-content" initial={{ opacity: 0, y: 40 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
                        <span className="page-badge"><HiSparkles /> Industries</span>
                        <h1>Sectors We <span className="gradient-text">Serve</span></h1>
                        <p>Specialized expertise for healthcare, education, real estate, and hospitality industries.</p>
                    </motion.div>
                </div>
            </section>

            {/* Industries Grid */}
            <section className="industries-list section" ref={industriesRef}>
                <div className="container">
                    {industries.map((industry, index) => (
                        <motion.div
                            key={index}
                            className={`industry-block ${index % 2 === 1 ? 'reverse' : ''}`}
                            initial={{ opacity: 0, y: 60 }}
                            animate={industriesInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: index * 0.15 }}
                        >
                            <motion.div
                                className="industry-image"
                                whileHover={{ scale: 1.02 }}
                            >
                                <img src={industry.image} alt={industry.title} />
                                <div className="image-overlay" style={{ background: industry.gradient.replace('135deg', '180deg').replace('100%)', '100%, transparent)') }} />
                                <motion.div
                                    className="industry-badge"
                                    style={{ background: industry.gradient }}
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                >
                                    {industry.icon}
                                </motion.div>
                            </motion.div>

                            <div className="industry-content">
                                <span className="industry-subtitle">{industry.subtitle}</span>
                                <h2>{industry.title}</h2>
                                <p>{industry.description}</p>

                                <ul className="industry-features">
                                    {industry.features.map((feature, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.1 * i }}
                                        >
                                            <HiCheckCircle className="check-icon" />
                                            {feature}
                                        </motion.li>
                                    ))}
                                </ul>

                                <Link to="/contact">
                                    <motion.button
                                        className="btn btn-primary"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Get Started <HiArrowRight />
                                    </motion.button>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Unified CTA Section */}
            <CTASection />
        </div>
    );
};

export default Industries;
