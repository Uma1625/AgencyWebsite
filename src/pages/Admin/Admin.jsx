import { useState, useEffect } from 'react';
import AdminLogin from './AdminLogin';
import AdminDashboard from './AdminDashboard';
import BlogEditor from './BlogEditor';
import './Admin.css';
import './BlogEditor.css';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const Admin = () => {
    const [token, setToken] = useState(null);
    const [view, setView] = useState('dashboard'); // dashboard, new, edit
    const [editingBlogId, setEditingBlogId] = useState(null);
    const [loading, setLoading] = useState(true);

    // Check for existing token on mount
    useEffect(() => {
        const savedToken = localStorage.getItem('adminToken');
        if (savedToken) {
            verifyToken(savedToken);
        } else {
            setLoading(false);
        }
    }, []);

    const verifyToken = async (savedToken) => {
        try {
            const response = await fetch(`${API_BASE}/auth/verify`, {
                headers: { 'Authorization': `Bearer ${savedToken}` }
            });
            const data = await response.json();

            if (data.valid) {
                setToken(savedToken);
            } else {
                localStorage.removeItem('adminToken');
            }
        } catch (err) {
            localStorage.removeItem('adminToken');
        } finally {
            setLoading(false);
        }
    };

    const handleLogin = (newToken) => {
        setToken(newToken);
        setView('dashboard');
    };

    const handleLogout = () => {
        localStorage.removeItem('adminToken');
        setToken(null);
        setView('dashboard');
    };

    const handleNewBlog = () => {
        setEditingBlogId(null);
        setView('editor');
    };

    const handleEditBlog = (blogId) => {
        setEditingBlogId(blogId);
        setView('editor');
    };

    const handleBack = () => {
        setView('dashboard');
        setEditingBlogId(null);
    };

    const handleSave = () => {
        setView('dashboard');
        setEditingBlogId(null);
    };

    if (loading) {
        return (
            <div className="admin-loading-screen">
                <div className="loader"></div>
                <p>Loading Admin Panel...</p>
            </div>
        );
    }

    // Not authenticated - show login
    if (!token) {
        return <AdminLogin onLogin={handleLogin} />;
    }

    // Authenticated - show dashboard or editor
    if (view === 'editor') {
        return (
            <BlogEditor
                token={token}
                blogId={editingBlogId}
                onBack={handleBack}
                onSave={handleSave}
            />
        );
    }

    return (
        <AdminDashboard
            token={token}
            onLogout={handleLogout}
            onEditBlog={handleEditBlog}
            onNewBlog={handleNewBlog}
        />
    );
};

export default Admin;
