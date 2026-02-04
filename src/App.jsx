import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';

// Components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';

// Lazy Loaded Pages for Performance
const Home = lazy(() => import('./pages/Home/Home'));
const About = lazy(() => import('./pages/About/About'));
const Services = lazy(() => import('./pages/Services/Services'));
const Industries = lazy(() => import('./pages/Industries/Industries'));
const Results = lazy(() => import('./pages/Results/Results'));
const Contact = lazy(() => import('./pages/Contact/Contact'));
const Privacy = lazy(() => import('./pages/Privacy/Privacy'));
const Terms = lazy(() => import('./pages/Terms/Terms'));
const Disclaimer = lazy(() => import('./pages/Disclaimer/Disclaimer'));
const Refund = lazy(() => import('./pages/Refund/Refund'));
const Blog = lazy(() => import('./pages/Blog/Blog'));
const BlogPost = lazy(() => import('./pages/Blog/BlogPost'));
const Insights = lazy(() => import('./pages/Insights/Insights'));
const Admin = lazy(() => import('./pages/Admin/Admin'));

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Page transition wrapper
const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
};

// Layout wrapper that conditionally shows Navbar/Footer
const Layout = ({ children, showLayout = true }) => {
  if (!showLayout) {
    return <>{children}</>;
  }

  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

// Main App Routes
const AppRoutes = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <Layout showLayout={!isAdminRoute}>
      <AnimatePresence mode="wait">
        <Suspense fallback={<LoadingSpinner />}>
          <Routes location={location} key={location.pathname}>
            {/* Public Pages */}
            <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
            <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
            <Route path="/industries" element={<PageWrapper><Industries /></PageWrapper>} />
            <Route path="/results" element={<PageWrapper><Results /></PageWrapper>} />
            <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
            <Route path="/privacy" element={<PageWrapper><Privacy /></PageWrapper>} />
            <Route path="/terms" element={<PageWrapper><Terms /></PageWrapper>} />
            <Route path="/disclaimer" element={<PageWrapper><Disclaimer /></PageWrapper>} />
            <Route path="/refund" element={<PageWrapper><Refund /></PageWrapper>} />
            <Route path="/blog" element={<PageWrapper><Blog /></PageWrapper>} />
            <Route path="/blog/:slug" element={<PageWrapper><BlogPost /></PageWrapper>} />
            <Route path="/insights" element={<PageWrapper><Insights /></PageWrapper>} />

            {/* Admin Pages - No Layout */}
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/*" element={<Admin />} />
          </Routes>
        </Suspense>
      </AnimatePresence>
    </Layout>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppRoutes />
    </Router>
  );
}

export default App;
