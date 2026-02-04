import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    FaPlus, FaEdit, FaTrash, FaEye, FaSearch, FaFilter,
    FaFileAlt, FaCheckCircle, FaClock, FaArchive, FaSignOutAlt,
    FaChartBar
} from 'react-icons/fa';
import './Admin.css';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const AdminDashboard = ({ token, onLogout, onEditBlog, onNewBlog }) => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('');
    const [stats, setStats] = useState({ total: 0, published: 0, draft: 0, review: 0 });
    const [deleteConfirm, setDeleteConfirm] = useState(null);

    useEffect(() => {
        fetchBlogs();
        fetchStats();
    }, [statusFilter]);

    const fetchBlogs = async () => {
        try {
            setLoading(true);
            const url = statusFilter
                ? `${API_BASE}/blogs?status=${statusFilter}`
                : `${API_BASE}/blogs`;

            const response = await fetch(url, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            const data = await response.json();
            setBlogs(data);
        } catch (err) {
            console.error('Failed to fetch blogs:', err);
        } finally {
            setLoading(false);
        }
    };

    const fetchStats = async () => {
        try {
            const response = await fetch(`${API_BASE}/blogs/stats/overview`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            const data = await response.json();
            setStats(data);
        } catch (err) {
            console.error('Failed to fetch stats:', err);
        }
    };

    const handleDelete = async (id) => {
        try {
            await fetch(`${API_BASE}/blogs/${id}`, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${token}` }
            });
            setBlogs(blogs.filter(blog => blog._id !== id));
            setDeleteConfirm(null);
            fetchStats();
        } catch (err) {
            console.error('Failed to delete blog:', err);
        }
    };

    const filteredBlogs = blogs.filter(blog =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.slug.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const getStatusIcon = (status) => {
        switch (status) {
            case 'Published': return <FaCheckCircle className="status-icon published" />;
            case 'Draft': return <FaFileAlt className="status-icon draft" />;
            case 'Review': return <FaClock className="status-icon review" />;
            case 'Archived': return <FaArchive className="status-icon archived" />;
            default: return <FaFileAlt className="status-icon" />;
        }
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-IN', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        });
    };

    return (
        <div className="admin-dashboard">
            <div className="admin-bg">
                <div className="admin-gradient"></div>
                <div className="admin-grid-overlay"></div>
            </div>

            {/* Header */}
            <header className="admin-header">
                <div className="header-left">
                    <h1>📝 Blog Management</h1>
                    <p>Abhivrudhi Agency</p>
                </div>
                <div className="header-right">
                    <button className="new-blog-btn" onClick={onNewBlog}>
                        <FaPlus /> New Blog Post
                    </button>
                    <button className="logout-btn" onClick={onLogout}>
                        <FaSignOutAlt /> Logout
                    </button>
                </div>
            </header>

            {/* Stats Cards */}
            <section className="stats-section">
                <motion.div
                    className="stat-card total"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <FaChartBar />
                    <div>
                        <h3>{stats.total}</h3>
                        <p>Total Posts</p>
                    </div>
                </motion.div>
                <motion.div
                    className="stat-card published"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    <FaCheckCircle />
                    <div>
                        <h3>{stats.published}</h3>
                        <p>Published</p>
                    </div>
                </motion.div>
                <motion.div
                    className="stat-card draft"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <FaFileAlt />
                    <div>
                        <h3>{stats.draft}</h3>
                        <p>Drafts</p>
                    </div>
                </motion.div>
                <motion.div
                    className="stat-card review"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <FaClock />
                    <div>
                        <h3>{stats.review}</h3>
                        <p>In Review</p>
                    </div>
                </motion.div>
            </section>

            {/* Filters */}
            <section className="filters-section">
                <div className="search-box">
                    <FaSearch />
                    <input
                        type="text"
                        placeholder="Search blogs..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="filter-box">
                    <FaFilter />
                    <select
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                    >
                        <option value="">All Status</option>
                        <option value="Published">Published</option>
                        <option value="Draft">Draft</option>
                        <option value="Review">In Review</option>
                        <option value="Archived">Archived</option>
                    </select>
                </div>
            </section>

            {/* Blog List */}
            <section className="blogs-table-section">
                {loading ? (
                    <div className="loading-state">Loading blogs...</div>
                ) : filteredBlogs.length === 0 ? (
                    <div className="empty-state">
                        <FaFileAlt />
                        <h3>No blogs found</h3>
                        <p>Create your first blog post to get started!</p>
                        <button onClick={onNewBlog}><FaPlus /> Create Blog</button>
                    </div>
                ) : (
                    <div className="blogs-table">
                        <div className="table-header">
                            <span className="col-status">Status</span>
                            <span className="col-title">Title</span>
                            <span className="col-category">Category</span>
                            <span className="col-author">Author</span>
                            <span className="col-date">Date</span>
                            <span className="col-actions">Actions</span>
                        </div>
                        {filteredBlogs.map((blog, index) => (
                            <motion.div
                                key={blog._id}
                                className="table-row"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <span className="col-status">
                                    {getStatusIcon(blog.status)}
                                    <span className={`status-text ${blog.status.toLowerCase()}`}>
                                        {blog.status}
                                    </span>
                                </span>
                                <span className="col-title">
                                    <strong>{blog.title}</strong>
                                    <small>/{blog.slug}</small>
                                </span>
                                <span className="col-category">
                                    {blog.categories?.[0] || '-'}
                                </span>
                                <span className="col-author">
                                    {blog.author?.name || 'Unknown'}
                                </span>
                                <span className="col-date">
                                    {formatDate(blog.createdAt)}
                                </span>
                                <span className="col-actions">
                                    <button
                                        className="action-btn view"
                                        onClick={() => window.open(`/blog/${blog.slug}`, '_blank')}
                                        title="View"
                                    >
                                        <FaEye />
                                    </button>
                                    <button
                                        className="action-btn edit"
                                        onClick={() => onEditBlog(blog._id)}
                                        title="Edit"
                                    >
                                        <FaEdit />
                                    </button>
                                    <button
                                        className="action-btn delete"
                                        onClick={() => setDeleteConfirm(blog._id)}
                                        title="Delete"
                                    >
                                        <FaTrash />
                                    </button>
                                </span>
                            </motion.div>
                        ))}
                    </div>
                )}
            </section>

            {/* Delete Confirmation Modal */}
            {deleteConfirm && (
                <div className="modal-overlay" onClick={() => setDeleteConfirm(null)}>
                    <motion.div
                        className="delete-modal"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h3>⚠️ Delete Blog Post?</h3>
                        <p>This action cannot be undone. Are you sure?</p>
                        <div className="modal-actions">
                            <button className="cancel-btn" onClick={() => setDeleteConfirm(null)}>
                                Cancel
                            </button>
                            <button className="confirm-delete-btn" onClick={() => handleDelete(deleteConfirm)}>
                                Delete
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </div>
    );
};

export default AdminDashboard;
