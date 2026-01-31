import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import './FAQSection.css';

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "What is the minimum ad budget required?",
            answer: "We recommend a minimum monthly ad spend of ₹30,000 for Google Ads and ₹15,000 for Meta Ads to see meaningful results. However, the optimal budget depends on your industry, competition, and goals. During our free audit, we'll recommend a budget that aligns with your business objectives."
        },
        {
            question: "What is the timeline for seeing results?",
            answer: "Initial leads typically start coming within the first week of campaign launch. However, optimization and consistent results take 2-4 weeks as we gather data and refine targeting. For SEO, expect 3-6 months for significant organic ranking improvements. We focus on sustainable, long-term growth rather than short-term spikes."
        },
        {
            question: "Do you prioritize lead quality or quantity?",
            answer: "Absolutely quality over quantity. We focus on generating leads that are more likely to convert into paying customers. Our approach includes proper targeting, qualification questions in forms, and continuous optimization based on which leads actually convert. We'd rather give you 50 quality leads than 500 unqualified ones."
        },
        {
            question: "What access do you need from us?",
            answer: "We typically need: Admin access to your Google Ads account (or we create one), access to Meta Business Manager, Google Analytics access, and access to your website if we're building landing pages. All access is handled securely, and you retain full ownership of all accounts and data."
        },
        {
            question: "What happens if ads get rejected?",
            answer: "Ad rejections are common, especially in regulated industries like healthcare. We strictly follow Google Ads and Meta advertising policies and review all campaigns for compliance before launch. If an ad gets rejected, we quickly modify the content to comply with policies while maintaining effectiveness. Our experience with compliance helps minimize rejections."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="faq-section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="section-label">FAQs</span>
                    <h2>Frequently Asked <span className="gradient-text">Questions</span></h2>
                    <p>Honest answers to common questions about working with us</p>
                </motion.div>

                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            className={`faq-item ${openIndex === index ? 'active' : ''}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <button
                                className="faq-question"
                                onClick={() => toggleFAQ(index)}
                            >
                                <span>{faq.question}</span>
                                <FaChevronDown className={`faq-icon ${openIndex === index ? 'rotated' : ''}`} />
                            </button>
                            <motion.div
                                className="faq-answer"
                                initial={false}
                                animate={{
                                    height: openIndex === index ? 'auto' : 0,
                                    opacity: openIndex === index ? 1 : 0
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                <p>{faq.answer}</p>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
