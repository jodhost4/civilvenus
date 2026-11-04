import { motion } from "framer-motion";
import {
  ShieldCheck,
  Building2,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const Clients = () => {
  const majorClients = [
    "Hitech Arai",
    "Fenner India",
    "Indian Oil",
    "MRF Tyres",
    "TVS Group",
    "Murugappa Groups",
    "Sterlite",
    "Aachi Masala",
  ];

  return (
    <section className="clients-section">
      <div className="container">

        {/* HEADER */}
        <div className="clients-top">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="clients-left"
          >

            <span className="mini-tag">
              <ShieldCheck size={15} />
              Trusted Since 1982
            </span>

            <h2>
              Built on Trust.
              <br />
              Powered by Engineering.
            </h2>

            <p>
              CivilVenus delivers structural consultancy, industrial approvals,
              and engineering solutions trusted by leading industries and
              enterprises across Tamil Nadu.
            </p>

          </motion.div>

          {/* STATS */}
          <div className="clients-stats">

            <motion.div
              whileHover={{ y: -5 }}
              className="stat-card"
            >
              <h3>40+</h3>
              <span>Industrial Clients</span>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="stat-card"
            >
              <h3>42</h3>
              <span>Years Experience</span>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="stat-card"
            >
              <h3>100+</h3>
              <span>Projects Delivered</span>
            </motion.div>

          </div>

        </div>

        {/* CLIENT GRID */}
        <div className="client-grid">

          {majorClients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="client-card"
            >

              <div className="client-icon">
                <Building2 size={20} />
              </div>

              <h4>{client}</h4>

              <div className="client-footer">
                <span>Trusted Partner</span>
                <ArrowUpRight size={16} />
              </div>

            </motion.div>
          ))}

        </div>

        {/* BOTTOM STRIP */}
        <div className="bottom-strip">

          <div className="strip-item">
            <Sparkles size={16} />
            Industrial Consultancy
          </div>

          <div className="strip-item">
            <Sparkles size={16} />
            Structural Design
          </div>

          <div className="strip-item">
            <Sparkles size={16} />
            Compliance & Testing
          </div>

          <div className="strip-item">
            <Sparkles size={16} />
            Factory Approvals
          </div>

        </div>

      </div>

      {/* STYLES */}
      <style>{`
        .clients-section {
          background: var(--bg-main);
          padding: 110px 0;
          overflow: hidden;
          position: relative;
          transition: background-color 0.3s ease;
        }

        .clients-section::before {
          content: "";
          position: absolute;
          top: -150px;
          right: -150px;
          width: 420px;
          height: 420px;
          background: radial-gradient(
            circle,
            rgba(230, 57, 70, 0.15),
            transparent 70%
          );
          filter: blur(30px);
        }

        .clients-top {
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          gap: 50px;
          align-items: center;
          margin-bottom: 70px;
        }

        .mini-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--accent);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 25px;
        }

        .clients-left h2 {
          color: var(--text-primary);
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          line-height: 1.05;
          font-weight: 900;
          margin-bottom: 24px;
        }

        .clients-left p {
          color: var(--text-secondary);
          font-size: 1.05rem;
          line-height: 1.9;
          max-width: 650px;
        }

        .clients-stats {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .stat-card {
          background: var(--bg-surface);
          border: 1px solid var(--border-color);
          border-radius: 24px;
          padding: 30px;
          transition: 0.4s ease;
        }

        .stat-card:hover {
          border-color: var(--accent-alpha-hover);
          box-shadow: 0 15px 40px var(--accent-alpha-light);
        }

        .stat-card h3 {
          color: var(--text-primary);
          font-size: 2.4rem;
          font-weight: 900;
          margin-bottom: 8px;
        }

        .stat-card span {
          color: var(--text-secondary);
          font-size: 0.95rem;
        }

        .client-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .client-card {
          background: var(--bg-surface);
          border: 1px solid var(--border-color);
          border-radius: 28px;
          padding: 30px;
          transition: 0.4s ease;
          position: relative;
          overflow: hidden;
        }

        .client-card::before {
          content: "";
          position: absolute;
          top: -60px;
          right: -60px;
          width: 140px;
          height: 140px;
          background: radial-gradient(
            circle,
            rgba(230,57,70,0.12),
            transparent 70%
          );
        }

        .client-card:hover {
          border-color: rgba(230,57,70,0.45);
          transform: translateY(-5px);
        }

        .client-icon {
          width: 52px;
          height: 52px;
          border-radius: 16px;
          background: var(--glass-bg);
          color: var(--accent);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          border: 1px solid var(--glass-border);
        }

        .client-card h4 {
          color: var(--text-primary);
          font-size: 1.1rem;
          font-weight: 700;
          line-height: 1.6;
          margin-bottom: 30px;
        }

        .client-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: var(--text-secondary);
          font-size: 12px;
          letter-spacing: 1px;
          text-transform: uppercase;
          font-weight: 700;
        }

        .bottom-strip {
          margin-top: 70px;
          display: flex;
          flex-wrap: wrap;
          gap: 18px;
          justify-content: center;
        }

        .strip-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 14px 22px;
          border-radius: 999px;
          background: var(--bg-surface);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          font-size: 13px;
          letter-spacing: 1px;
          text-transform: uppercase;
          font-weight: 700;
        }

        @media (max-width: 1200px) {
          .client-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .clients-top {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .clients-section {
            padding: 90px 0;
          }

          .client-grid {
            grid-template-columns: 1fr;
          }

          .clients-left h2 {
            font-size: 2.5rem;
          }

          .client-card {
            padding: 24px;
          }

          .stat-card {
            padding: 24px;
          }

          .bottom-strip {
            justify-content: flex-start;
          }
        }
      `}</style>
    </section>
  );
};

export default Clients;