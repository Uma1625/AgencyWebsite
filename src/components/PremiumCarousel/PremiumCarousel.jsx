import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import './PremiumCarousel.css';

const PremiumCarousel = ({ items, renderItem }) => {
    // Duplicate items for infinite loop illusion
    const marqueeItems = [...items, ...items, ...items, ...items];
    const trackRef = useRef(null);
    const [isPaused, setIsPaused] = useState(false);

    // Auto-scroll logic
    useEffect(() => {
        let animationFrameId;

        const scroll = () => {
            if (trackRef.current && !isPaused) {
                // Move 1px every frame (adjust speed here)
                trackRef.current.scrollLeft += 1.5; // Slower speed: 1.5px/frame

                // Infinite Loop Reset: If scrolled past half, reset to start
                // (Assumes duplication)
                if (trackRef.current.scrollLeft >= trackRef.current.scrollWidth / 2) {
                    trackRef.current.scrollLeft = 0;
                }
            }
            animationFrameId = requestAnimationFrame(scroll);
        };

        animationFrameId = requestAnimationFrame(scroll);
        return () => cancelAnimationFrame(animationFrameId);
    }, [isPaused]);

    const handleNext = () => {
        if (trackRef.current) {
            trackRef.current.scrollBy({ left: 350, behavior: 'smooth' }); // Scroll by card width
        }
    };

    const handlePrev = () => {
        if (trackRef.current) {
            trackRef.current.scrollBy({ left: -350, behavior: 'smooth' });
        }
    };

    return (
        <div
            className="premium-marquee-container"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div className="marquee-controls-overlay">
                <button className="control-btn prev" onClick={handlePrev} aria-label="Scroll Left">
                    <HiChevronLeft />
                </button>
                <button className="control-btn next" onClick={handleNext} aria-label="Scroll Right">
                    <HiChevronRight />
                </button>
            </div>

            {/* Gradient Masks */}
            <div className="marquee-mask-left"></div>
            <div className="marquee-mask-right"></div>

            <div className="marquee-track-scrollable" ref={trackRef}>
                <div className="marquee-track-inner">
                    {marqueeItems.map((item, index) => (
                        <div key={index} className="marquee-item">
                            <motion.div
                                className="marquee-card-inner"
                                whileHover={{
                                    scale: 1.05,
                                    zIndex: 10,
                                    y: -10,
                                    transition: { duration: 0.3 }
                                }}
                            >
                                {renderItem(item, index)}
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PremiumCarousel;
