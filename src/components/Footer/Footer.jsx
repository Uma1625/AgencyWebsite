import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaYoutube,
    FaArrowUp
} from 'react-icons/fa';
import {
    HiMail,
    HiPhone,
    HiLocationMarker,
    HiSparkles
} from 'react-icons/hi';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const quickLinks = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About Us' },
        { path: '/services', label: 'Services' },
        { path: '/industries', label: 'Industries' },
        { path: '/results', label: 'Results' },
        { path: '/contact', label: 'Contact' },
        { path: '/refund', label: 'Refund Policy' },
    ];

    const services = [
        { path: '/services', label: 'Google Ads' },
        { path: '/services', label: 'Meta Ads' },
        { path: '/services', label: 'SEO' },
        { path: '/services', label: 'Lead Generation' },
        { path: '/services', label: 'Website Design' },
    ];

    const industries = [
        { path: '/industries', label: 'Clinics & Hospitals' },
        { path: '/industries', label: 'Real Estate' },
        { path: '/industries', label: 'Education' },
        { path: '/industries', label: 'Local Business' },
    ];

    const socials = [
        { icon: <FaFacebookF />, url: '#', label: 'Facebook' },
        { icon: <FaTwitter />, url: '#', label: 'Twitter' },
        { icon: <FaInstagram />, url: '#', label: 'Instagram' },
        { icon: <FaLinkedinIn />, url: '#', label: 'LinkedIn' },
        { icon: <FaYoutube />, url: '#', label: 'YouTube' },
    ];

    const floatingVariants = {
        animate: {
            y: [0, -10, 0],
            transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
        }
    };

    return (
        <footer className="footer">
            {/* Animated Background */}
            <div className="footer-bg">
                <div className="footer-particles">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="particle"
                            animate={{
                                y: [-20, -100],
                                x: [0, Math.random() * 50 - 25],
                                opacity: [0, 1, 0],
                                scale: [0, 1, 0.5]
                            }}
                            transition={{
                                duration: 4 + Math.random() * 3,
                                repeat: Infinity,
                                delay: Math.random() * 5,
                                ease: "easeOut"
                            }}
                            style={{
                                left: `${Math.random() * 100}%`,
                                bottom: '0%'
                            }}
                        />
                    ))}
                </div>
                <div className="footer-glow" />
            </div>

            {/* Scroll to Top Button */}
            <motion.button
                className="scroll-to-top"
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <FaArrowUp />
            </motion.button>

            {/* Main Footer */}
            <div className="footer-main">
                <div className="container">
                    <div className="footer-grid">
                        {/* Brand Column */}
                        <motion.div
                            className="footer-brand"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <Link to="/" className="footer-logo">
                                <div className="footer-logo-wrapper">
                                    <motion.div
                                        className="footer-logo-3d"
                                        animate={{
                                            boxShadow: [
                                                '0 0 25px rgba(220, 38, 38, 0.3)',
                                                '0 0 45px rgba(220, 38, 38, 0.6)',
                                                '0 0 25px rgba(220, 38, 38, 0.3)'
                                            ]
                                        }}
                                        transition={{ duration: 3, repeat: Infinity }}
                                        whileHover={{ rotate: 360, scale: 1.1 }}
                                    >
                                        <span className="logo-letter">A</span>
                                        <div className="logo-shine"></div>
                                    </motion.div>
                                    <div className="footer-brand-text">
                                        {'bhivrudhi'.split('').map((letter, idx) => (
                                            <motion.span
                                                key={idx}
                                                className="brand-letter"
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                transition={{ delay: idx * 0.05 }}
                                                whileHover={{ color: '#EF4444', scale: 1.1 }}
                                            >
                                                {letter}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>
                            </Link>
                            <p className="footer-description">
                                Abhivrudhi Agency is a performance marketing agency helping businesses
                                grow through data-driven advertising and scalable growth strategies.
                            </p>
                            <div className="footer-socials">
                                {socials.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.url}
                                        className="social-link"
                                        aria-label={social.label}
                                        whileHover={{ scale: 1.2, y: -5 }}
                                        whileTap={{ scale: 0.9 }}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>

                        {/* Quick Links */}
                        <motion.div
                            className="footer-column"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <h4 className="footer-title">Quick Links</h4>
                            <ul className="footer-links">
                                {quickLinks.map((link, index) => (
                                    <motion.li
                                        key={index}
                                        whileHover={{ x: 10 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <Link to={link.path} className="footer-link">
                                            <span className="link-dot" />
                                            {link.label}
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Services */}
                        <motion.div
                            className="footer-column"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h4 className="footer-title">Our Services</h4>
                            <ul className="footer-links">
                                {services.map((service, index) => (
                                    <motion.li
                                        key={index}
                                        whileHover={{ x: 10 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <Link to={service.path} className="footer-link">
                                            <span className="link-dot" />
                                            {service.label}
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Industries */}
                        <motion.div
                            className="footer-column"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.25 }}
                        >
                            <h4 className="footer-title">Industries</h4>
                            <ul className="footer-links">
                                {industries.map((industry, index) => (
                                    <motion.li
                                        key={index}
                                        whileHover={{ x: 10 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <Link to={industry.path} className="footer-link">
                                            <span className="link-dot" />
                                            {industry.label}
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div
                            className="footer-column"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <h4 className="footer-title">Contact Us</h4>
                            <div className="footer-contact">
                                <motion.a
                                    href="mailto:Vinay@abhivrudhiagency.com"
                                    className="contact-item"
                                    whileHover={{ x: 10 }}
                                >
                                    <div className="contact-icon-wrapper">
                                        <HiMail className="contact-icon" />
                                    </div>
                                    <span>Vinay@abhivrudhiagency.com</span>
                                </motion.a>
                                <motion.a
                                    href="tel:+917416506826"
                                    className="contact-item"
                                    whileHover={{ x: 10 }}
                                >
                                    <div className="contact-icon-wrapper">
                                        <HiPhone className="contact-icon" />
                                    </div>
                                    <span>+91 74165 06826</span>
                                </motion.a>
                                <motion.div
                                    className="contact-item"
                                    whileHover={{ x: 10 }}
                                >
                                    <div className="contact-icon-wrapper">
                                        <HiLocationMarker className="contact-icon" />
                                    </div>
                                    <span>Venkata Nilayam, Alwal, Hyderabad, Telangana 500010</span>
                                </motion.div>
                                <motion.div
                                    className="contact-item working-hours"
                                    whileHover={{ x: 10 }}
                                >
                                    <span>Mon - Sat: 10 AM - 7 PM IST</span>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <div className="container">
                    <motion.div
                        className="footer-bottom-content"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <p className="copyright">
                            © {currentYear} <span className="brand-name">Abhivrudhi Agency</span>. All rights reserved.
                        </p>
                        <div className="footer-legal">
                            <Link to="/privacy" className="legal-link">Privacy Policy</Link>
                            <span className="separator">•</span>
                            <Link to="/terms" className="legal-link">Terms</Link>
                            <span className="separator">•</span>
                            <Link to="/disclaimer" className="legal-link">Disclaimer</Link>
                            <span className="separator">•</span>
                            <Link to="/refund" className="legal-link">Refund Policy</Link>
                            <span className="separator">•</span>
                            <Link to="/contact" className="legal-link">Contact</Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
