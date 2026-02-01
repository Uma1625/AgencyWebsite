import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    HiArrowRight,
    HiSparkles,
    HiCheck,
    HiLightningBolt
} from 'react-icons/hi';
import './ServicesOrbit.css';

const ServicesOrbit = ({ services }) => {
    const orbitServices = services.slice(0, 8);

    return (
        <section className="services-orbit-section">
            <div className="section-bg">
                <div className="bg-grid-premium" />
            </div>

            <div className="container service-orbit-container">
                <motion.div
                    className="orbit-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="subtitle-premium"><HiSparkles /> Next-Gen Solutions</span>
                    <h2 className="title-premium">
                        Digital <span className="text-gradient-gold">Powerhouse</span>
                    </h2>
                </motion.div>

                {/* Main 3D System */}
                <div className="orbit-system-wrapper">

                    {/* Background Energy Field */}
                    <div className="energy-field">
                        <div className="field-ring ring-1"></div>
                        <div className="field-ring ring-2"></div>
                        <div className="field-ring ring-3"></div>
                    </div>

                    {/* ULTRA-PREMIUM 3D CORE */}
                    <div className="orbit-center">
                        <div className="reactor-core">
                            {/* Outer Mechanical Rings */}
                            <div className="reactor-ring outer-ring"></div>
                            <div className="reactor-ring mid-ring"></div>
                            <div className="reactor-ring inner-ring"></div>

                            {/* The Glowing Energy Source */}
                            <div className="core-energy-sphere">
                                <div className="plasma-swirl"></div>
                                <div className="plasma-swirl reverse"></div>
                                <div className="core-letter-3d">A</div>
                                <div className="lens-flare"></div>
                            </div>

                            {/* Emitters */}
                            <div className="energy-emitter top"></div>
                            <div className="energy-emitter bottom"></div>
                            <div className="energy-emitter left"></div>
                            <div className="energy-emitter right"></div>
                        </div>
                    </div>

                    {/* Orbit Path Visuals */}
                    <div className="orbit-track-glow"></div>

                    {/* Orbiting Items */}
                    <div className="orbit-items-container">
                        {orbitServices.map((service, index) => {
                            const angle = (index / orbitServices.length) * 360;

                            return (
                                <div
                                    key={index}
                                    className="orbit-item"
                                    style={{ '--start-angle': `${angle}deg` }}
                                >
                                    {/* 3D Holographic Card */}
                                    <div className="holo-card">
                                        <div className="holo-card-inner">
                                            {service.image && (
                                                <div
                                                    className="holo-card-bg"
                                                    style={{ backgroundImage: `url(${service.image})` }}
                                                />
                                            )}
                                            <div className="holo-border"></div>
                                            <div className="holo-content">
                                                <div className="holo-icon-wrapper" style={{ boxShadow: `0 0 25px ${service.color}44`, border: `1px solid ${service.color}66` }}>
                                                    <div className="holo-icon" style={{ color: service.color }}>
                                                        {service.icon}
                                                    </div>
                                                </div>
                                                <h3 className="holo-title">{service.title}</h3>
                                                <div className="holo-status">
                                                    <span className="status-dot"></span> Active
                                                </div>
                                            </div>
                                            {/* Scanning Light Effect */}
                                            <div className="scan-line"></div>
                                            <div className="holo-glow" style={{ background: service.color }}></div>
                                        </div>
                                    </div>

                                    {/* Energy Tether to Center */}
                                    <div className="tether-line"></div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <motion.div
                    className="services-cta-btn"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <Link to="/services">
                        <motion.button className="btn btn-premium-3d">
                            <span className="btn-content">Transform Your Business <HiArrowRight /></span>
                            <div className="btn-shine"></div>
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesOrbit;
