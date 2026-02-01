import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { HiArrowRight, HiCheckCircle, HiSparkles } from 'react-icons/hi';
import { FaHospital, FaGraduationCap, FaBuilding, FaHotel } from 'react-icons/fa';
import './Industries.css';
import CTASection from '../../components/CTASection/CTASection';
import Premium3DCard from '../../components/Premium3DCard/Premium3DCard';

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
            image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600',
            size: 'large' // Spans 2 columns
        },
        {
            icon: <FaGraduationCap />,
            title: 'Education',
            subtitle: 'Schools & Colleges',
            description: 'Creative solutions to showcase academic excellence.',
            features: ['Campus Tour Videos', 'Admission Campaigns'],
            gradient: 'linear-gradient(135deg, #F59E0B 0%, #F97316 100%)',
            image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600',
            size: 'small'
        },
        {
            icon: <FaBuilding />,
            title: 'Real Estate',
            subtitle: 'Properties & Developers',
            description: 'Showcase properties with stunning visuals.',
            features: ['Property Videography', 'Virtual Tours', 'Lead Gen'],
            gradient: 'linear-gradient(135deg, #06B6D4 0%, #0EA5E9 100%)',
            image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600',
            size: 'small'
        },
        {
            icon: <FaHotel />,
            title: 'Hospitality',
            subtitle: 'Hotels & Restaurants',
            description: 'Attract guests with mouthwatering visuals and engaging campaigns.',
            features: ['Food Photography', 'Ambiance Videos', 'Review Management', 'Influencer Marketing'],
            gradient: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
            image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600',
            size: 'large'
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

            {/* Industries Bento Grid */}
            <section className="industries-list section" ref={industriesRef}>
                <div className="container">
                    <div className="bento-grid">
                        {industries.map((industry, index) => (
                            <Premium3DCard
                                key={index}
                                className={`bento-item-wrapper ${industry.size === 'large' ? 'span-2' : 'span-1'}`}
                                glowColor={industry.gradient}
                            >
                                <motion.div
                                    className="bento-card"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={industriesInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <div className="bento-image">
                                        <img src={industry.image} alt={industry.title} />
                                        <div className="bento-overlay" style={{ background: industry.gradient }} />
                                    </div>
                                    <div className="bento-content">
                                        <div className="bento-badge" style={{ background: industry.gradient }}>
                                            {industry.icon}
                                        </div>
                                        <h3>{industry.title}</h3>
                                        <p>{industry.subtitle}</p>

                                        <ul className="bento-features">
                                            {industry.features.slice(0, 2).map((feat, i) => (
                                                <li key={i}><HiCheckCircle /> {feat}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            </Premium3DCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* Unified CTA Section */}
            <CTASection />
        </div>
    );
};

export default Industries;
