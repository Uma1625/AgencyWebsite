import { motion } from 'framer-motion';
import {
    FaSearchDollar,
    FaFunnelDollar,
    FaRocket,
    FaCogs,
    FaChartLine
} from 'react-icons/fa';
import './ProcessFlow.css';

const ProcessFlow = () => {
    const steps = [
        {
            number: "01",
            icon: <FaSearchDollar />,
            title: "Growth Audit & Goal Setting",
            description: "We analyze your current marketing, identify opportunities, and set clear, measurable goals for your campaigns."
        },
        {
            number: "02",
            icon: <FaFunnelDollar />,
            title: "Funnel & Offer Structuring",
            description: "We build high-converting funnels and craft compelling offers that resonate with your target audience."
        },
        {
            number: "03",
            icon: <FaRocket />,
            title: "Campaign Launch",
            description: "Strategic campaign launch across Google Ads, Meta Ads, and other relevant platforms for maximum reach."
        },
        {
            number: "04",
            icon: <FaCogs />,
            title: "Daily Optimisation",
            description: "Continuous monitoring and optimization of campaigns to improve performance and reduce costs."
        },
        {
            number: "05",
            icon: <FaChartLine />,
            title: "Weekly Reporting & Scaling",
            description: "Detailed weekly reports with actionable insights, followed by strategic scaling of winning campaigns."
        }
    ];

    return (
        <section className="process-flow-section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="section-label">Our Process</span>
                    <h2>How We <span className="gradient-text">Deliver Results</span></h2>
                    <p>A proven 5-step process to generate quality leads and grow your business</p>
                </motion.div>

                <div className="process-steps">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className="process-step"
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.5 }}
                        >
                            <div className="step-number">{step.number}</div>
                            <div className="step-content">
                                <div className="step-icon">{step.icon}</div>
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                            </div>
                            {index < steps.length - 1 && <div className="step-connector"></div>}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessFlow;
