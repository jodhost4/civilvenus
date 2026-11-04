import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { servicesData } from './Service';
import { ChevronLeft, CheckCircle } from 'lucide-react';

const ServiceDetail = () => {
  const { id } = useParams();
  const service = servicesData.find(s => s.id === id);

  if (!service) {
    return (
      <div className="pt-20 container text-center py-20">
        <h2>Service not found</h2>
        <Link to="/" className="btn btn-primary mt-5">Return Home</Link>
      </div>
    );
  }

  return (
    <div className="service-detail-page pt-20">
      <div className="service-hero py-10 bg-secondary">
        <div className="container">
          <Link to="/" className="btn-link d-flex align-items-center mb-5">
            <ChevronLeft size={20} className="mr-2" /> Back to Home
          </Link>
          <div className="grid-2 align-items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="service-hero-content"
            >
              <span className="section-tag-simple">SERVICE DETAILS</span>
              <h1 className="section-title text-white">{service.title}</h1>
              <p className="section-desc">{service.desc}</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="service-hero-img"
            >
              <img src={service.img} alt={service.title} className="rounded-lg shadow-2xl" />
            </motion.div>
          </div>
        </div>
      </div>

      <section className="service-full-content py-10">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="mb-5 text-white">Project Overview & Expertise</h2>
            <p className="text-secondary mb-10 leading-relaxed" style={{fontSize: '1.2rem'}}>
              {service.fullDesc}
            </p>
            
            <div className="expertise-highlights grid-2 gap-4">
               {[
                 "Industry-leading expertise",
                 "Innovative design solutions",
                 "Sustainable practices",
                 "Client-centric approach",
                 "Quality assurance guaranteed",
                 "Certified professional team"
               ].map((item, i) => (
                 <div key={i} className="d-flex align-items-center text-white">
                   <CheckCircle size={20} className="text-accent mr-3" />
                   <span>{item}</span>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
