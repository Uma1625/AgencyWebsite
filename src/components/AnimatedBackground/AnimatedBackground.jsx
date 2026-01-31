import { motion } from 'framer-motion';
import './AnimatedBackground.css';

const AnimatedBackground = ({ theme = 'particles' }) => {
    // Generate particles for the particles theme
    const particles = Array.from({ length: 30 }, (_, i) => ({
        id: i,
        size: Math.random() * 4 + 2,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: Math.random() * 15 + 10,
        delay: Math.random() * 5
    }));

    // Generate geometric shapes
    const shapes = ['circle', 'square', 'triangle', 'hexagon'];
    const geometricShapes = Array.from({ length: 12 }, (_, i) => ({
        id: i,
        shape: shapes[i % shapes.length],
        size: Math.random() * 60 + 20,
        x: Math.random() * 100,
        y: Math.random() * 100,
        rotation: Math.random() * 360,
        duration: Math.random() * 20 + 15
    }));

    return (
        <div className={`animated-bg animated-bg--${theme}`}>
            {/* Base gradient layer */}
            <div className="bg-gradient-layer"></div>

            {/* Animated gradient mesh */}
            <div className="bg-mesh-layer">
                <motion.div
                    className="mesh-blob blob-1"
                    animate={{
                        x: [0, 100, 50, 0],
                        y: [0, 50, 100, 0],
                        scale: [1, 1.2, 0.9, 1]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="mesh-blob blob-2"
                    animate={{
                        x: [0, -80, -40, 0],
                        y: [0, 80, 40, 0],
                        scale: [1, 0.9, 1.1, 1]
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="mesh-blob blob-3"
                    animate={{
                        x: [0, 60, -60, 0],
                        y: [0, -60, 60, 0],
                        scale: [1, 1.15, 0.95, 1]
                    }}
                    transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            {/* Floating particles */}
            {theme === 'particles' && (
                <div className="bg-particles-layer">
                    {particles.map((p) => (
                        <motion.div
                            key={p.id}
                            className="particle"
                            style={{
                                width: p.size,
                                height: p.size,
                                left: `${p.x}%`,
                                top: `${p.y}%`
                            }}
                            animate={{
                                y: [-20, 20, -20],
                                x: [-10, 10, -10],
                                opacity: [0.3, 0.7, 0.3]
                            }}
                            transition={{
                                duration: p.duration,
                                delay: p.delay,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    ))}
                </div>
            )}

            {/* Geometric shapes */}
            {theme === 'geometric' && (
                <div className="bg-geometric-layer">
                    {geometricShapes.map((s) => (
                        <motion.div
                            key={s.id}
                            className={`geo-shape geo-${s.shape}`}
                            style={{
                                width: s.size,
                                height: s.size,
                                left: `${s.x}%`,
                                top: `${s.y}%`
                            }}
                            animate={{
                                rotate: [s.rotation, s.rotation + 360],
                                y: [-30, 30, -30],
                                opacity: [0.1, 0.3, 0.1]
                            }}
                            transition={{
                                duration: s.duration,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        />
                    ))}
                </div>
            )}

            {/* Wave animation */}
            {theme === 'waves' && (
                <div className="bg-waves-layer">
                    <div className="wave wave-1"></div>
                    <div className="wave wave-2"></div>
                    <div className="wave wave-3"></div>
                </div>
            )}

            {/* Grid lines */}
            <div className="bg-grid-layer"></div>

            {/* Glow spots */}
            <div className="glow-spot glow-1"></div>
            <div className="glow-spot glow-2"></div>
        </div>
    );
};

export default AnimatedBackground;
