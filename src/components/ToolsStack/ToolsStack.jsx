import { motion } from 'framer-motion';
import {
    FaGoogle,
    FaFacebookF,
    FaWordpress,
    FaReact,
    FaChartBar,
    FaFigma,
    FaSearch,
    FaVideo,
    FaWhatsapp
} from 'react-icons/fa';
import {
    SiGoogleads,
    SiGoogleanalytics,
    SiCanva,
    SiAdobepremierepro,
    SiAdobephotoshop,
    SiSemrush,
    SiHubspot,
    SiMailchimp
} from 'react-icons/si';
import './ToolsStack.css';

const ToolsStack = () => {
    const toolCategories = [
        {
            name: "Marketing",
            tools: [
                { icon: <SiGoogleads />, name: "Google Ads" },
                { icon: <FaFacebookF />, name: "Meta Ads" },
                { icon: <SiSemrush />, name: "SEMrush" },
                { icon: <FaWhatsapp />, name: "WhatsApp Business" }
            ]
        },
        {
            name: "Analytics & Reporting",
            tools: [
                { icon: <SiGoogleanalytics />, name: "Google Analytics" },
                { icon: <FaChartBar />, name: "Data Studio" },
                { icon: <SiHubspot />, name: "HubSpot" },
                { icon: <SiMailchimp />, name: "Mailchimp" }
            ]
        },
        {
            name: "Website Development",
            tools: [
                { icon: <FaReact />, name: "React" },
                { icon: <FaWordpress />, name: "WordPress" },
                { icon: <FaSearch />, name: "SEO Tools" },
                { icon: <FaGoogle />, name: "Google Sites" }
            ]
        },
        {
            name: "Design & Video",
            tools: [
                { icon: <FaFigma />, name: "Figma" },
                { icon: <SiCanva />, name: "Canva Pro" },
                { icon: <SiAdobepremierepro />, name: "Premiere Pro" },
                { icon: <SiAdobephotoshop />, name: "Photoshop" }
            ]
        }
    ];

    return (
        <section className="tools-stack-section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="section-label">Our Tools</span>
                    <h2>Technology <span className="gradient-text">Stack</span></h2>
                    <p>Industry-leading tools we use to deliver results</p>
                </motion.div>

                <div className="tools-grid">
                    {toolCategories.map((category, catIndex) => (
                        <motion.div
                            key={category.name}
                            className="tool-category"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: catIndex * 0.1 }}
                        >
                            <h3>{category.name}</h3>
                            <div className="tools-list">
                                {category.tools.map((tool, index) => (
                                    <motion.div
                                        key={tool.name}
                                        className="tool-item"
                                        whileHover={{ scale: 1.05, y: -5 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <div className="tool-icon">{tool.icon}</div>
                                        <span>{tool.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ToolsStack;
