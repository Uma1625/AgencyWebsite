import React from 'react';
import './LoadingSpinner.css';

const LoadingSpinner = () => {
    return (
        <div className="loading-screen">
            <div className="spinner-container">
                <div className="spinner-ring"></div>
                <div className="spinner-logo">A</div>
            </div>
        </div>
    );
};

export default LoadingSpinner;
