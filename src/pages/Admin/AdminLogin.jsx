import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaLock, FaUser, FaSignInAlt, FaExclamationTriangle } from 'react-icons/fa';
import './Admin.css';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const AdminLogin = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await fetch(`${API_BASE}/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });

            const data = await response.json();

            if (data.success) {
                localStorage.setItem('adminToken', data.token);
                onLogin(data.token);
            } else {
                setError(data.message || 'Invalid credentials');
            }
        } catch (err) {
            setError('Server connection failed. Make sure the server is running.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="admin-login-page">
            <div className="admin-login-bg">
                <div className="login-gradient"></div>
                <div className="login-grid-overlay"></div>
            </div>

            <motion.div
                className="admin-login-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="login-header">
                    <div className="login-icon">
                        <FaLock />
                    </div>
                    <h1>Admin Login</h1>
                    <p>Abhivrudhi Agency Blog Management</p>
                </div>

                <form onSubmit={handleSubmit} className="login-form">
                    {error && (
                        <motion.div
                            className="login-error"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                        >
                            <FaExclamationTriangle /> {error}
                        </motion.div>
                    )}

                    <div className="form-group">
                        <label><FaUser /> Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter username"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label><FaLock /> Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter password"
                            required
                        />
                    </div>

                    <button type="submit" className="login-btn" disabled={loading}>
                        {loading ? 'Logging in...' : (
                            <>
                                <FaSignInAlt /> Login to Dashboard
                            </>
                        )}
                    </button>
                </form>
            </motion.div>
        </div>
    );
};

export default AdminLogin;
