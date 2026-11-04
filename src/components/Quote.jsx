import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

const Quote = () => {
  return (
    <div className="quote-page pt-20">
      {/* Banner Section */}
      <section className="page-banner py-20 bg-secondary position-relative overflow-hidden">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="section-tag-simple">ESTIMATE</span>
            <h1 className="section-title">Request a <span className="text-accent">Free Quote</span></h1>
            <p className="section-desc max-w-600 mx-auto">
              Ready to start your project? Fill out the form below and our expert engineers will get back to you with a detailed proposal.
            </p>
          </motion.div>
        </div>
        <div className="banner-glow"></div>
      </section>

      {/* Quote Content Section */}
      <section className="quote-section py-20">
        <div className="container">
          <div className="row g-5 align-items-stretch">
            {/* Form Column */}
            <div className="col-lg-7">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="quote-form-wrapper bg-surface p-5 rounded-lg border border-color h-100"
              >
                <h3 className="mb-4">Project Information</h3>
                <form className="row g-4">
                  <div className="col-md-6">
                    <label className="form-label small text-secondary">Full Name</label>
                    <input type="text" className="form-control bg-secondary border-color text-primary" placeholder="John Doe" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label small text-secondary">Email Address</label>
                    <input type="email" className="form-control bg-secondary border-color text-primary" placeholder="john@example.com" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label small text-secondary">Phone Number</label>
                    <input type="tel" className="form-control bg-secondary border-color text-primary" placeholder="+91 95006 10109" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label small text-secondary">Project Type</label>
                    <select className="form-select bg-secondary border-color text-primary">
                      <option selected>Select Project Type</option>
                      <option value="structural">Structural Engineering</option>
                      <option value="architectural">Architectural Design</option>
                      <option value="planning">Design Planning</option>
                      <option value="commercial">Commercial Construction</option>
                      <option value="residential">Residential Development</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <label className="form-label small text-secondary">Project Description</label>
                    <textarea className="form-control bg-secondary border-color text-primary" rows="5" placeholder="Tell us about your project goals, location, and any specific requirements..."></textarea>
                  </div>
                  <div className="col-12 mt-5">
                    <button type="submit" className="btn btn-primary w-100 py-3">
                      Submit Request <Send size={18} className="ml-2" />
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>

            {/* Why Choose Us Column */}
            <div className="col-lg-5">
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="quote-info-wrapper bg-secondary p-5 rounded-lg border border-color h-100"
              >
                <div className="info-card">
                  <h3 className="mb-5 text-accent">Why Choose Us?</h3>
                  <div className="advantage-list">
                    {[
                      "Expert Engineering since 1972",
                      "Global presence with local expertise",
                      "Cutting-edge structural technology",
                      "Transparent pricing & detailed planning",
                      "Certified safety & quality standards"
                    ].map((item, i) => (
                      <div key={i} className="d-flex align-items-center gap-4 mb-4 pb-3 border-b border-color last:border-0">
                        <div className="icon-badge bg-accent-glow p-2 rounded-circle text-accent">
                           <CheckCircle2 size={24} />
                        </div>
                        <span className="text-primary font-bold">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Map Section */}
      <section className="contact-map-section py-20 bg-secondary">
        <div className="container">
          <div className="row g-5 align-items-center">
            {/* Contact Details Column */}
            <div className="col-lg-5">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="contact-details-box"
              >
                <span className="section-tag-simple">GET IN TOUCH</span>
                <h2 className="mb-5">Contact <span className="text-accent">Details</span></h2>
                
                <div className="contact-info-list-modern">
                  <div className="d-flex gap-4 mb-5 p-4 bg-surface rounded-lg border border-color hover:border-accent transition-all">
                    <div className="icon-box text-accent mt-1">
                      <MapPin size={28} />
                    </div>
                    <div>
                      <h5 className="mb-2 text-primary">Head Office</h5>
                      <p className="text-secondary mb-0">No.6, Tamukkam Complex, Thallakulam, Madurai - 625 002.</p>
                    </div>
                  </div>

                  <div className="d-flex gap-4 mb-5 p-4 bg-surface rounded-lg border border-color hover:border-accent transition-all">
                    <div className="icon-box text-accent mt-1">
                      <Phone size={28} />
                    </div>
                    <div>
                      <h5 className="mb-2 text-primary">Phone Numbers</h5>
                      <p className="text-secondary mb-0">0452-2530669<br/>+91 95006 10109</p>
                    </div>
                  </div>

                  <div className="d-flex gap-4 mb-5 p-4 bg-surface rounded-lg border border-color hover:border-accent transition-all">
                    <div className="icon-box text-accent mt-1">
                      <Mail size={28} />
                    </div>
                    <div>
                      <h5 className="mb-2 text-primary">Email Us</h5>
                      <p className="text-secondary mb-0">contact@civilvenus.com<br/>info@civilvenus.com</p>
                    </div>
                  </div>

                  <div className="d-flex gap-4 p-4 bg-surface rounded-lg border border-color hover:border-accent transition-all">
                    <div className="icon-box text-accent mt-1">
                      <Clock size={28} />
                    </div>
                    <div>
                      <h5 className="mb-2 text-primary">Business Hours</h5>
                      <p className="text-secondary mb-0">Mon - Sat: 9:00 AM - 6:00 PM<br/>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Map Column */}
            <div className="col-lg-7">
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="map-container-modern rounded-lg overflow-hidden border-4 border-surface shadow-2xl"
              >
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.123869275185!2d78.1322!3d9.9322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c5929676778f%3A0x4f4943f55403070!2sTamukkam%20Complex!5e0!3m2!1sen!2sin!4v1715230000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy"
                  title="Civil Venus Location"
                ></iframe>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quote;
