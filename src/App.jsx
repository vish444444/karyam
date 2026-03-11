import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import './i18n/i18n';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import './index.css';

// Lazy load pages for performance (rural network optimization)
const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const Signup = lazy(() => import('./pages/Signup'));
const Categories = lazy(() => import('./pages/Categories'));
const HowItWorks = lazy(() => import('./pages/HowItWorks'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Marketplace = lazy(() => import('./pages/Marketplace'));
const WorkerProfile = lazy(() => import('./pages/WorkerProfile'));

function LoadingFallback() {
  return (
    <div className="loading-container" style={{ minHeight: '80vh' }}>
      <div className="spinner"></div>
    </div>
  );
}

function AppContent() {
  return (
    <BrowserRouter>
      <div style={{ position: 'relative', minHeight: '100vh' }}>
        {/* Animated Background */}
        <div className="app-background">
          <div className="floating-orb orb-1"></div>
          <div className="floating-orb orb-2"></div>
          <div className="floating-orb orb-3"></div>
          <div className="floating-orb orb-4"></div>
        </div>

        <Navbar />

        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/worker/:id" element={<WorkerProfile />} />
          </Routes>
        </Suspense>

        <Footer />
        <ChatWidget />
      </div>
    </BrowserRouter>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </ThemeProvider>
  );
}
