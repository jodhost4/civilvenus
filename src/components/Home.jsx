import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Building2, ShieldCheck, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedCounter from './AnimatedCounter';

const Home = () => {
  const [index, setIndex] = useState(0);
  const words = ["Properties", "Structures", "Innovations"];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);
  
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg">
          <div className="overlay"></div>
          <img src="/hero-bg.jpg" alt="Hero" className="hero-img" />
        </div>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="hero-content"
          >
            <h1 className="hero-title">
              Building Dreams Into<br />
              <span className="text-accent hero-animated-word">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="word is-visible"
                    style={{ position: 'absolute', left: 0, bottom: 0, width: '100%' }}
                  >
                    {words[index]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>
            
            <div className="hero-meta">
              <div className="avatar-group">
                <img src="/avatar1.jpg" alt="Expert" className="avatar" />
                <img src="/avatar1.jpg" alt="Expert" className="avatar" />
                <img src="/avatar1.jpg" alt="Expert" className="avatar" />
              </div>
              <p className="hero-subtext">
                We're a trusted and proficient engineering firm since 1972, delivering excellence worldwide.
              </p>
            </div>
            
            <div className="mt-5">
              <Link to="/quote" className="btn btn-primary">Get a Free Quote</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Features */}
      <section className="features-quick">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="features-overlap"
          >
            <div className="feature-card-premium">
              <div className="feature-icon-wrapper">
                <Building2 size={32} className="text-accent" />
              </div>
              <div className="feature-info">
                <h3>Structural Engineering</h3>
                <p>The discipline of designing and analyzing buildings and structures to ensure they are safe.</p>
              </div>
            </div>
            <div className="feature-card-premium">
              <div className="feature-icon-wrapper">
                <Users size={32} className="text-accent" />
              </div>
              <div className="feature-info">
                <h3>Design Planning</h3>
                <p>The process of creating detailed strategies and layouts to guide the construction or development.</p>
              </div>
            </div>
            <div className="feature-card-premium">
              <div className="feature-icon-wrapper">
                <ShieldCheck size={32} className="text-accent" />
              </div>
              <div className="feature-info">
                <h3>Quality Assurance</h3>
                <p>A process that ensures products or services consistently meet defined standards and expectations.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section Preview */}
      <section className="about-preview py-10">
        <div className="container">
          <div className="about-wrapper">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="about-image position-relative"
            >
              <img src="/about-img.jpg" alt="About Venus" className="reveal-img rounded-lg shadow-xl" />
              {/* <div className="experience-badge">
                <span className="years">45+</span>
                <span className="label">Years of Mastery</span>
              </div> */}
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="about-content"
            >
              <span className="section-tag-simple">ABOUT US</span>
              <h2 className="section-title">Independent firm of <br/><span className="text-accent">Designers & Engineers</span></h2>
              <p className="section-desc">
                Venus Civil Engineers is an independent firm of Designers, Architects, Planners, Engineers, Environmental and Technical Specialist offering a broad range of Professional Service.
              </p>

              <div className="about-points mt-5">
                <div className="point-item">
                  <div className="point-icon"><Building2 size={24} /></div>
                  <div className="point-text">
                    <h4>Quality Construction</h4>
                    <p>We follow strict quality standards and modern building practices to ensure every project is strong and safe.</p>
                  </div>
                </div>
                <div className="point-item">
                  <div className="point-icon"><ShieldCheck size={24} /></div>
                  <div className="point-text">
                    <h4>Expert Project Management</h4>
                    <p>From planning to completion, our experienced team manages each phase with precision, efficiency, and attention.</p>
                  </div>
                </div>
                <div className="point-item">
                  <div className="point-icon"><Users size={24} /></div>
                  <div className="point-text">
                    <h4>Innovative Design Solutions</h4>
                    <p>We combine creativity with functionality to deliver modern spaces that meet evolving lifestyle and business needs.</p>
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <Link to="/about" className="btn btn-outline">
                  View More About Us <ChevronRight size={18} className="ml-2" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="stats-row py-10 border-t border-color">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item-simple">
              <div className="stat-number"><AnimatedCounter target={425} />+</div>
              <div className="stat-label">Completed Projects</div>
            </div>
            <div className="stat-item-simple">
              <div className="stat-number"><AnimatedCounter target={398} />+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
            <div className="stat-item-simple">
              <div className="stat-number"><AnimatedCounter target={45} />+</div>
              <div className="stat-label">Years of Experience</div>
            </div>
            <div className="stat-item-simple">
              <div className="stat-number"><AnimatedCounter target={52} />+</div>
              <div className="stat-label">Team Members</div>
            </div>
        </div>
      </div>
    </section>
      <section className="partners-ticker-section pt-10 pb-20 bg-secondary border-t border-b border-color overflow-hidden mb-10">
        <div className="container py-5">
           <div className="d-flex justify-content-between align-items-end flex-wrap gap-4">
             <div>
               <span className="section-tag-simple mb-3">OUR PARTNERS</span>
               <h2 className="section-title mb-0">Trusted by Industry Leaders</h2>
             </div>
             <Link to="/clients" className="view-more-link mt-5">
               View All Clients <ChevronRight size={18} />
             </Link>
           </div>
        </div>
        <div className="ticker-modern">
          <div className="ticker-track-modern">
            {[
              "Hitech Arai", "Fenner India", "Indian Oil", "BBTC Groups", "MRF Tyres", "Chakra Tyres",
              "PPS Motors", "Automotive Manufacturer's", "Madura Coats", "Sundaram Iyengar", "Shin-Etsu",
              "Wind Care", "Murugappa Groups", "Toyota", "Standard Fire Works", "Nachiyar Groups"
            ].map((partner, i) => (
              <Link to="/clients" key={i} className="ticker-item-modern text-decoration-none">
                <span>{partner}</span>
                <div className="ticker-dot-modern"></div>
              </Link>
            ))}
            {/* Repeat for seamless loop */}
            {[
              "Hitech Arai", "Fenner India", "Indian Oil", "BBTC Groups", "MRF Tyres", "Chakra Tyres",
              "PPS Motors", "Automotive Manufacturer's", "Madura Coats", "Sundaram Iyengar", "Shin-Etsu",
              "Wind Care", "Murugappa Groups", "Toyota", "Standard Fire Works", "Nachiyar Groups"
            ].map((partner, i) => (
              <Link to="/clients" key={`dup-${i}`} className="ticker-item-modern text-decoration-none">
                <span>{partner}</span>
                <div className="ticker-dot-modern"></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="process-section">
        <div className="container">
          <div className="section-header center">
            <span className="section-tag">HOW WE WORK</span>
            <h2 className="section-title">Our Blueprint to Reality</h2>
            <p className="section-desc">A systematic approach to delivering engineering excellence across every project.</p>
          </div>

          <div className="process-grid">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="process-step"
            >
              <div className="step-number">01</div>
              <div className="step-content">
                <h3>Initial Planning</h3>
                <p>Comprehensive site analysis and feasibility studies to lay a solid foundation.</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="process-step"
            >
              <div className="step-number">02</div>
              <div className="step-content">
                <h3>Precision Design</h3>
                <p>Advanced architectural and structural engineering using state-of-the-art technology.</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="process-step"
            >
              <div className="step-number">03</div>
              <div className="step-content">
                <h3>Expert Execution</h3>
                <p>Quality construction management ensuring safety, stability, and timely delivery.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Unique CTA Section */}
      <section className="unique-cta">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="cta-box"
          >
            <div className="cta-content">
              <h2>Ready to build your <br/><span className="text-accent">Visionary Project?</span></h2>
              <p className="text-secondary mt-3">Connect with our team of expert engineers and architects to discuss your next big venture.</p>
            </div>
            <div className="cta-actions">
              <Link to="/quote" className="btn btn-primary">Start a Conversation</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
