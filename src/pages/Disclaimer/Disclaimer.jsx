import { motion } from 'framer-motion';
import './Disclaimer.css';

const Disclaimer = () => {
    return (
        <div className="disclaimer-page">
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
                        <h1>Disclaimer</h1>
                        <p className="last-updated">Last Updated: January 2026</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="legal-body"
                    >
                        <div className="disclaimer-highlight">
                            <h2>Important Notice</h2>
                            <p>
                                <strong>We do not guarantee specific results. Performance depends on multiple external factors
                                    including but not limited to market conditions, competition, budget allocation, industry dynamics,
                                    and client cooperation.</strong>
                            </p>
                        </div>

                        <h2>No Guarantees</h2>
                        <p>
                            Abhivrudhi Agency is a performance marketing agency helping businesses grow through data-driven
                            advertising. While we employ industry best practices and proven strategies, we cannot and do not
                            guarantee:
                        </p>
                        <ul>
                            <li>Specific lead volumes or conversion rates</li>
                            <li>Guaranteed ROI or revenue increases</li>
                            <li>Instant or immediate results</li>
                            <li>100% success rates or outcomes</li>
                            <li>Specific cost per lead (CPL) targets</li>
                        </ul>

                        <h2>Results Disclosure</h2>
                        <p>
                            Any case studies, testimonials, or performance metrics shared on our website represent past results
                            achieved for specific clients under specific conditions. <strong>Results vary by industry, budget,
                                market conditions, and numerous other factors.</strong>
                        </p>

                        <h2>Performance Marketing Approach</h2>
                        <p>Our approach is:</p>
                        <ul>
                            <li><strong>Performance-driven</strong> – We focus on measurable outcomes</li>
                            <li><strong>Optimisation-based</strong> – Continuous testing and improvement</li>
                            <li><strong>Data-backed</strong> – Decisions based on analytics</li>
                            <li><strong>Scalable growth</strong> – Building sustainable systems</li>
                        </ul>

                        <h2>Third-Party Platforms</h2>
                        <p>
                            We run advertising campaigns on platforms including but not limited to Google Ads, Meta Ads
                            (Facebook/Instagram), and others. These platforms have their own policies, algorithms, and
                            approval processes that may affect campaign performance. Ad rejections, policy changes, or
                            platform updates are beyond our control.
                        </p>

                        <h2>Advertising Policy Compliance</h2>
                        <p>
                            We strictly follow Google Ads and Meta advertising policies. Campaigns are reviewed for
                            compliance before launch. However, platform policy interpretations and enforcement may vary.
                        </p>

                        <h2>External Factors</h2>
                        <p>
                            Campaign performance can be affected by factors outside our control, including:
                        </p>
                        <ul>
                            <li>Market competition and saturation</li>
                            <li>Seasonal variations</li>
                            <li>Economic conditions</li>
                            <li>Client's product/service quality</li>
                            <li>Website performance and user experience</li>
                            <li>Sales team follow-up and conversion</li>
                        </ul>

                        <h2>Contact Us</h2>
                        <p>
                            If you have questions about this disclaimer, please contact us at:
                        </p>
                        <p className="contact-info">
                            <strong>Email:</strong> Vinay@abhivrudhiagency.com<br />
                            <strong>Phone:</strong> +91 7416506826
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Disclaimer;
