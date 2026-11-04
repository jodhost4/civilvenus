import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import {
  Calendar,
  Clock,
  User,
  ChevronLeft,
} from "lucide-react";

const blogData = [
  {
    id: "sustainable-construction",
    title: "Sustainable Construction in 2026",
    date: "May 5, 2026",
    author: "Er. S. Mohamed Afrose",
    readTime: "5 min read",
    category: "Innovation",
    image: "/service1.jpg",
    content: `
      <p>
        As we move further into 2026, the construction industry is undergoing a radical transformation.
        Sustainability is no longer a buzzword but a core requirement for any new development.
      </p>

      <p>
        Venus Civil Engineers is at the forefront of this change, integrating eco-friendly materials
        and energy-efficient designs into our projects.
      </p>

      <h4>The Rise of Green Materials</h4>

      <p>
        We are seeing an increasing shift towards recycled materials and low-carbon concrete.
        These materials not only reduce the environmental footprint but also offer superior durability.
      </p>

      <blockquote>
        “Sustainability is the bridge between today’s needs and tomorrow’s legacy.”
      </blockquote>

      <h4>Legislative Compliance</h4>

      <p>
        New environmental laws now require strict adherence to energy-saving standards.
        Our team specializes in ensuring that all designs meet and exceed these requirements.
      </p>
    `,
  },

  {
    id: "industrial-testing",
    title: "The Future of Industrial Testing",
    date: "April 28, 2026",
    author: "Er. S. Mohamed Afrose",
    readTime: "8 min read",
    category: "Technical",
    image: "/service2.jpg",
    content: `
      <p>
        Industrial safety depends heavily on rigorous testing systems and pressure vessel inspections.
      </p>

      <h4>Advanced Testing Methodologies</h4>

      <p>
        We employ ultrasonic testing and non-destructive methods to ensure structural integrity.
      </p>

      <h4>Safety First</h4>

      <p>
        Safety compliance and operational longevity remain our highest priorities.
      </p>
    `,
  },

  {
    id: "architectural-trends",
    title: "Architectural Trends in Madurai",
    date: "April 15, 2026",
    author: "Er. S. Mohamed Afrose",
    readTime: "6 min read",
    category: "Design",
    image: "/why-img1.jpg",
    content: `
      <p>
        Madurai continues evolving with modern architectural concepts while preserving traditional aesthetics.
      </p>

      <h4>Modern Vernacular Architecture</h4>

      <p>
        We combine traditional materials with contemporary engineering techniques.
      </p>

      <h4>Urban Planning Challenges</h4>

      <p>
        Planning sustainable urban infrastructure is becoming increasingly important.
      </p>
    `,
  },
];

