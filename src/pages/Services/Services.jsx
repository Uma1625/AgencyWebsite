import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { HiArrowRight, HiCheckCircle, HiSparkles } from 'react-icons/hi';
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
    FaRocket,
    FaWhatsapp
} from 'react-icons/fa';
import {
    HiOutlineDesktopComputer,
    HiOutlineCog
} from 'react-icons/hi';
import { BiTargetLock } from 'react-icons/bi';
import './Services.css';
import CTASection from '../../components/CTASection/CTASection';
import Premium3DCard from '../../components/Premium3DCard/Premium3DCard';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const Services = () => {
    const heroRef = useRef(null);
    const servicesRef = useRef(null);
    const processRef = useRef(null);
    const rocketRef = useRef(null);
    const pathRef = useRef(null);

    const [activeStep, setActiveStep] = useState(0);

    const heroInView = useInView(heroRef, { once: true });
    const servicesInView = useInView(servicesRef, { once: true });

    // GSAP Rocket Animation following the curved SVG path
    useEffect(() => {
        if (!rocketRef.current || !pathRef.current || !processRef.current) return;

        const ctx = gsap.context(() => {
            // Rocket follows the SVG path on scroll
            gsap.to(rocketRef.current, {
                motionPath: {
                    path: pathRef.current,
                    align: pathRef.current,
                    alignOrigin: [0.5, 0.5],
                    autoRotate: 90
                },
                ease: "none",
                scrollTrigger: {
                    trigger: processRef.current,
                    start: "top 60%",
                    end: "bottom 40%",
                    scrub: 1,
                    onUpdate: (self) => {
                        const progress = self.progress;
                        if (progress < 0.25) setActiveStep(1);
                        else if (progress < 0.5) setActiveStep(2);
                        else if (progress < 0.75) setActiveStep(3);
                        else setActiveStep(4);
                    }
                }
            });

            // Animate cards on scroll
            gsap.utils.toArray('.process-row').forEach((row, i) => {
                const card = row.querySelector('.step-card');
                const isLeft = i % 2 === 0;
                gsap.from(card, {
                    opacity: 0,
                    x: isLeft ? -100 : 100,
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: row,
                        start: 'top 80%',
                        toggleActions: 'play none none none'
                    }
                });
            });
        });

        return () => ctx.revert();
    }, []);

    const services = [
        { icon: <FaGoogle />, title: 'Google Ads', description: 'Search, Display & YouTube campaigns that drive qualified leads.', features: ['Search Campaigns', 'Display Network', 'YouTube Ads', 'Performance Max'], color: '#4285F4', image: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=400' },
        { icon: <FaFacebookF />, title: 'Meta Ads', description: 'Facebook & Instagram ads for targeted audience reach.', features: ['Lead Gen Campaigns', 'Carousel Ads', 'Instagram Stories', 'Retargeting'], color: '#1877F2', image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400' },
        { icon: <FaSearchPlus />, title: 'SEO', description: 'Local & National SEO to rank higher and attract organic traffic.', features: ['Local SEO', 'Technical SEO', 'Content Strategy', 'Link Building'], color: '#10B981', image: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=400' },
        { icon: <FaFunnelDollar />, title: 'Lead Generation Funnels', description: 'High-converting funnels that capture and nurture leads.', features: ['Landing Pages', 'Email Sequences', 'CRM Integration', 'A/B Testing'], color: '#F59E0B', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400' },
        { icon: <FaLaptopCode />, title: 'Website Design', description: 'Custom websites that convert visitors into customers.', features: ['Responsive Design', 'UI/UX Design', 'CMS Development', 'Maintenance'], color: '#6366F1', image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=400' },
        { icon: <FaInstagram />, title: 'Social Media Management', description: 'Engaging content and community growth strategies.', features: ['Content Calendar', 'Community Mgmt', 'Influencer Collabs', 'Analytics'], color: '#E4405F', image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400' },
        { icon: <FaVideo />, title: 'Video Scripting & Editing', description: 'Compelling video content that tells your brand story.', features: ['Script Writing', 'Motion Graphics', 'Color Grading', 'Sound Design'], color: '#FF0000', image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400' },
        { icon: <FaUserTie />, title: 'Influencer Marketing', description: 'Strategic partnerships with relevant influencers.', features: ['Influencer Discovery', 'Campaign Mgmt', 'Performance Tracking', 'Affiliate Links'], color: '#8B5CF6', image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400' },
        { icon: <FaEnvelope />, title: 'Email & WhatsApp Marketing', description: 'Automated campaigns that drive repeat business.', features: ['Email Automation', 'WhatsApp Business', 'Drip Campaigns', 'Segmentation'], color: '#25D366', image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=400' }
    ];

    const processSteps = [
        { number: '01', stepNum: 1, icon: <BiTargetLock />, title: 'Competitor analysis and keyword research', description: 'Gain insights to stay ahead' },
        { number: '02', stepNum: 2, icon: <HiOutlineDesktopComputer />, title: 'Craft a tailored SEO and digital plan', description: 'Tailored strategies for your brand.' },
        { number: '03', stepNum: 3, icon: <FaRocket />, title: 'Optimize your website for search engines', description: 'Improve rankings & visibility' },
        { number: '04', stepNum: 4, icon: <HiOutlineCog />, title: 'Focus on long-term success & growth', description: 'Build sustainable success' }
    ];

    return (
        <div className="services-page">
            {/* UNIQUE SERVICES BACKGROUND - Half Globe Right Side */}
            <div className="services-globe-bg">
                <div className="services-bg-gradient"></div>
                <div className="services-half-globe">
                    <div className="services-arc arc-1"></div>
                    <div className="services-arc arc-2"></div>
                    <div className="services-arc arc-3"></div>
                    <div className="services-glow"></div>
                </div>
                <div className="services-grid-lines">
                    {[...Array(12)].map((_, i) => (
                        <div key={i} className="grid-line horizontal" style={{ top: `${(i + 1) * 8}%` }}></div>
                    ))}
                    {[...Array(12)].map((_, i) => (
                        <div key={i} className="grid-line vertical" style={{ left: `${(i + 1) * 8}%` }}></div>
                    ))}
                </div>
                <div className="services-particles">
                    {[...Array(30)].map((_, i) => (
                        <div key={i} className="s-particle" style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 10}s`
                        }}></div>
                    ))}
                </div>
            </div>


            {/* Hero Section */}
            <section className="services-hero" ref={heroRef}>
                <div className="hero-video-container">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="hero-video"
                        poster="/image4.jpg"
                    >
                        <source src="/video_services.mp4" type="video/mp4" />
                    </video>
                    <div className="hero-overlay" />
                </div>
                <div className="hero-bokeh">
                    <div className="bokeh-circle bokeh-1" />
                    <div className="bokeh-circle bokeh-2" />
                </div>
                <div className="container">
                    <motion.div
                        className="services-hero-content"
                        initial={{ opacity: 0, y: 40 }}
                        animate={heroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="page-badge"><HiSparkles /> Our Services</span>
                        <h1>What We <span className="gradient-text">Offer</span></h1>
                        <p>Comprehensive digital solutions tailored to elevate your business.</p>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="services-list section" ref={servicesRef}>
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 30 }}
                        animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                    >
                        <span className="subtitle"><HiSparkles /> Complete Solutions</span>
                        <h2>Our <span className="gradient-text">Services</span></h2>
                        <p>Everything you need to dominate your market online</p>
                    </motion.div>

                    <div className="services-grid-premium">
                        {services.map((service, index) => (
                            <Premium3DCard
                                key={index}
                                className="service-card-wrapper"
                            >
                                <motion.div
                                    className="service-card-compact"
                                    // Removed initial opacity to ensure visibility
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="service-card-img">
                                        <img src={service.image} alt={service.title} loading="lazy" /> {/* Added lazy load */}
                                        <div className="service-card-gradient" style={{ background: `linear-gradient(180deg, transparent 0%, ${service.color}dd 100%)` }} />
                                    </div>
                                    <div className="service-card-body">
                                        <div className="service-icon-sm" style={{ background: service.color }}>
                                            {service.icon}
                                        </div>
                                        <h3>{service.title}</h3>
                                        <p>{service.description}</p>
                                        <ul className="service-features-list">
                                            {service.features.map((feature, i) => (
                                                <li key={i}><HiCheckCircle style={{ color: service.color }} />{feature}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            </Premium3DCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* HOW WE WORK SECTION - Row-based alternating layout */}
            <section className="how-we-work-section" ref={processRef}>
                <div className="how-work-bg-grid" />
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="subtitle"><HiSparkles /> Our Process</span>
                        <h2>How We <span className="gradient-text">Work</span></h2>
                        <p>Our Step-by-Step Marketing Process</p>
                    </motion.div>

                    <div className="process-timeline">
                        {/* Central Path Line */}
                        <div className="timeline-path">
                            <svg viewBox="0 0 100 800" preserveAspectRatio="none" className="path-svg">
                                <path
                                    ref={pathRef}
                                    d="M50 0 
                                       Q80 100, 80 200
                                       Q80 280, 20 340
                                       Q-20 400, 20 460
                                       Q80 540, 80 620
                                       Q80 720, 50 800"
                                    fill="none"
                                    stroke="url(#purpleGradient)"
                                    strokeWidth="3"
                                    strokeDasharray="8 12"
                                    strokeLinecap="round"
                                    className="motion-path"
                                />
                                <defs>
                                    <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="#39FF14" />
                                        <stop offset="100%" stopColor="#6366F1" />
                                    </linearGradient>
                                </defs>
                            </svg>

                            {/* Rocket */}
                            <div className="rocket-icon" ref={rocketRef}>
                                <FaRocket />
                            </div>

                            {/* Step Numbers positioned along the zigzag path */}
                            <div className={`step-number step-num-1 ${activeStep >= 1 ? 'active' : ''}`}>1</div>
                            <div className={`step-number step-num-2 ${activeStep >= 2 ? 'active' : ''}`}>2</div>
                            <div className={`step-number step-num-3 ${activeStep >= 3 ? 'active' : ''}`}>3</div>
                            <div className={`step-number step-num-4 ${activeStep >= 4 ? 'active' : ''}`}>4</div>
                        </div>

                        {/* Step Rows - Each row has a card either left or right */}
                        {processSteps.map((step, index) => (
                            <div key={index} className={`process-row ${index % 2 === 0 ? 'left' : 'right'}`}>
                                <div className="step-card">
                                    <span className="step-bg-num">{step.number}</span>
                                    <div className="step-icon-wrapper">
                                        {step.icon}
                                    </div>
                                    <div className="step-content">
                                        <h4>{step.title}</h4>
                                        <p>{step.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <CTASection />
        </div>
    );
};

export default Services;
