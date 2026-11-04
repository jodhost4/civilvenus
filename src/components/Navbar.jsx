import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, ChevronDown, Building2 } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  // Handle scroll
  useEffect(() => {
    console.log('Navbar Mount - Page:', location.pathname, 'Theme:', theme, 'Width:', window.innerWidth);
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [location.pathname, theme]);

  // Close drawer on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const navLinks = [
    { to: '/', label: 'HOME' },
    { to: '/about', label: 'ABOUT' },
    { to: '/clients', label: 'CLIENTS' },
    { to: '/blog/sustainable-construction', label: 'BLOG' },
  ];

  const serviceLinks = [
    { to: '/services', label: 'All Services' },
    { to: '/service/general', label: 'General Engineering' },
    { to: '/service/architectural', label: 'Architectural Services' },
    { to: '/service/engineering', label: 'Engineering Services' },
    { to: '/service/environmental', label: 'Environmental Services' },
    { to: '/service/safety', label: 'Safety Compliance' },
  ];

  const closeDrawer = () => setIsMenuOpen(false);

  return (
    <>
      {/* ── NAVBAR ── */}
      <nav className={`cv-navbar${isScrolled ? ' scrolled' : ''}`}>
        <div className="cv-nav-inner">

          {/* Logo */}
          <Link to="/" className="cv-logo">
            <div className="cv-logo-icon">
              <Building2 size={18} color="white" />
            </div>
            <span>CIVIL<span className="text-accent">VENUS</span></span>
          </Link>

          {/* Desktop links */}
          <ul className="cv-desktop-links">
            {navLinks.map(link => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={location.pathname === link.to ? 'cv-active' : ''}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="cv-has-dropdown">
              <Link
                to="/services"
                className={location.pathname.startsWith('/service') ? 'cv-active' : ''}
              >
                SERVICES <ChevronDown size={13} />
              </Link>
              <div className="cv-dropdown">
                {serviceLinks.map(s => (
                  <Link key={s.to} to={s.to} className="cv-dd-item">{s.label}</Link>
                ))}
              </div>
            </li>
          </ul>

          {/* Right actions */}
          <div className="cv-nav-right">
            <button className="cv-icon-btn" onClick={toggleTheme} title="Toggle theme">
              {theme === 'dark' ? <Sun size={19} /> : <Moon size={19} />}
            </button>
            <Link to="/quote" className="cv-quote-btn">FREE QUOTE</Link>
            <button
              className="cv-hamburger"
              onClick={() => setIsMenuOpen(prev => !prev)}
              aria-label="Open menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </nav>

      {/* ── OVERLAY ── */}
      <div
        className={`cv-overlay${isMenuOpen ? ' open' : ''}`}
        onClick={closeDrawer}
        aria-hidden="true"
      />

      {/* ── MOBILE DRAWER ── */}
      <div className={`cv-drawer${isMenuOpen ? ' open' : ''}`} role="dialog" aria-modal="true">

        {/* Drawer header */}
        <div className="cv-drawer-header">
          <Link to="/" className="cv-logo" onClick={closeDrawer}>
            <div className="cv-logo-icon">
              <Building2 size={16} color="white" />
            </div>
            <span>CIVIL<span className="text-accent">VENUS</span></span>
          </Link>
          <button className="cv-drawer-close" onClick={closeDrawer} aria-label="Close menu">
            <X size={22} />
          </button>
        </div>

        {/* Drawer body */}
        <div className="cv-drawer-body">
          <ul className="cv-drawer-links">

            {/* Nav links */}
            {navLinks.map(link => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={location.pathname === link.to ? 'cv-active' : ''}
                  onClick={closeDrawer}
                >
                  {link.label}
                </Link>
              </li>
            ))}

            {/* Services accordion */}
            <li className="cv-accordion-item">
              <div className="cv-accordion-header">
                <Link
                  to="/services"
                  className="cv-accordion-title"
                  onClick={closeDrawer}
                >
                  SERVICES
                </Link>
                <button
                  className="cv-accordion-toggle"
                  onClick={() => setServicesOpen(prev => !prev)}
                  aria-label="Toggle services menu"
                >
                  <ChevronDown
                    size={16}
                    className={`cv-chevron${servicesOpen ? ' rotated' : ''}`}
                  />
                </button>
              </div>
              <div className={`cv-accordion-body${servicesOpen ? ' open' : ''}`}>
                {serviceLinks.map(s => (
                  <Link
                    key={s.to}
                    to={s.to}
                    className="cv-sub-link"
                    onClick={closeDrawer}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </li>

          </ul>

          {/* Drawer footer */}
          <div className="cv-drawer-footer">
            <Link to="/quote" className="cv-drawer-cta" onClick={closeDrawer}>
              GET A FREE QUOTE
            </Link>
            <button className="cv-drawer-theme-btn" onClick={toggleTheme}>
              {theme === 'dark'
                ? <><Sun size={15} /> Switch to Light</>
                : <><Moon size={15} /> Switch to Dark</>
              }
            </button>
          </div>

        </div>
      </div>
    </>
  );
};

export default Navbar;
