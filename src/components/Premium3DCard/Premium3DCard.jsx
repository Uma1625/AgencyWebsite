import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import './Premium3DCard.css';

const Premium3DCard = ({ children, className = '', glowColor = 'rgba(255,255,255,0.1)' }) => {
    const ref = useRef(null);

    // Mouse position state for the gradient glow
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // Motion values for tilt effect
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Spring physics for smooth return to center
    const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

    // Transform map: range [-0.5, 0.5] -> tilt degrees [-10, 10]
    const rotateX = useTransform(mouseY, [-0.5, 0.5], [7, -7]); // Inverted for natural feel
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-7, 7]);

    const handleMouseMove = (e) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        // Calculate normalized position (-0.5 to 0.5) for tilt
        const width = rect.width;
        const height = rect.height;
        const mouseXRel = e.clientX - rect.left;
        const mouseYRel = e.clientY - rect.top;

        const xPct = mouseXRel / width - 0.5;
        const yPct = mouseYRel / height - 0.5;

        x.set(xPct);
        y.set(yPct);

        // Update CSS variable for the spotlight/border glow
        setMousePosition({ x: mouseXRel, y: mouseYRel });
        ref.current.style.setProperty('--mouse-x', `${mouseXRel}px`);
        ref.current.style.setProperty('--mouse-y', `${mouseYRel}px`);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
        setMousePosition({ x: 0, y: 0 }); // Optional: Reset glow or fade it out via CSS
    };

    return (
        <motion.div
            ref={ref}
            className={`premium-3d-card-wrapper ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                perspective: 1000,
                height: '100%',     // Force full height
                display: 'flex'     // Allow child to fill
            }}
        >
            <motion.div
                className="premium-3d-card"
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                    height: '100%', // Ensure the card itself fills the wrapper
                    width: '100%'
                }}
            >
                {/* Spotlight / Border Glow Elements */}
                <div className="premium-border-glow" />
                <div className="premium-glare" />

                {/* Content Layer - Pushed forward in 3D space */}
                <div className="card-content-layer">
                    {children}
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Premium3DCard;
