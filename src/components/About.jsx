import { motion } from "framer-motion";
import {
  Building2,
  ShieldCheck,
  Target,
  Rocket,
  MapPin,
  Settings,
  Leaf,
  Activity,
  CheckCircle,
  FileCheck,
  Compass,
  Briefcase,
} from "lucide-react";

const About = () => {
  const expertiseItems = [
    {
      title: "DTCP & LPA Approval",
      desc: "Comprehensive approvals for land development and building construction, ensuring full legal compliance with state regulations.",
      icon: <FileCheck size={28} />,
    },
    {
      title: "Compressor Testing",
      desc: "Rigorous safety testing and certification for industrial air compressors and high-pressure equipment.",
      icon: <Settings size={28} />,
    },
    {
      title: "Pollution Board Approval",
      desc: "Facilitating TNPCB consents and environmental clearances for sustainable industrial operations.",
      icon: <Leaf size={28} />,
    },
    {
      title: "Soil Test Work",
      desc: "Advanced geotechnical analysis and soil investigations for safe and durable foundations.",
      icon: <MapPin size={28} />,
    },
    {
      title: "Fire Safety License",
      desc: "Expert guidance in obtaining fire safety NOCs and compliance certificates.",
      icon: <ShieldCheck size={28} />,
    },
    {
      title: "Machinery Certificate",
      desc: "Authorized inspection and certification of industrial machinery as per statutory standards.",
      icon: <CheckCircle size={28} />,
    },
    {
      title: "Stability Certificate",
      desc: "Engineering assessment and certification of building structural stability.",
      icon: <Building2 size={28} />,
    },
    {
      title: "Pressure Vessel Test",
      desc: "Specialized testing and verification of pressure vessels for operational safety.",
      icon: <Activity size={28} />,
    },
  ];

  return (
    <div className="about-page-container">
      {/* HERO SECTION */}
      <section className="about-hero py-20" id="about">
        <div className="container">
          <div className="about-wrapper">

            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="about-image position-relative"
            >
              <img
                src="/about-img.jpg"
                alt="About Venus"
                className="about-main-image"
              />

              <div className="experience-badge">
                <span className="years">45+</span>
                <span className="label">Years of Excellence</span>
              </div>
            </motion.div>

            {/* CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="about-content"
            >
              

              <h1 className="about-title">
                Independent firm of <br />
                <span className="text-accent">
                  Designers & Engineers
                </span>
              </h1>

              <p className="about-description">
                Venus Civil Engineers is an independent firm of
                Designers, Architects, Planners, Engineers,
                Environmental and Technical Specialists offering a
                broad range of professional engineering and consultancy
                services for industrial, commercial and infrastructure
                projects.
              </p>

              {/* SMALL HERO CARD */}
              <div className="hero-highlight-card">
                <div className="hero-highlight-icon">
                  <Briefcase size={24} />
                </div>

                <div>
                  <h4>Professional Engineering Excellence</h4>

                  <p>
                    Delivering trusted consultancy, industrial approvals,
                    planning and engineering services with quality,
                    commitment and innovation since 1972.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROJECT / VISION / MISSION */}
      <section className="vision-mission-section py-20">
        <div className="container">

          <div className="section-heading text-center">
            <span className="section-tag-simple">
              OUR FOUNDATION
            </span>

            <h2 className="section-title">
              Commitment, Vision & Mission
            </h2>
          </div>

          <div className="about-info-grid">

            {/* PROJECT */}
            <motion.div
              whileHover={{ y: -8 }}
              className="info-card project-card"
            >
              <div className="info-icon">
                <Briefcase size={26} />
              </div>

              <h4 className="info-title">
                Our Project Commitment
              </h4>

              <p className="info-text">
                We dedicate the same level of expertise and
                attention to every project — from industrial
                developments and commercial buildings to
                residential infrastructure and master planned
                communities.
              </p>
            </motion.div>

            {/* VISION */}
            <motion.div
              whileHover={{ y: -8 }}
              className="info-card"
            >
              <div className="info-icon">
                <Target size={26} />
              </div>

              <h4 className="info-title">
                Our Vision
              </h4>

              <p className="info-text">
                To provide quality engineering solutions through
                innovation, strong relationships and sustainable
                development practices.
              </p>
            </motion.div>

            {/* MISSION */}
            <motion.div
              whileHover={{ y: -8 }}
              className="info-card"
            >
              <div className="info-icon">
                <Rocket size={26} />
              </div>

              <h4 className="info-title">
                Our Mission
              </h4>

              <p className="info-text">
                To become a trusted leader in civil engineering
                and consultancy by creating impactful
                infrastructure with professionalism and integrity.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* TECHNICAL EXPERTISE */}
      <section className="technical-expertise py-20">
        <div className="container">
          <div className="section-heading text-center">
            <span className="section-tag-simple">
              TECHNICAL EXPERTISE
            </span>

            <h2 className="section-title">
              Certifications & Compliance
            </h2>
          </div>

          <div className="expertise-grid-modern">
            {expertiseItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="expertise-card"
              >
                <div className="expertise-icon">
                  {item.icon}
                </div>

                <h3>{item.title}</h3>

                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BRANCH SECTION */}
      <section className="branches-section py-20">
        <div className="container">
          <div className="row align-items-center g-5">

            <div className="col-lg-5">
              <span className="section-tag-simple">
                REGIONAL PRESENCE
              </span>

              <h2 className="section-title mt-3 mb-5">
                Expanding Our <br />
                <span className="text-accent">
                  Excellence
                </span>
              </h2>

              <div className="branch-list">
                {[
                  {
                    city: "Chennai",
                    address: "Corporate Branch Office",
                  },
                  {
                    city: "Coimbatore",
                    address: "Regional Testing Hub",
                  },
                  {
                    city: "Tiruppur",
                    address: "Industrial Compliance Office",
                  },
                  {
                    city: "Trichy",
                    address: "Strategic Service Center",
                  },
                ].map((branch, i) => (
                  <div key={i} className="branch-card">

                    <div className="branch-icon">
                      <MapPin size={18} />
                    </div>

                    <div>
                      <h4>{branch.city}</h4>
                      <p>{branch.address}</p>
                    </div>

                  </div>
                ))}
              </div>
            </div>

            {/* MAP */}
            <div className="col-lg-7">
              <div className="map-wrapper">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.123869275185!2d78.1322!3d9.9322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c5929676778f%3A0x4f4943f55403070!2sTamukkam%20Complex!5e0!3m2!1sen!2sin!4v1715230000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Office Location"
                ></iframe>
              </div>

              <div className="head-office-box">
                <Compass size={22} />

                <p>
                  Head Office: No.6, Tamukkam Complex,
                  Thallakulam, Madurai - 625002.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="leadership-section py-20">
        <div className="container">

          <div className="section-heading text-center">
            <span className="section-tag-simple">
              LEADERSHIP
            </span>

            <h2 className="section-title">
              Meet Our Visionaries
            </h2>
          </div>

          <div className="row g-4 mt-2">

            <div className="col-lg-6">
              <motion.div
                whileHover={{ y: -10 }}
                className="leader-card"
              >
                <h3>Er.Hajee.S.Shajahan</h3>

                <span>Founder of Venus Group</span>

                <p>
                  Having expertise around 45 years in Construction and
                  Industrial Departments of Public and Private sectors.
                </p>
              </motion.div>
            </div>

            <div className="col-lg-6">
              <motion.div
                whileHover={{ y: -10 }}
                className="leader-card"
              >
                <h3>Lion.S.Mohamed Afrose</h3>

                <span>Executive Director</span>

                <p>
                  Leading Venus Civil Engineers with technical
                  excellence and expertise in planning, construction,
                  Pollution Control Board approvals and Factory Act
                  Stability certifications.
                </p>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* CSS */}
      <style>{`
        .about-page-container {
          overflow: hidden;
        }

        .about-hero {
          padding: 120px 0;
        }

        .about-wrapper {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 80px;
          align-items: center;
        }

        .about-main-image {
          width: 100%;
          height: 680px;
          object-fit: cover;
          border-radius: 35px;
          box-shadow: 0 25px 50px rgba(0,0,0,0.12);
        }

        .experience-badge {
          position: absolute;
          bottom: 30px;
          right: -20px;
          background: var(--accent);
          color: white;
          padding: 25px 30px;
          border-radius: 24px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.2);
        }

        .experience-badge .years {
          font-size: 2.5rem;
          font-weight: 800;
          display: block;
          line-height: 1;
        }

        .experience-badge .label {
          font-size: 0.9rem;
          opacity: 0.9;
        }

        .about-title {
          font-size: clamp(2.8rem, 5vw, 4.5rem);
          line-height: 1.1;
          font-weight: 900;
          margin: 20px 0;
        }

        .about-description {
          font-size: 1.08rem;
          line-height: 1.9;
          color: var(--secondary);
          margin-bottom: 35px;
        }

        /* HERO CARD */

        .hero-highlight-card {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          padding: 30px;
          border-radius: 30px;
          background: linear-gradient(
            135deg,
            rgba(230,57,70,0.05),
            rgba(255,255,255,0.02)
          );
          border: 1px solid rgba(230,57,70,0.1);
        }

        .hero-highlight-icon {
          width: 60px;
          height: 60px;
          min-width: 60px;
          border-radius: 18px;
          background: rgba(230,57,70,0.08);
          color: var(--accent);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-highlight-card h4 {
          font-size: 1.2rem;
          font-weight: 800;
          margin-bottom: 10px;
          color: var(--primary);
        }

        .hero-highlight-card p {
          margin: 0;
          color: var(--secondary);
          line-height: 1.8;
        }

        /* VISION SECTION */

        .vision-mission-section {
          background: var(--secondary-bg);
        }

        .section-heading {
          margin-bottom: 60px;
        }

        .section-title {
          font-size: clamp(2.2rem, 4vw, 3.5rem);
          font-weight: 900;
          margin-top: 15px;
          color: var(--primary);
        }

        .about-info-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }

        .info-card {
          background: var(--surface);
          border: 1px solid var(--border-color);
          border-radius: 30px;
          padding: 35px;
          transition: 0.35s ease;
          position: relative;
          overflow: hidden;
        }

        .info-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: var(--accent);
          transform: scaleX(0);
          transform-origin: left;
          transition: 0.35s ease;
        }

        .info-card:hover::before {
          transform: scaleX(1);
        }

        .info-card:hover {
          box-shadow: 0 20px 40px rgba(0,0,0,0.08);
        }

        .info-icon {
          width: 68px;
          height: 68px;
          border-radius: 22px;
          background: rgba(230,57,70,0.08);
          color: var(--accent);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
        }

        .info-title {
          font-size: 1.3rem;
          font-weight: 800;
          margin-bottom: 15px;
          color: var(--primary);
        }

        .info-text {
          line-height: 1.9;
          color: var(--secondary);
          margin: 0;
        }

        .project-card {
          background: linear-gradient(
            135deg,
            rgba(230,57,70,0.05),
            rgba(255,255,255,0.02)
          );
        }

        /* TECHNICAL */

        .technical-expertise {
          background: var(--secondary-bg);
        }

        .expertise-grid-modern {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 28px;
        }

        .expertise-card {
          background: var(--surface);
          border: 1px solid var(--border-color);
          border-radius: 30px;
          padding: 35px;
          transition: 0.35s ease;
        }

        .expertise-card:hover {
          box-shadow: 0 20px 40px rgba(0,0,0,0.08);
        }

        .expertise-icon {
          width: 65px;
          height: 65px;
          border-radius: 20px;
          background: rgba(230,57,70,0.08);
          color: var(--accent);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
        }

        .expertise-card h3 {
          font-size: 1.2rem;
          font-weight: 700;
          margin-bottom: 15px;
        }

        .expertise-card p {
          color: var(--secondary);
          line-height: 1.8;
          margin: 0;
        }

        /* BRANCH */

        .branch-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .branch-card {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 25px;
          border-radius: 24px;
          background: var(--surface);
          border: 1px solid var(--border-color);
          transition: 0.3s ease;
        }

        .branch-card:hover {
          transform: translateX(6px);
        }

        .branch-icon {
          width: 45px;
          height: 45px;
          background: var(--accent);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .branch-card h4 {
          margin: 0;
          font-weight: 700;
        }

        .branch-card p {
          margin: 4px 0 0;
          color: var(--secondary);
          font-size: 0.95rem;
        }

        .map-wrapper {
          height: 520px;
          overflow: hidden;
          border-radius: 35px;
          border: 1px solid var(--border-color);
        }

        .head-office-box {
          margin-top: 20px;
          display: flex;
          align-items: center;
          gap: 15px;
          background: var(--surface);
          border-radius: 22px;
          padding: 22px;
          border: 1px solid var(--border-color);
        }

        /* LEADERSHIP */

        .leader-card {
          padding: 45px;
          background: var(--surface);
          border-radius: 32px;
          border-left: 5px solid var(--accent);
          height: 100%;
          transition: 0.35s ease;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }

        .leader-card h3 {
          font-size: 1.5rem;
          font-weight: 800;
          margin-bottom: 10px;
        }

        .leader-card span {
          color: var(--accent);
          font-weight: 700;
          text-transform: uppercase;
          font-size: 0.9rem;
        }

        .leader-card p {
          margin-top: 20px;
          color: var(--secondary);
          line-height: 1.9;
        }

        /* RESPONSIVE */

        @media (max-width: 991px) {

          .about-wrapper {
            grid-template-columns: 1fr;
          }

          .about-info-grid {
            grid-template-columns: 1fr;
          }

          .about-main-image {
            height: 500px;
          }

          .about-content {
            text-align: center;
          }

          .hero-highlight-card {
            text-align: left;
          }
        }

        @media (max-width: 576px) {

          .about-title {
            font-size: 2.3rem;
          }

          .hero-highlight-card {
            flex-direction: column;
            padding: 24px;
          }

          .info-card {
            padding: 28px;
          }

          .experience-badge {
            right: 15px;
            bottom: 15px;
          }

          .about-main-image {
            height: 420px;
          }

          .leader-card {
            padding: 30px;
          }
        }
      `}</style>
    </div>
  );
};

export default About;