const BlogDetail = () => {
  const { id } = useParams();

  const post = blogData.find((b) => b.id === id) || blogData[0];

  const otherPosts = blogData.filter((b) => b.id !== id);

  const socialIcons = {
    FB: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
      </svg>
    ),

    TW: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
      </svg>
    ),

    INST: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="2" y="2" width="20" height="20" rx="5"></rect>
        <circle cx="12" cy="12" r="4"></circle>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    ),

    LI: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
    ),
  };

  return (
    <div className="blog-detail-page bg-main min-h-screen">

      {/* PAGE CONTAINER */}
      <div className="container-fluid px-4 px-lg-5 px-xxl-6">

        <div
          className="mx-auto"
          style={{
            maxWidth: "1600px",
            paddingTop: "100px",
            paddingBottom: "100px",
          }}
        >

          {/* BACK BUTTON */}
          <Link
            to="/blogs"
            className="d-inline-flex align-items-center gap-2 text-decoration-none text-secondary text-uppercase mb-5"
            style={{
              fontSize: "12px",
              letterSpacing: "2px",
              fontWeight: 700,
            }}
          >
            <ChevronLeft size={18} />
            Back To Insights
          </Link>

          {/* MAIN LAYOUT */}
          <div
            className="d-flex flex-column flex-lg-row align-items-start blog-main-container"
            style={{
              gap: "70px",
              paddingLeft: "30px",
              paddingRight: "30px",
            }}
          >

            {/* MAIN CONTENT */}
            <main
              style={{
                flex: 1,
                minWidth: 0,
                maxWidth: "980px",
              }}
            >

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >

                {/* HEADER */}
                <div
                  className="mb-5"
                  style={{
                    paddingTop: "20px",
                  }}
                >

                  <span
                    className="badge bg-accent px-3 py-2 rounded-pill mb-4"
                    style={{
                      fontSize: "11px",
                      letterSpacing: "2px",
                      fontWeight: 700,
                    }}
                  >
                    {post.category}
                  </span>

                  <h1
                    className="fw-black mb-4"
                    style={{
                      fontSize: "clamp(2.7rem, 5vw, 4.8rem)",
                      lineHeight: 1.05,
                      maxWidth: "850px",
                      marginTop: "10px",
                      color: "var(--text-primary)"
                    }}
                  >
                    {post.title}
                  </h1>

                  {/* META */}
                  <div
                    className="d-flex flex-wrap align-items-center gap-4 border-bottom border-color"
                    style={{
                      paddingBottom: "26px",
                    }}
                  >

                    <div className="d-flex align-items-center gap-2 text-secondary small">
                      <Calendar size={16} className="text-accent" />
                      {post.date}
                    </div>

                    <div className="d-flex align-items-center gap-2 text-secondary small">
                      <Clock size={16} className="text-accent" />
                      {post.readTime}
                    </div>

                    <div className="d-flex align-items-center gap-2 text-secondary small">
                      <User size={16} className="text-accent" />
                      {post.author}
                    </div>

                  </div>

                </div>

                {/* IMAGE */}
                <div
                  className="overflow-hidden rounded-4xl shadow-lg blog-image-wrapper"
                  style={{
                    marginTop: "50px",
                    marginBottom: "60px",
                  }}
                >

                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-100 object-fit-cover blog-hero-img"
                  />

                </div>

                {/* BLOG CONTENT */}
                <div
                  className="blog-inner-content text-secondary"
                  style={{
                    fontSize: "1.12rem",
                    lineHeight: 2,
                  }}
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* SHARE SECTION */}
                <div
                  className="bg-surface border border-color rounded-4xl p-4 p-lg-5 d-flex flex-column flex-lg-row justify-content-between align-items-center gap-4"
                  style={{
                    marginTop: "70px",
                  }}
                >

                  <div>

                    <h3
                      className="fw-black mb-2"
                      style={{
                        fontSize: "1.8rem",
                        color: "var(--text-primary)"
                      }}
                    >
                      Share this article
                    </h3>

                    <p className="text-secondary mb-0">
                      Share this professional insight with your network.
                    </p>

                  </div>

                  {/* SOCIAL ICONS */}
                  <div className="d-flex align-items-center gap-3">

                    {Object.entries(socialIcons).map(([key, icon]) => (
                      <a
                        key={key}
                        href="#"
                        className="d-flex align-items-center justify-content-center rounded-circle text-decoration-none border border-color transition-all"
                        style={{
                          width: "54px",
                          height: "54px",
                          background: "var(--bg-secondary)",
                          color: "var(--text-primary)"
                        }}
                      >
                        {icon}
                      </a>
                    ))}

                  </div>

                </div>

              </motion.div>

            </main>

            {/* SIDEBAR */}
            <aside
              style={{
                width: "100%",
                maxWidth: "390px",
                flexShrink: 0,
              }}
            >

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="position-sticky"
                style={{ top: "120px" }}
              >

                {/* CONCEPT CARD */}
                <div className="bg-surface border border-color rounded-4xl p-4 p-lg-5 mb-4">

                  <span className="section-tag-simple mb-4">
                    CONCEPT
                  </span>

                  <h2
                    className="fw-black mb-4"
                    style={{
                      fontSize: "2rem",
                      lineHeight: 1.2,
                      color: "var(--text-primary)"
                    }}
                  >
                    Our Engineering Philosophy
                  </h2>

                  <p
                    className="text-secondary mb-5"
                    style={{
                      lineHeight: 1.9,
                    }}
                  >
                    Redefining construction with sustainable innovation and precision engineering since 1982.
                  </p>

                  <div className="pt-4 border-top border-color">

                    <h6
                      className="mb-4"
                      style={{
                        fontSize: "11px",
                        letterSpacing: "2px",
                        fontWeight: 700,
                        color: "var(--text-primary)"
                      }}
                    >
                      LEAD EXPERT
                    </h6>

                    <div className="d-flex align-items-center gap-3">

                      <div
                        className="bg-accent rounded-3 d-flex align-items-center justify-content-center"
                        style={{
                          width: "52px",
                          height: "52px",
                        }}
                      >
                        <User size={20} color="white" />
                      </div>

                      <div>

                        <h5
                          className="mb-1"
                          style={{
                            fontSize: "15px",
                            fontWeight: 700,
                            color: "var(--text-primary)"
                          }}
                        >
                          Er. S. Mohamed Afrose
                        </h5>

                        <p
                          className="text-secondary mb-0"
                          style={{
                            fontSize: "12px",
                          }}
                        >
                          Lead Structural Consultant
                        </p>

                      </div>

                    </div>

                  </div>

                </div>

                {/* RELATED POSTS */}
                <div className="bg-surface border border-color rounded-4xl p-4 p-lg-5">

                  <span className="section-tag-simple mb-4">
                    EXPLORE MORE
                  </span>

                  <h3
                    className="fw-bold mb-5"
                    style={{
                      fontSize: "1.5rem",
                      color: "var(--text-primary)"
                    }}
                  >
                    Related Insights
                  </h3>

                  <div className="d-flex flex-column gap-4">

                    {otherPosts.map((other) => (
                      <Link
                        key={other.id}
                        to={`/blog/${other.id}`}
                        className="text-decoration-none border-bottom border-color pb-4"
                      >

                        <div
                          className="text-accent mb-2"
                          style={{
                            fontSize: "11px",
                            letterSpacing: "1.5px",
                            fontWeight: 700,
                          }}
                        >
                          {other.date}
                        </div>

                        <div
                          style={{
                            lineHeight: 1.5,
                            fontWeight: 700,
                            color: "var(--text-primary)"
                          }}
                        >
                          {other.title}
                        </div>

                      </Link>
                    ))}

                  </div>

                </div>

              </motion.div>

            </aside>

          </div>

        </div>

      </div>

      {/* CUSTOM STYLES */ }
  <style>{`
        .blog-detail-page {
          overflow-x: hidden;
        }

        .blog-hero-img {
          height: 520px;
        }

        .blog-inner-content p {
          margin-bottom: 24px;
        }

        .blog-inner-content h4 {
          color: var(--text-primary);
          font-size: 2rem;
          font-weight: 800;
          margin-top: 50px;
          margin-bottom: 20px;
        }

        .blog-inner-content blockquote {
          background: var(--bg-secondary);
          border-left: 4px solid var(--accent-color);
          padding: 30px;
          border-radius: 20px;
          color: var(--text-primary);
          font-size: 1.4rem;
          font-style: italic;
          margin: 40px 0;
          line-height: 1.8;
        }

        a.rounded-circle:hover {
          background: var(--accent-color) !important;
          border-color: var(--accent-color) !important;
          transform: translateY(-3px);
        }

        @media (max-width: 1400px) {
          main {
            max-width: 100% !important;
          }
        }

        @media (max-width: 1200px) {
          aside {
            width: 100% !important;
            max-width: 100% !important;
          }

          .blog-main-container {
            padding-left: 0 !important;
            padding-right: 0 !important;
            gap: 40px !important;
          }
        }

        @media (max-width: 768px) {
          .mx-auto {
            padding-top: 40px !important;
            padding-bottom: 40px !important;
          }

          .blog-main-container {
            padding-left: 10px !important;
            padding-right: 10px !important;
            gap: 40px !important;
          }

          .blog-inner-content {
            font-size: 1rem !important;
            line-height: 1.8;
          }

          .blog-hero-img {
            height: 250px !important;
          }

          .blog-inner-content h4 {
            font-size: 1.4rem;
            margin-top: 30px;
          }

          .blog-inner-content blockquote {
            font-size: 1.1rem;
            padding: 20px;
            margin: 30px 0;
          }

          .rounded-4xl {
            border-radius: 1.5rem !important;
          }

          h1 {
            font-size: 2.2rem !important;
            line-height: 1.2 !important;
          }

          aside {
            margin-top: 40px !important;
          }

          .d-flex.flex-wrap.align-items-center.gap-4 {
            gap: 1.5rem !important;
          }
        }
      `}</style>

    </div >
  );
};

export default BlogDetail;