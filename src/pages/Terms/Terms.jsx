import { motion } from 'framer-motion';
import { HiSparkles } from 'react-icons/hi';
import './Terms.css';

const Terms = () => {
    return (
        <div className="terms-page">
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
                        <h1>Terms & <span className="gradient-text">Conditions</span></h1>
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
                            <h2>1. Acceptance of Terms</h2>
                            <p>
                                By accessing and using the services of Abhivrudhi Agency ("Company," "we," "our," or "us"),
                                you agree to be bound by these Terms and Conditions. If you do not agree with any part of
                                these terms, please do not use our services.
                            </p>
                        </div>

                        <div className="legal-section">
                            <h2>2. Services</h2>
                            <p>Abhivrudhi Agency provides digital marketing services including but not limited to:</p>
                            <ul>
                                <li>Google Ads Management (Search, Display, YouTube)</li>
                                <li>Meta Ads Management (Facebook & Instagram)</li>
                                <li>Search Engine Optimization (SEO)</li>
                                <li>Lead Generation Funnels</li>
                                <li>Website Design & Development</li>
                                <li>Social Media Management</li>
                                <li>Video Production & Editing</li>
                                <li>Influencer Marketing</li>
                                <li>Email & WhatsApp Marketing</li>
                            </ul>
                        </div>

                        <div className="legal-section">
                            <h2>3. Service Agreement</h2>
                            <p>
                                Upon engagement of our services, a detailed service agreement will be provided outlining:
                            </p>
                            <ul>
                                <li>Scope of work and deliverables</li>
                                <li>Timeline and milestones</li>
                                <li>Pricing and payment terms</li>
                                <li>Responsibilities of both parties</li>
                            </ul>
                        </div>

                        <div className="legal-section">
                            <h2>4. Payment Terms</h2>
                            <ul>
                                <li>All fees are quoted in Indian Rupees (INR) unless otherwise specified</li>
                                <li>Payment schedules will be outlined in individual service agreements</li>
                                <li>A deposit may be required before commencement of services</li>
                                <li>Late payments may incur additional charges</li>
                                <li>Ad spend budgets are separate from service fees and are paid directly to advertising platforms</li>
                            </ul>
                        </div>

                        <div className="legal-section">
                            <h2>5. Client Responsibilities</h2>
                            <p>Clients agree to:</p>
                            <ul>
                                <li>Provide accurate and complete information required for service delivery</li>
                                <li>Grant necessary access to accounts, platforms, and tools</li>
                                <li>Respond to communications in a timely manner</li>
                                <li>Review and approve deliverables within agreed timeframes</li>
                                <li>Ensure compliance with applicable laws and regulations</li>
                            </ul>
                        </div>

                        <div className="legal-section">
                            <h2>6. Advertising Compliance</h2>
                            <p>
                                We adhere to the advertising policies of Google, Meta, and other platforms. Clients must:
                            </p>
                            <ul>
                                <li>Provide accurate information about their products/services</li>
                                <li>Not request advertising content that violates platform policies</li>
                                <li>Ensure claims made in advertisements are truthful and verifiable</li>
                                <li>Comply with industry-specific advertising regulations (healthcare, finance, etc.)</li>
                            </ul>
                            <p>
                                We reserve the right to refuse or modify advertising content that may violate platform
                                policies or applicable laws.
                            </p>
                        </div>

                        <div className="legal-section">
                            <h2>7. Results & Guarantees</h2>
                            <p>
                                While we strive to deliver the best possible results, we cannot guarantee specific
                                outcomes as digital marketing results depend on various factors including:
                            </p>
                            <ul>
                                <li>Market conditions and competition</li>
                                <li>Platform algorithm changes</li>
                                <li>Quality of products/services being marketed</li>
                                <li>Client cooperation and timely approvals</li>
                            </ul>
                            <p>
                                Past performance metrics shared in case studies are actual results achieved and
                                should not be considered as guaranteed outcomes.
                            </p>
                        </div>

                        <div className="legal-section">
                            <h2>8. Intellectual Property</h2>
                            <ul>
                                <li>Content created specifically for clients becomes their property upon full payment</li>
                                <li>Pre-existing materials, templates, and methodologies remain our property</li>
                                <li>Clients retain ownership of their brand assets and existing content</li>
                                <li>We may use non-confidential work samples in our portfolio (with client consent)</li>
                            </ul>
                        </div>

                        <div className="legal-section">
                            <h2>9. Confidentiality</h2>
                            <p>
                                Both parties agree to maintain confidentiality of proprietary information shared
                                during the course of engagement. This includes:
                            </p>
                            <ul>
                                <li>Business strategies and plans</li>
                                <li>Financial information</li>
                                <li>Customer data and lists</li>
                                <li>Marketing strategies and campaign details</li>
                            </ul>
                        </div>

                        <div className="legal-section">
                            <h2>10. Limitation of Liability</h2>
                            <p>
                                To the maximum extent permitted by law, Abhivrudhi Agency shall not be liable for:
                            </p>
                            <ul>
                                <li>Indirect, incidental, or consequential damages</li>
                                <li>Loss of profits, revenue, or data</li>
                                <li>Platform downtime or policy changes beyond our control</li>
                                <li>Third-party actions or failures</li>
                            </ul>
                            <p>
                                Our total liability shall not exceed the fees paid for the specific services
                                giving rise to the claim.
                            </p>
                        </div>

                        <div className="legal-section">
                            <h2>11. Termination</h2>
                            <ul>
                                <li>Either party may terminate services with written notice as per the service agreement</li>
                                <li>Fees for work completed up to termination date are payable</li>
                                <li>Ad campaigns will be paused upon termination</li>
                                <li>Client access credentials will be returned upon request</li>
                            </ul>
                        </div>

                        <div className="legal-section">
                            <h2>12. Governing Law</h2>
                            <p>
                                These Terms and Conditions shall be governed by and construed in accordance with
                                the laws of India. Any disputes shall be subject to the exclusive jurisdiction
                                of the courts in Hyderabad, Telangana.
                            </p>
                        </div>

                        <div className="legal-section">
                            <h2>13. Modifications</h2>
                            <p>
                                We reserve the right to modify these Terms and Conditions at any time.
                                Changes will be effective upon posting to this page with an updated revision date.
                            </p>
                        </div>

                        <div className="legal-section">
                            <h2>14. Contact Information</h2>
                            <p>
                                For any questions regarding these Terms and Conditions, please contact us:
                            </p>
                            <div className="contact-box">
                                <p><strong>Abhivrudhi Agency</strong></p>
                                <p>Email: Vinay@abhivrudhiagency.com</p>
                                <p>Phone: +91 7416506826</p>
                                <p>Address: Venkata Nilayam, Alwal, Hyderabad, Telangana 500010</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Terms;
