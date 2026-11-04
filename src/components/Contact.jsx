import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const socialIcons = [
    {
      name: "Facebook",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
      )
    },
    {
      name: "Twitter",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
        </svg>
      )
    },
    {
      name: "LinkedIn",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      )
    },
    {
      name: "Instagram",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      )
    }
  ];

  return (
    <section className="contact py-10" id="contact">
      <div className="container">
        <div className="footer-grid">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="footer-about"
          >
            <h2 className="logo mb-4">CIVIL<span className="text-accent">VENUS</span></h2>
            <p className="text-secondary mb-5">
              Independent firm of Designers, Architects, Planners, Engineers, Environmental and Technical Specialist.
            </p>
            <div className="social-links">
              {socialIcons.map((social, i) => (
                <a key={i} href="#" className="social-link" title={social.name}>
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="footer-contact"
          >
            <h4 className="text-primary mb-4">Contact Info</h4>
            <div className="contact-item d-flex gap-3 mb-3">
              <MapPin className="text-accent" size={20} />
              <div>
                <p className="text-primary small mb-1">Head Office</p>
                <p className="text-secondary small">No.6, Tamukkam Complex, Thallakulam, Madurai - 625 002.</p>
              </div>
            </div>
            <div className="contact-item d-flex gap-3 mb-3">
              <Phone className="text-accent" size={20} />
              <div>
                <p className="text-primary small mb-1">Direct Lines</p>
                <p className="text-secondary small">0452-2530669 | 9500610109</p>
              </div>
            </div>
            <div className="contact-item d-flex gap-3">
              <Clock className="text-accent" size={20} />
              <div>
                <p className="text-primary small mb-1">Branches</p>
                <p className="text-secondary small">Chennai, Coimbatore, Tiruppur, Trichy</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="footer-links"
          >
            <h4 className="text-primary mb-4">Quick Links</h4>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-secondary hover:text-accent transition-all text-decoration-none d-block mb-2">HOME</Link></li>
              <li><Link to="/about" className="text-secondary hover:text-accent transition-all text-decoration-none d-block mb-2">ABOUT</Link></li>
              <li><Link to="/services" className="text-secondary hover:text-accent transition-all text-decoration-none d-block mb-2">SERVICES</Link></li>
              <li><Link to="/clients" className="text-secondary hover:text-accent transition-all text-decoration-none d-block mb-2">CLIENTS</Link></li>
              <li><Link to="/blogs" className="text-secondary hover:text-accent transition-all text-decoration-none d-block mb-2">BLOG</Link></li>
            </ul>
          </motion.div>
        </div>

        <div className="footer-bottom mt-10 pt-5 border-t border-color text-center">
          <p className="text-secondary small">
            &copy; {new Date().getFullYear()} Civil Venus. Proudly Developed & Designed by <span className="text-primary">Jodtech Company</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
