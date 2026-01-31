import { motion } from 'framer-motion';
import { HiSparkles } from 'react-icons/hi';
import './Privacy.css';

const Privacy = () => {
    return (
        <div className="privacy-page">
            {/* 3D Globe Background with Visible Arcs */}
            <div className="legal-3d-bg">
                <div className="legal-gradient"></div>
                <div className="legal-half-globe">
                    <div className="legal-arc arc-1"></div>
                    <div className="legal-arc arc-2"></div>
                    <div className="legal-arc arc-3"></div>
                </div>
                <div className="legal-glow glow-1"></div>
                <div className="legal-glow glow-2"></div>
                <div className="legal-grid-overlay"></div>
            </div>

            {/* Hero Section */}
            <section className="legal-hero">
                <div className="container">
                    <motion.div
                        className="legal-hero-content"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="page-badge"><HiSparkles /> Legal</span>
                        <h1>Privacy <span className="gradient-text">Policy</span></h1>
                        <p>Last Updated: January 2026</p>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="legal-content section">
                <div className="container">
                    <motion.div
                        className="content-wrapper"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="legal-section">
                            <h2>1. Introduction</h2>
                            <p>
                                Abhivrudhi Agency ("we," "our," or "us") is committed to protecting your privacy.
                                This Privacy Policy explains how we collect, use, disclose, and safeguard your
                                information when you visit our website or use our services.
                            </p>
                            <p>
                                By accessing our website or services, you agree to the collection and use of
                                information in accordance with this policy.
                            </p>
                        </div>

                        <div className="legal-section">
                            <h2>2. Information We Collect</h2>
                            <h3>Personal Information</h3>
                            <p>We may collect personal information that you voluntarily provide, including:</p>
                            <ul>
                                <li>Name and contact information (email, phone number)</li>
                                <li>Business name and type</li>
                                <li>Messages and inquiries submitted through our contact forms</li>
                                <li>Information provided during consultations</li>
                            </ul>

                            <h3>Automatically Collected Information</h3>
                            <p>When you visit our website, we may automatically collect:</p>
                            <ul>
                                <li>IP address and browser type</li>
                                <li>Device information and operating system</li>
                                <li>Pages visited and time spent on our website</li>
                                <li>Referring website addresses</li>
                            </ul>
                        </div>

                        <div className="legal-section">
                            <h2>3. How We Use Your Information</h2>
                            <p>We use the collected information for the following purposes:</p>
                            <ul>
                                <li>To respond to your inquiries and provide customer support</li>
                                <li>To provide and improve our digital marketing services</li>
                                <li>To send you marketing communications (with your consent)</li>
                                <li>To analyze website usage and improve user experience</li>
                                <li>To comply with legal obligations</li>
                            </ul>
                        </div>

                        <div className="legal-section">
                            <h2>4. Cookies and Tracking Technologies</h2>
                            <p>
                                We use cookies and similar tracking technologies to enhance your experience on our website.
                                These technologies help us:
                            </p>
                            <ul>
                                <li>Remember your preferences and settings</li>
                                <li>Understand how you interact with our website</li>
                                <li>Measure the effectiveness of our marketing campaigns</li>
                                <li>Provide relevant advertisements through Google Ads and Meta Ads</li>
                            </ul>
                            <p>
                                You can control cookie preferences through your browser settings. Disabling cookies
                                may affect certain features of our website.
                            </p>
                        </div>

                        <div className="legal-section">
                            <h2>5. Third-Party Services</h2>
                            <p>We may use third-party services that collect information, including:</p>
                            <ul>
                                <li><strong>Google Analytics:</strong> For website analytics and performance tracking</li>
                                <li><strong>Google Ads:</strong> For advertising and remarketing purposes</li>
                                <li><strong>Meta (Facebook) Pixel:</strong> For advertising optimization and conversion tracking</li>
                                <li><strong>WhatsApp Business:</strong> For customer communication</li>
                            </ul>
                            <p>
                                These third-party services have their own privacy policies governing the use of your information.
                            </p>
                        </div>

                        <div className="legal-section">
                            <h2>6. Lead Form Data Usage</h2>
                            <p>
                                When you submit information through our contact forms or lead generation forms:
                            </p>
                            <ul>
                                <li>Your data is securely stored and processed</li>
                                <li>We use this information solely to contact you regarding your inquiry</li>
                                <li>Your information may be used to provide relevant marketing communications (with consent)</li>
                                <li>We do not sell, rent, or share your personal information with third parties for their marketing purposes</li>
                            </ul>
                        </div>

                        <div className="legal-section">
                            <h2>7. WhatsApp & Email Communication</h2>
                            <p>
                                By providing your phone number or email address, you consent to receive communications
                                through these channels regarding:
                            </p>
                            <ul>
                                <li>Responses to your inquiries</li>
                                <li>Service updates and information</li>
                                <li>Marketing communications (you may opt-out at any time)</li>
                            </ul>
                            <p>
                                You can unsubscribe from marketing communications at any time by contacting us or
                                using the unsubscribe option provided in our communications.
                            </p>
                        </div>

                        <div className="legal-section">
                            <h2>8. Data Security</h2>
                            <p>
                                We implement appropriate technical and organizational security measures to protect
                                your personal information against unauthorized access, alteration, disclosure, or
                                destruction. However, no method of transmission over the Internet is 100% secure.
                            </p>
                        </div>

                        <div className="legal-section">
                            <h2>9. Data Retention</h2>
                            <p>
                                We retain your personal information only for as long as necessary to fulfill the
                                purposes outlined in this Privacy Policy, unless a longer retention period is
                                required by law.
                            </p>
                        </div>

                        <div className="legal-section">
                            <h2>10. Your Rights</h2>
                            <p>You have the right to:</p>
                            <ul>
                                <li>Access your personal information</li>
                                <li>Correct inaccurate or incomplete information</li>
                                <li>Request deletion of your personal information</li>
                                <li>Withdraw consent for marketing communications</li>
                                <li>Object to the processing of your personal information</li>
                            </ul>
                            <p>
                                To exercise these rights, please contact us using the information provided below.
                            </p>
                        </div>

                        <div className="legal-section">
                            <h2>11. No Data Selling</h2>
                            <p>
                                <strong>We do not sell, rent, or trade your personal information to third parties.</strong>
                                Your data is used solely for the purposes described in this Privacy Policy.
                            </p>
                        </div>

                        <div className="legal-section">
                            <h2>12. Children's Privacy</h2>
                            <p>
                                Our services are not directed to individuals under the age of 18. We do not
                                knowingly collect personal information from children.
                            </p>
                        </div>

                        <div className="legal-section">
                            <h2>13. Changes to This Policy</h2>
                            <p>
                                We may update this Privacy Policy from time to time. We will notify you of any
                                changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
                            </p>
                        </div>

                        <div className="legal-section">
                            <h2>14. Contact Us</h2>
                            <p>
                                If you have any questions about this Privacy Policy or our data practices,
                                please contact us at:
                            </p>
                            <div className="contact-box">
                                <p><strong>Abhivrudhi Agency</strong></p>
                                <p>Email: Vinay@abhivrudhiagency.com</p>
                                <p>Phone: +91 7416506826</p>
                                <p>Address: Venkata Nilayam, Alwal, Hyderabad, Telangana 500010</p>
                                <p>Working Hours: Mon - Sat, 10 AM - 7 PM IST</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Privacy;
