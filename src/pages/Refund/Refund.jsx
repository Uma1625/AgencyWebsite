import { motion } from 'framer-motion';
import './Refund.css';

const Refund = () => {
    return (
        <div className="refund-page">
            {/* Background */}
            <div className="legal-bg">
                <div className="legal-gradient"></div>
                <div className="legal-glow"></div>
            </div>

            <section className="legal-content">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="legal-header"
                    >
                        <h1>Refund & Cancellation Policy</h1>
                        <p className="last-updated">Last Updated: January 2026</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="legal-body"
                    >
                        <h2>Overview</h2>
                        <p>
                            At Abhivrudhi Agency, we are committed to delivering value through our performance marketing
                            services. This policy outlines our refund and cancellation terms.
                        </p>

                        <h2>Service Nature</h2>
                        <p>
                            Our services involve strategic planning, campaign setup, ad creative development, and ongoing
                            optimization. Due to the nature of digital marketing services:
                        </p>
                        <ul>
                            <li>Work begins immediately upon project confirmation</li>
                            <li>Resources are allocated and campaigns are prepared</li>
                            <li>Third-party platform fees may be incurred</li>
                        </ul>

                        <h2>Cancellation Policy</h2>
                        <h3>Before Campaign Launch</h3>
                        <ul>
                            <li>Full refund available if cancelled within 48 hours of payment</li>
                            <li>50% refund if cancelled after 48 hours but before campaign launch</li>
                            <li>Setup fees and third-party costs are non-refundable</li>
                        </ul>

                        <h3>After Campaign Launch</h3>
                        <ul>
                            <li>No refunds for work already completed</li>
                            <li>Monthly retainers: 30-day notice required for cancellation</li>
                            <li>Pro-rated billing for partial months may apply</li>
                        </ul>

                        <h2>No Refunds For</h2>
                        <ul>
                            <li>Ad spend paid directly to platforms (Google, Meta, etc.)</li>
                            <li>Completed creative work and deliverables</li>
                            <li>Strategy and consultation sessions already provided</li>
                            <li>Setup and configuration fees</li>
                        </ul>

                        <h2>Performance Disputes</h2>
                        <p>
                            As stated in our disclaimer, we do not guarantee specific results. Refund requests based
                            solely on campaign performance not meeting expectations are not eligible, provided we have
                            delivered the agreed services.
                        </p>

                        <h2>How to Request Cancellation</h2>
                        <p>To cancel services or request a refund:</p>
                        <ol>
                            <li>Email us at Vinay@abhivrudhiagency.com</li>
                            <li>Include your project/invoice details</li>
                            <li>State the reason for cancellation</li>
                            <li>We will respond within 2-3 business days</li>
                        </ol>

                        <h2>Refund Processing</h2>
                        <p>
                            Approved refunds will be processed within 7-10 business days to the original payment method.
                        </p>

                        <h2>Contact</h2>
                        <p className="contact-info">
                            <strong>Email:</strong> Vinay@abhivrudhiagency.com<br />
                            <strong>Phone:</strong> +91 7416506826<br />
                            <strong>Hours:</strong> Monday - Saturday, 10 AM - 7 PM IST
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Refund;
