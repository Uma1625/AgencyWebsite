import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiSparkles, HiPaperAirplane, HiPhone, HiMail, HiLocationMarker } from 'react-icons/hi';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        companySize: '',
        scheduleCall: false
    });

    const handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setFormData({ ...formData, [e.target.name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ firstName: '', lastName: '', email: '', companySize: '', scheduleCall: false });
    };

    const socials = [
        { icon: <FaFacebookF />, url: '#' },
        { icon: <FaTwitter />, url: '#' },
        { icon: <FaInstagram />, url: '#' },
        { icon: <FaLinkedinIn />, url: '#' }
    ];

    return (
        <div className="contact-page-redesign">
            {/* Large Half Globe Background */}
            <div className="globe-bg-container">
                <div className="globe-gradient"></div>
                <div className="half-globe">
                    <div className="globe-arc arc-outer"></div>
                    <div className="globe-arc arc-middle"></div>
                    <div className="globe-arc arc-inner"></div>
                </div>
                <div className="globe-glow"></div>

                {/* Floating particles */}
                <div className="contact-particles">
                    {[...Array(30)].map((_, i) => (
                        <div key={i} className="particle-dot" style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`
                        }}></div>
                    ))}
                </div>
            </div>

            {/* Main Content - Two Column Layout */}
            <section className="contact-section" ref={heroRef}>
                <div className="container">
                    <div className="contact-two-column">

                        {/* LEFT SIDE - Main Form */}
                        <motion.div
                            className="contact-form-column"
                            initial={{ opacity: 0, x: -50 }}
                            animate={heroInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="contact-badge">
                                <HiSparkles /> CONTACTS
                            </span>

                            <h1 className="contact-heading">
                                Get in <span className="gradient-word">Touch</span> with Us
                            </h1>

                            <p className="contact-description">
                                Please fill out the form below to share your feedback or request information about our services
                            </p>

                            {/* Main Working Form */}
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label>First name</label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            placeholder="Enter your first name"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Last name</label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            placeholder="Enter your last name"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Work email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Enter work email"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Company size</label>
                                        <select
                                            name="companySize"
                                            value={formData.companySize}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="">Select Company size</option>
                                            <option value="1-10">1-10 employees</option>
                                            <option value="11-50">11-50 employees</option>
                                            <option value="51-200">51-200 employees</option>
                                            <option value="201-500">201-500 employees</option>
                                            <option value="500+">500+ employees</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="schedule-toggle-box">
                                    <div className="toggle-text">
                                        <span className="toggle-title">Schedule a Demo Call</span>
                                        <span className="toggle-subtitle">Our manager will contact you shortly to help with all your questions.</span>
                                    </div>
                                    <label className="toggle-switch">
                                        <input
                                            type="checkbox"
                                            name="scheduleCall"
                                            checked={formData.scheduleCall}
                                            onChange={handleChange}
                                        />
                                        <span className="slider"></span>
                                    </label>
                                </div>

                                <motion.button
                                    type="submit"
                                    className="submit-button"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Submit
                                </motion.button>

                                <p className="form-agreement">
                                    By contacting with us you agree to our <a href="/terms">Terms</a> and <a href="/privacy">Privacy Policy</a>
                                </p>
                            </form>
                        </motion.div>

                        {/* RIGHT SIDE - Phone Mockup (Preview Only) */}
                        <motion.div
                            className="contact-phone-column"
                            initial={{ opacity: 0, x: 50 }}
                            animate={heroInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="phone-device">
                                <div className="phone-frame">
                                    {/* Phone Status Bar */}
                                    <div className="phone-status-bar">
                                        <span className="time">9:41</span>
                                        <div className="dynamic-island"></div>
                                        <div className="status-icons">
                                            <span>●●●●</span>
                                            <span>📶</span>
                                            <span>🔋</span>
                                        </div>
                                    </div>

                                    {/* Phone Header */}
                                    <div className="phone-app-header">
                                        <div className="app-logo">
                                            <div className="logo-box">A</div>
                                            <span>bhivrudhi</span>
                                        </div>
                                        <button className="start-btn">Start now →</button>
                                    </div>

                                    {/* Phone Content Preview */}
                                    <div className="phone-content">
                                        <span className="preview-badge">CONTACT</span>
                                        <h3 className="preview-title">Get in touch</h3>
                                        <p className="preview-text">Our manager will contact you and help with all your questions.</p>

                                        {/* Preview Fields (Display Only) */}
                                        <div className="preview-field">
                                            <label>First name</label>
                                            <div className="preview-input">Enter your first name</div>
                                        </div>
                                        <div className="preview-field">
                                            <label>Last name</label>
                                            <div className="preview-input">Enter your last name</div>
                                        </div>
                                        <div className="preview-field">
                                            <label>Work email</label>
                                            <div className="preview-input">Enter work email</div>
                                        </div>
                                        <div className="preview-field">
                                            <label>Company size</label>
                                            <div className="preview-input dropdown">Select Company size ▼</div>
                                        </div>
                                    </div>

                                    {/* Phone URL Bar */}
                                    <div className="phone-url">
                                        🔒 abhivrudhi.com
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                    </div>

                    {/* Quick Contact Info */}
                    <motion.div
                        className="contact-info-bar"
                        initial={{ opacity: 0, y: 30 }}
                        animate={heroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <div className="info-item">
                            <div className="info-icon"><HiMail /></div>
                            <div className="info-text">
                                <span className="info-label">Email Us</span>
                                <span className="info-value">hello@abhivrudhi.com</span>
                            </div>
                        </div>
                        <div className="info-item">
                            <div className="info-icon"><HiPhone /></div>
                            <div className="info-text">
                                <span className="info-label">Call Us</span>
                                <span className="info-value">+91 98765 43210</span>
                            </div>
                        </div>
                        <div className="info-item">
                            <div className="info-icon"><HiLocationMarker /></div>
                            <div className="info-text">
                                <span className="info-label">Visit Us</span>
                                <span className="info-value">Hyderabad, India</span>
                            </div>
                        </div>
                        <div className="social-links">
                            {socials.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.url}
                                    className="social-btn"
                                    whileHover={{ scale: 1.15, y: -3 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
