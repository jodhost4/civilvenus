import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Clients from './components/Clients';
import Blogs from './components/Blogs';
import BlogDetail from './components/BlogDetail';
import Contact from './components/Contact';
import Quote from './components/Quote';
import ServiceDetail from './components/ServiceDetail';
import './index.css';

const LandingPage = () => (
  <main>
    <section id="home">
      <Home />
    </section>
    <section id="services">
      <Service />
    </section>
    <section id="blogs">
      <Blogs />
    </section>
  </main>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('civilvenus-theme') || 'dark';
  });

  useEffect(() => {
    console.log('Current theme state:', theme);
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('civilvenus-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<div className="pt-20"><About /></div>} />
          <Route path="/services" element={<div className="pt-20"><Service /></div>} />
          <Route path="/clients" element={<div className="pt-20"><Clients /></div>} />
          <Route path="/blogs" element={<div className="pt-20"><Blogs /></div>} />
          <Route path="/blog/:id" element={<div className="pt-20"><BlogDetail /></div>} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/service/:id" element={<ServiceDetail />} />
        </Routes>
        <Contact />
      </div>
    </Router>
  );
}

export default App;
