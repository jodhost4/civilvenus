import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Blogs = () => {
  const location = useLocation();
  const isSeparatePage = location.pathname === '/blogs';

  const posts = [
    {
      id: "sustainable-construction",
      title: "Sustainable Construction in 2026",
      date: "May 5, 2026",
      excerpt: "How modern engineering is adapting to environmental needs with legislative requirements."
    },
    {
      id: "industrial-testing",
      title: "The Future of Industrial Testing",
      date: "April 28, 2026",
      excerpt: "Deep dive into Compressor and Pressure Vessels Testing standards for high-performance safety."
    },
    {
      id: "architectural-trends",
      title: "Architectural Trends in Madurai",
      date: "April 15, 2026",
      excerpt: "Exploring the blend of traditional and modern design in urban planning."
    }
  ];

  return (
    <section className="blogs py-10" id="blogs">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Insights</span>
          <h2 className="section-title">Latest From Venus</h2>
        </div>

        {!isSeparatePage && (
          <div className="grid-3 mt-5">
            {posts.map((post, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-surface p-4 rounded border border-color hover:border-accent transition-all"
              >
                <span className="text-accent text-xs">{post.date}</span>
                <h3 className="h5 mt-2 mb-3">
                  <Link to={`/blog/${post.id}`} className="text-decoration-none hover:text-accent" style={{ color: 'inherit' }}>
                    {post.title}
                  </Link>
                </h3>
                <p className="text-secondary small mb-4">{post.excerpt}</p>
                <Link to={`/blog/${post.id}`} className="font-weight-700 text-sm hover:text-accent transition-all text-decoration-none" style={{ color: 'var(--text-primary)' }}>
                  Read Article →
                </Link>
              </motion.div>
            ))}
          </div>
        )}

        {isSeparatePage && (
          <div className="mt-12">
            <div className="d-flex flex-column flex-lg-row gap-5">
              {/* Main Blog List Content */}
              <div className="flex-grow-1">
                <div className="row g-4">
                  {posts.map((post, index) => (
                    <div key={post.id} className="col-12">
                      <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="blog-card-detailed d-flex flex-column flex-md-row gap-4 bg-surface border border-color rounded-3xl overflow-hidden hover:border-accent transition-all"
                      >
                        <div className="blog-card-img" style={{ flex: '0 0 auto', minWidth: '320px', maxWidth: '100%', height: '240px' }}>
                          <img 
                            src={index === 0 ? "/service1.jpg" : index === 1 ? "/service2.jpg" : "/why-img1.jpg"} 
                            alt={post.title} 
                            className="w-100 h-100 object-cover" 
                          />
                        </div>
                        <div className="blog-card-body p-4 d-flex flex-column justify-content-center">
                          <div className="d-flex align-items-center gap-3 mb-3">
                            <span className="badge bg-accent-glow text-accent rounded-pill px-3">Insights</span>
                            <span className="text-secondary small">{post.date}</span>
                          </div>
                          <h3 className="h3 font-weight-800 mb-3">{post.title}</h3>
                          <p className="text-secondary small mb-4">{post.excerpt}</p>
                          <Link to={`/blog/${post.id}`} className="view-more-link font-weight-700 text-accent text-decoration-none d-flex align-items-center gap-2">
                            Read Full Article <ChevronRight size={18} />
                          </Link>
                        </div>
                      </motion.div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sidebar for Blog List Page */}
              <aside className="blog-sidebar flex-shrink-0" style={{ width: '100%', maxWidth: '350px' }}>
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-surface border border-color rounded-4xl p-5 mb-5 sticky-top"
                  style={{ top: '120px', zIndex: 10 }}
                >
                  <span className="section-tag-simple mb-4">CONCEPT</span>
                  <h2 className="h3 font-weight-800 mb-4">Our Engineering Philosophy</h2>
                  <p className="text-secondary small mb-5" style={{ lineHeight: '1.8' }}>
                    Building the future with sustainable innovation, technical mastery, and a commitment to engineering excellence since 1972.
                  </p>
                  <div className="pt-4 border-t border-color">
                    <Link to="/about" className="btn btn-outline w-100 btn-sm">Learn More About Us</Link>
                  </div>
                </motion.div>

                <div className="bg-surface border border-color rounded-4xl p-5">
                  <h4 className="mb-4">Categories</h4>
                  <div className="d-flex flex-column gap-3">
                    {["Innovation", "Technical", "Design", "Safety", "Urban Planning"].map((cat) => (
                      <a href="#" key={cat} className="text-decoration-none text-secondary hover:text-accent d-flex justify-content-between">
                        <span>{cat}</span>
                        <span className="badge bg-secondary border border-color text-secondary">0</span>
                      </a>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blogs;
