import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
    HiArrowRight,
    HiStar,
    HiCheckCircle,
    HiSparkles,
    HiPhone,
    HiBadgeCheck,
    HiClock,
    HiChevronLeft,
    HiChevronRight
} from 'react-icons/hi';
import {
    FaGoogle,
    FaFacebookF,
    FaSearchPlus,
    FaFunnelDollar,
    FaLaptopCode,
    FaInstagram,
    FaVideo,
    FaUserTie,
    FaEnvelope,
    FaWhatsapp,
    FaHospital,
    FaBuilding,
    FaGraduationCap,
    FaStore,
    FaUserMd,
    FaBriefcase,
    FaCar,
    FaRocket,
    FaQuoteLeft
} from 'react-icons/fa';
import { useState } from 'react';
import './Home.css';
import CTASection from '../../components/CTASection/CTASection';
import ProcessFlow from '../../components/ProcessFlow/ProcessFlow';
import FAQSection from '../../components/FAQSection/FAQSection';
import ToolsStack from '../../components/ToolsStack/ToolsStack';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    const heroRef = useRef(null);
    const servicesRef = useRef(null);
    const whyUsRef = useRef(null);
    const industriesRef = useRef(null);
    const stackedCardsRef = useRef(null);
    const blogRef = useRef(null);
    const testimonialsRef = useRef(null);

    const [currentSlide, setCurrentSlide] = useState(0);

    const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
    const servicesInView = useInView(servicesRef, { once: true, margin: "-100px" });
    const whyUsInView = useInView(whyUsRef, { once: true, margin: "-100px" });
    const industriesInView = useInView(industriesRef, { once: true, margin: "-100px" });
    const blogInView = useInView(blogRef, { once: true, margin: "-100px" });

    const { scrollYProgress } = useScroll();
    const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -100]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.3]);

    // GSAP Scroll Animations
    useEffect(() => {
        const ctx = gsap.context(() => {
            // Counter animation
            gsap.utils.toArray('.counter-number').forEach(counter => {
                const target = parseInt(counter.getAttribute('data-target'));
                gsap.fromTo(counter,
                    { innerText: 0 },
                    {
                        innerText: target,
                        duration: 2,
                        ease: 'power2.out',
                        snap: { innerText: 1 },
                        scrollTrigger: {
                            trigger: counter,
                            start: 'top 80%',
                            toggleActions: 'play none none none'
                        }
                    }
                );
            });

            // 3D Cards are now animated with Framer Motion - no GSAP needed here
        });

        return () => ctx.revert();
    }, []);

    // Auto-slide for testimonials - FASTER (3 seconds)
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide(prev => (prev + 1) % testimonials.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    const services = [
        { icon: <FaGoogle />, title: 'Google Ads', description: 'Search, Display & YouTube campaigns that drive qualified leads.', color: '#4285F4', image: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=400' },
        { icon: <FaFacebookF />, title: 'Meta Ads', description: 'Facebook & Instagram ads for targeted audience reach.', color: '#1877F2', image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400' },
        { icon: <FaSearchPlus />, title: 'SEO', description: 'Local & National SEO to rank higher and attract organic traffic.', color: '#10B981', image: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=400' },
        { icon: <FaFunnelDollar />, title: 'Lead Generation Funnels', description: 'High-converting funnels that capture and nurture leads.', color: '#F59E0B', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400' },
        { icon: <FaLaptopCode />, title: 'Website Design', description: 'Custom websites that convert visitors into customers.', color: '#6366F1', image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=400' },
        { icon: <FaInstagram />, title: 'Social Media', description: 'Engaging content and community growth strategies.', color: '#E4405F', image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400' },
        { icon: <FaVideo />, title: 'Video Production', description: 'Compelling video content that tells your brand story.', color: '#FF0000', image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400' },
        { icon: <FaUserTie />, title: 'Influencer Marketing', description: 'Strategic partnerships with relevant influencers.', color: '#8B5CF6', image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400' },
        { icon: <FaEnvelope />, title: 'Email & WhatsApp', description: 'Automated campaigns that drive repeat business.', color: '#25D366', image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=400' }
    ];

    const whyUs = [
        { icon: <HiBadgeCheck />, text: 'Industry-Specific Strategies (No Templates)' },
        { icon: <HiBadgeCheck />, text: 'Lead Quality > Lead Quantity' },
        { icon: <HiBadgeCheck />, text: 'Transparent Reporting' },
        { icon: <HiBadgeCheck />, text: 'Compliance-Friendly Ads (Meta & Google Safe)' },
        { icon: <HiBadgeCheck />, text: 'Dedicated Account Manager' }
    ];

    const industries = [
        { icon: <FaHospital />, name: 'Clinics & Hospitals', image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400' },
        { icon: <FaBuilding />, name: 'Real Estate', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400' },
        { icon: <FaGraduationCap />, name: 'Education & Coaching', image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400' },
        { icon: <FaStore />, name: 'Local Businesses', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400' },
        { icon: <FaUserMd />, name: 'Healthcare Professionals', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400' },
        { icon: <FaBriefcase />, name: 'Service-Based', image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400' },
        { icon: <FaCar />, name: 'Automobile', image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400' },
        { icon: <FaRocket />, name: 'Startups & SMEs', image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400' }
    ];

    const stats = [
        { number: 2000, suffix: '+', label: 'Leads Generated' },
        { number: 150, prefix: '₹', suffix: ' avg', label: 'Cost per Lead' },
        { number: 500, suffix: '+', label: 'Appointments Booked' },
        { number: 50, suffix: '+', label: 'Happy Clients' }
    ];

    const testimonials = [
        {
            name: 'Dr. Ramesh Kumar',
            role: 'Director, City Hospital',
            content: 'Abhivrudhi transformed our digital presence. Our patient inquiries increased by 200%! The team understands healthcare marketing perfectly.',
            rating: 5,
            image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400',
            metrics: { leads: '400+', cpl: '₹130' }
        },
        {
            name: 'Priya Sharma',
            role: 'Principal, DAV School',
            content: 'The video campaign was exceptional. We got more than double the admissions compared to last year. Highly recommended!',
            rating: 5,
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
            metrics: { leads: '1200+', cpl: '₹85' }
        },
        {
            name: 'Vikram Reddy',
            role: 'MD, Prime Properties',
            content: 'Best investment for our real estate marketing. They understand what sells and deliver consistent quality leads.',
            rating: 5,
            image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400',
            metrics: { leads: '250+', cpl: '₹450' }
        }
    ];

    const blogPosts = [
        {
            title: '10 Google Ads Strategies for Healthcare in 2026',
            description: 'Learn the most effective Google Ads tactics specifically designed for clinics and hospitals.',
            image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600',
            date: 'Jan 25, 2026',
            category: 'Google Ads'
        },
        {
            title: 'How to Generate Real Estate Leads with Meta Ads',
            description: 'A comprehensive guide to Facebook and Instagram advertising for property developers.',
            image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600',
            date: 'Jan 20, 2026',
            category: 'Meta Ads'
        },
        {
            title: 'SEO for Education: Rank Higher, Attract More Students',
            description: 'Everything you need to know about search engine optimization for schools and coaching institutes.',
            image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600',
            date: 'Jan 15, 2026',
            category: 'SEO'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } }
    };

    // Card animation variants for left/right/bottom entrance
    const getCardAnimation = (index) => {
        const row = Math.floor(index / 3);
        const col = index % 3;

        if (col === 0) return { initial: { opacity: 0, x: -80 }, animate: { opacity: 1, x: 0 } };
        if (col === 2) return { initial: { opacity: 0, x: 80 }, animate: { opacity: 1, x: 0 } };
        return { initial: { opacity: 0, y: 80 }, animate: { opacity: 1, y: 0 } };
    };

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    return (
        <div className="home home-page">
            {/* UNIQUE HOME BACKGROUND - Indigo/Gold Center Globe */}
            <div className="home-globe-bg">
                <div className="home-bg-gradient"></div>
                <div className="home-center-globe">
                    <div className="home-arc arc-1"></div>
                    <div className="home-arc arc-2"></div>
                    <div className="home-arc arc-3"></div>
                    <div className="home-glow primary"></div>
                    <div className="home-glow secondary"></div>
                </div>
                <div className="home-orbit-rings">
                    <div className="orbit-ring ring-1"></div>
                    <div className="orbit-ring ring-2"></div>
                </div>
                <div className="home-particles">
                    {[...Array(30)].map((_, i) => (
                        <div key={i} className="h-particle" style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 12}s`
                        }}></div>
                    ))}
                </div>
            </div>


            {/* Hero Section */}
            <section className="hero" ref={heroRef}>
                <div className="hero-video-container">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="hero-video"
                        poster="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920"
                    >
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

                <motion.div
                    className="container hero-container"
                    style={{ y: heroY, opacity: heroOpacity }}
                >
                    <motion.div
                        className="hero-content"
                        initial="hidden"
                        animate={heroInView ? "visible" : "hidden"}
                        variants={containerVariants}
                    >
                        <motion.div className="hero-badge" variants={itemVariants}>
                            <HiSparkles className="badge-icon" />
                            <span>End-to-End Digital Growth Partner</span>
                        </motion.div>

                        <motion.h1 className="hero-title" variants={itemVariants}>
                            We Generate{' '}
                            <span className="gradient-text">High-Quality Leads</span>
                            <br />for Businesses That Want Real Growth
                        </motion.h1>

                        <motion.p className="hero-subtitle" variants={itemVariants}>
                            Google Ads • Meta Ads • SEO • Video Marketing • Websites
                        </motion.p>

                        <motion.div className="hero-trust" variants={itemVariants}>
                            <div className="trust-item">
                                <HiCheckCircle className="trust-icon" />
                                <span>Trusted by Clinics, Hospitals & Service Businesses</span>
                            </div>
                            <div className="trust-item">
                                <HiCheckCircle className="trust-icon" />
                                <span>ROI-Focused • Data-Driven • Transparent Reporting</span>
                            </div>
                        </motion.div>

                        <motion.div className="hero-cta-buttons" variants={itemVariants}>
                            <Link to="/contact">
                                <motion.button
                                    className="btn btn-primary btn-glow"
                                    whileHover={{ scale: 1.05, boxShadow: '0 20px 50px rgba(220, 38, 38, 0.5)' }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Get Free Growth Audit
                                    <HiArrowRight />
                                </motion.button>
                            </Link>
                            <motion.a
                                href="tel:+919876543210"
                                className="btn btn-outline-white"
                                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <HiPhone className="btn-icon" />
                                Talk to a Marketing Expert
                            </motion.a>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </section>

            {/* Services Section - Compact Cards with Left/Right/Bottom Animation */}
            <section className="services-section section" ref={servicesRef}>
                <div className="section-bg">
                    <div className="bg-grid" />
                </div>
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial="hidden"
                        animate={servicesInView ? "visible" : "hidden"}
                        variants={containerVariants}
                    >
                        <motion.span className="subtitle" variants={itemVariants}>
                            <HiSparkles /> Our Services
                        </motion.span>
                        <motion.h2 variants={itemVariants}>
                            One Stop <span className="gradient-text">Digital Growth Solution</span>
                        </motion.h2>
                        <motion.p variants={itemVariants}>
                            Everything you need to dominate your market online
                        </motion.p>
                    </motion.div>

                    <div className="services-grid-compact">
                        {services.map((service, index) => {
                            const animation = getCardAnimation(index);
                            return (
                                <motion.div
                                    key={index}
                                    className="service-card-small"
                                    initial={animation.initial}
                                    whileInView={animation.animate}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.08 }}
                                    whileHover={{ y: -12, scale: 1.03 }}
                                >
                                    <div className="service-card-image">
                                        <img src={service.image} alt={service.title} />
                                        <div className="service-gradient" style={{ background: `linear-gradient(180deg, transparent 30%, ${service.color}ee 100%)` }} />
                                    </div>
                                    <div className="service-card-info">
                                        <div className="service-icon-mini" style={{ background: service.color }}>
                                            {service.icon}
                                        </div>
                                        <h3>{service.title}</h3>
                                        <p>{service.description}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    <motion.div
                        className="services-cta-btn"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Link to="/services">
                            <motion.button className="btn btn-secondary" whileHover={{ scale: 1.05 }}>
                                View All Services <HiArrowRight />
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Testimonials Carousel with Title */}
            <section className="testimonials-carousel-section section" ref={testimonialsRef}>
                <div className="testimonials-bg">
                    <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920" alt="Background" />
                    <div className="testimonials-overlay" />
                </div>
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="subtitle"><FaQuoteLeft /> Success Stories</span>
                        <h2>What Our Clients Say About <span className="gold-text">Abhivrudhi</span></h2>
                        <p>Real feedback from businesses we've helped grow</p>
                    </motion.div>

                    <div className="testimonials-slider">
                        <button className="slider-arrow prev" onClick={prevSlide}>
                            <HiChevronLeft />
                        </button>

                        <div className="slider-container">
                            {testimonials.map((testimonial, index) => (
                                <motion.div
                                    key={index}
                                    className={`testimonial-slide ${index === currentSlide ? 'active' : ''}`}
                                    initial={{ opacity: 0, x: 100 }}
                                    animate={{
                                        opacity: index === currentSlide ? 1 : 0,
                                        x: index === currentSlide ? 0 : 100
                                    }}
                                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                                >
                                    <div className="testimonial-slide-content">
                                        <div className="testimonial-image-side">
                                            <img src={testimonial.image} alt={testimonial.name} />
                                            <div className="image-overlay" />
                                        </div>
                                        <div className="testimonial-text-side">
                                            <div className="quote-icon"><FaQuoteLeft /></div>
                                            <div className="rating">
                                                {[...Array(testimonial.rating)].map((_, i) => (
                                                    <HiStar key={i} className="star" />
                                                ))}
                                            </div>
                                            <p className="quote-text">"{testimonial.content}"</p>
                                            <div className="author-info">
                                                <h5>{testimonial.name}</h5>
                                                <span>{testimonial.role}</span>
                                            </div>
                                            <div className="testimonial-metrics-row">
                                                <div className="metric-item">
                                                    <span className="value">{testimonial.metrics.leads}</span>
                                                    <span className="label">Leads</span>
                                                </div>
                                                <div className="metric-item">
                                                    <span className="value">{testimonial.metrics.cpl}</span>
                                                    <span className="label">CPL</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <button className="slider-arrow next" onClick={nextSlide}>
                            <HiChevronRight />
                        </button>

                        <div className="slider-dots">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    className={`dot ${index === currentSlide ? 'active' : ''}`}
                                    onClick={() => setCurrentSlide(index)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Abhivrudhi Section */}
            <section className="why-us-section section" ref={whyUsRef}>
                <div className="container">
                    <div className="why-us-grid">
                        <motion.div
                            className="why-us-content"
                            initial={{ opacity: 0, x: -60 }}
                            animate={whyUsInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="subtitle">Why Choose Us</span>
                            <h2>Why Businesses Choose <span className="gradient-text">Abhivrudhi Agency</span></h2>
                            <div className="why-us-list">
                                {whyUs.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        className="why-us-item"
                                        initial={{ opacity: 0, x: -30 }}
                                        animate={whyUsInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ delay: 0.2 + index * 0.1 }}
                                    >
                                        <span className="why-icon">{item.icon}</span>
                                        <span>{item.text}</span>
                                    </motion.div>
                                ))}
                            </div>
                            <Link to="/contact">
                                <motion.button
                                    className="btn btn-primary"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Get Your Free Audit <HiArrowRight />
                                </motion.button>
                            </Link>
                        </motion.div>
                        <motion.div
                            className="why-us-visual"
                            initial={{ opacity: 0, x: 60 }}
                            animate={whyUsInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="stats-showcase">
                                {stats.map((stat, index) => (
                                    <motion.div
                                        key={index}
                                        className="stat-card"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <span className="stat-number gradient-text">
                                            {stat.prefix}<span className="counter-number" data-target={stat.number}>{stat.number}</span>{stat.suffix}
                                        </span>
                                        <span className="stat-label">{stat.label}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Industries Section - Split Layout */}
            <section className="industries-section section" ref={industriesRef}>
                <div className="container">
                    <div className="industries-split-layout">
                        {/* Left Side - Header Content */}
                        <motion.div
                            className="industries-left-content"
                            initial={{ opacity: 0, y: 40 }}
                            animate={industriesInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="subtitle"><HiSparkles /> Industries We Serve</span>
                            <h2>
                                Industries We<br />
                                <span className="gradient-text">Serve</span>
                            </h2>
                            <p className="industries-description">
                                We specialize in marketing for healthcare, real estate, education, and local businesses - delivering targeted strategies that generate quality leads and real growth.
                            </p>
                            <Link to="/industries">
                                <motion.button
                                    className="btn btn-outline-green"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    View All <HiArrowRight />
                                </motion.button>
                            </Link>
                        </motion.div>

                        {/* Right Side - Stacked Industry Cards */}
                        <div className="industries-right-cards" ref={stackedCardsRef}>
                            {industries.slice(0, 4).map((industry, index) => (
                                <motion.div
                                    key={index}
                                    className="industry-stacked-card"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.15,
                                        ease: "easeOut"
                                    }}
                                    whileHover={{
                                        scale: 1.02,
                                        boxShadow: "0 20px 50px rgba(220, 38, 38, 0.3)"
                                    }}
                                >
                                    <div className="stacked-card-content">
                                        <div className="stacked-card-icon">
                                            {industry.icon}
                                        </div>
                                        <div className="stacked-card-text">
                                            <h4>{industry.name}</h4>
                                            <p>Expert marketing strategies tailored for {industry.name.toLowerCase()} to maximize growth and ROI.</p>
                                        </div>
                                    </div>
                                    <motion.div
                                        className="stacked-card-image"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <img src={industry.image} alt={industry.name} />
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Latest Blog Articles */}
            <section className="blog-section section" ref={blogRef}>
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="subtitle"><HiSparkles /> Knowledge Hub</span>
                        <h2>Latest Blog <span className="gradient-text">Articles</span></h2>
                        <p>Insights and strategies to grow your business</p>
                    </motion.div>

                    <div className="blog-grid">
                        {blogPosts.map((post, index) => (
                            <motion.article
                                key={index}
                                className="blog-card"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                whileHover={{ y: -15 }}
                            >
                                <div className="blog-card-image">
                                    <motion.img
                                        src={post.image}
                                        alt={post.title}
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.4 }}
                                    />
                                    <div className="blog-category">{post.category}</div>
                                </div>
                                <div className="blog-card-content">
                                    <div className="blog-meta">
                                        <span><HiClock /> {post.date}</span>
                                    </div>
                                    <h3>{post.title}</h3>
                                    <p>{post.description}</p>
                                    <Link to="/blog" className="blog-read-more">
                                        Read More <HiArrowRight />
                                    </Link>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section - Split Layout with 3D Animation */}
            <CTASection />

            {/* 5-Step Process Flow */}
            <ProcessFlow />

            {/* Tools & Technology Stack */}
            <ToolsStack />

            {/* FAQs */}
            <FAQSection />
        </div>
    );
};

export default Home;
