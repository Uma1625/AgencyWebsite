import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX, HiPhone } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About Us' },
        { path: '/services', label: 'Services' },
        { path: '/industries', label: 'Industries' },
        { path: '/results', label: 'Results' },
        { path: '/blog', label: 'Blogs' },
        { path: '/insights', label: 'Insights' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    return (
        <motion.nav
            className={`navbar ${isScrolled ? 'scrolled' : ''}`}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
        >
            {/* Animated Border */}
            <div className="navbar-border" />

            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <motion.div
                        className="logo-wrapper-premium"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {/* 3D Logo Container with Holographic Effect */}
                        <div className="logo-3d-container">
                            {/* Rotating Ring Effect */}
                            <motion.div
                                className="logo-orbit-ring"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                            />

                            {/* Glowing Backdrop */}
                            <motion.div
                                className="logo-glow-backdrop"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.4, 0.7, 0.4]
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />

                            {/* Main Logo Icon */}
                            <motion.span
                                className="logo-icon-3d"
                                animate={{
                                    rotateY: [0, 10, 0, -10, 0],
                                    boxShadow: [
                                        '0 0 25px rgba(220, 38, 38, 0.4), inset 0 0 20px rgba(239, 68, 68, 0.2)',
                                        '0 0 50px rgba(220, 38, 38, 0.7), inset 0 0 30px rgba(239, 68, 68, 0.3)',
                                        '0 0 25px rgba(220, 38, 38, 0.4), inset 0 0 20px rgba(239, 68, 68, 0.2)'
                                    ]
                                }}
                                transition={{ duration: 3, repeat: Infinity }}
                            >
                                <span className="logo-letter-main">A</span>
                                <div className="logo-shimmer"></div>
                            </motion.span>
                        </div>

                        {/* Brand Name with 3D Morphing Effect */}
                        <div className="logo-text-3d-container">
                            {'bhivrudhi'.split('').map((letter, index) => (
                                <motion.span
                                    key={index}
                                    className="logo-morph-letter"
                                    initial={{ opacity: 0, y: 20, rotateX: -90 }}
                                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                                    transition={{
                                        delay: 0.5 + index * 0.08,
                                        duration: 0.6,
                                        type: "spring",
                                        stiffness: 100
                                    }}
                                    whileHover={{
                                        scale: 1.2,
                                        color: '#a78bfa',
                                        textShadow: '0 0 20px rgba(167, 139, 250, 0.8)'
                                    }}
                                >
                                    {letter}
                                </motion.span>
                            ))}
                            <motion.div
                                className="logo-text-underline"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ delay: 1.2, duration: 0.8 }}
                            />
                        </div>
                    </motion.div>
                </Link>

                <div className="navbar-links">
                    {navLinks.map((link, index) => (
                        <motion.div
                            key={link.path}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 + index * 0.05 }}
                        >
                            <Link
                                to={link.path}
                                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                            >
                                <span className="link-text">{link.label}</span>
                                {location.pathname === link.path && (
                                    <motion.div
                                        className="nav-link-indicator"
                                        layoutId="activeIndicator"
                                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                    />
                                )}
                                <span className="link-glow" />
                            </Link>
                        </motion.div>
                    ))}

                </div>

                <div className="navbar-actions">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <Link to="/contact" className="btn btn-contact navbar-cta-btn">
                            <span className="btn-text">Contact Us</span>
                            <span className="btn-shine"></span>
                        </Link>
                    </motion.div>
                </div>

                <motion.button
                    className="mobile-menu-toggle"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Toggle menu"
                >
                    <AnimatePresence mode="wait">
                        {isMobileMenuOpen ? (
                            <motion.div
                                key="close"
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <HiX />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="menu"
                                initial={{ rotate: 90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: -90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <HiMenuAlt3 />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.button>
            </div>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="mobile-menu"
                        initial={{ opacity: 0, height: 0, y: -20 }}
                        animate={{ opacity: 1, height: 'auto', y: 0 }}
                        exit={{ opacity: 0, height: 0, y: -20 }}
                        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                    >
                        <div className="mobile-menu-bg" />
                        <div className="mobile-menu-links">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.path}
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.05 * index }}
                                >
                                    <Link
                                        to={link.path}
                                        className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
                                    >
                                        <span className="mobile-link-number">0{index + 1}</span>
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="mobile-cta-group"
                            >
                                <Link to="/contact" className="mobile-cta">
                                    <button className="btn btn-contact">
                                        Contact Us
                                    </button>
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
