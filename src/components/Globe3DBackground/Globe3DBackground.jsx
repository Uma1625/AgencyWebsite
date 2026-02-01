import { motion } from 'framer-motion';
import './Globe3DBackground.css';

const Globe3DBackground = ({
    position = 'left',
    color = 'red',
    showParticles = true
}) => {
    // Color palettes for different themes
    const colorPalettes = {
        red: {
            primary: 'rgba(220, 38, 38, 0.25)',
            secondary: 'rgba(239, 68, 68, 0.15)',
            glow: 'rgba(220, 38, 38, 0.2)',
            particle: 'rgba(248, 113, 113, 0.3)'
        },
        orange: {
            primary: 'rgba(249, 115, 22, 0.5)',
            secondary: 'rgba(251, 146, 60, 0.3)',
            glow: 'rgba(249, 115, 22, 0.4)',
            particle: 'rgba(253, 186, 116, 0.6)'
        },
        purple: {
            primary: 'rgba(168, 85, 247, 0.5)',
            secondary: 'rgba(192, 132, 252, 0.3)',
            glow: 'rgba(168, 85, 247, 0.4)',
            particle: 'rgba(216, 180, 254, 0.6)'
        },
        teal: {
            primary: 'rgba(20, 184, 166, 0.5)',
            secondary: 'rgba(45, 212, 191, 0.3)',
            glow: 'rgba(20, 184, 166, 0.4)',
            particle: 'rgba(94, 234, 212, 0.6)'
        }
    };

    const palette = colorPalettes[color] || colorPalettes.red;

    // Position classes
    const positionClass = `globe-position-${position}`;

    return (
        <div className={`globe-3d-bg ${positionClass}`}>
            {/* Base gradient */}
            <div className="globe-base-gradient"></div>

            {/* Main Globe with Arcs */}
            <div className="globe-container">
                {/* Outer Arc */}
                <motion.div
                    className="globe-arc-3d arc-outer"
                    style={{
                        borderColor: palette.primary,
                        background: `radial-gradient(circle at 70% 70%, ${palette.secondary} 0%, transparent 60%)`
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                />

                {/* Middle Arc */}
                <motion.div
                    className="globe-arc-3d arc-middle"
                    style={{ borderColor: palette.secondary }}
                    animate={{ rotate: -360 }}
                    transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
                />

                {/* Inner Arc */}
                <motion.div
                    className="globe-arc-3d arc-inner"
                    style={{ borderColor: `${palette.primary}55` }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                />

                {/* Center Glow */}
                <motion.div
                    className="globe-center-glow"
                    style={{ background: `radial-gradient(circle, ${palette.glow} 0%, transparent 70%)` }}
                    animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            {/* Floating Particles */}
            {showParticles && (
                <div className="globe-particles">
                    {[...Array(25)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="globe-particle"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                width: `${Math.random() * 4 + 2}px`,
                                height: `${Math.random() * 4 + 2}px`,
                                background: palette.particle
                            }}
                            animate={{
                                y: [-20, 20, -20],
                                x: [-10, 10, -10],
                                opacity: [0.3, 0.8, 0.3]
                            }}
                            transition={{
                                duration: Math.random() * 10 + 10,
                                delay: Math.random() * 5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    ))}
                </div>
            )}

            {/* Grid overlay */}
            <div className="globe-grid-overlay"></div>
        </div>
    );
};

export default Globe3DBackground;
