// API Configuration
export const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Server base URL (for images and uploads)
export const SERVER_URL = import.meta.env.VITE_API_URL
    ? import.meta.env.VITE_API_URL.replace('/api', '')
    : 'http://localhost:5000';

// Helper function to get full image URL
export const getImageUrl = (path) => {
    if (!path) return '';
    if (path.startsWith('http')) return path;
    return `${SERVER_URL}${path}`;
};
