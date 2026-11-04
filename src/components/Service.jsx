import { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Settings, Ruler, Leaf, ShieldCheck, Building2, MapPin, CheckCircle, Building, Activity, ChevronLeft, ChevronRight, HardHat, FileCheck, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';

export const servicesData = [
  {
    id: "general",
    title: "General Engineering",
    desc: "We have designed a diverse range of Public and Private Engineering Projects including large Master Planned and Mixed-Use Communities.",
    fullDesc: "Venus Civil Engineers commits the same attention and expertise to every project. We have designed a diverse range of Public and Private Engineering Projects including large Master Planned and Mixed – Use Communities, Single and Multi Family Residential and Commercial developments, Industrial Area, Schools, Institutional Centers, Hospitality, Interior and Urban Design.",
    icon: <Building2 size={32} />,
    img: "/service1.jpg"
  },
  {
    id: "architectural",
    title: "Architectural Services",
    desc: "Unrivalled specialist know-how in designing state-of-the-art facilities from initial planning to completion.",
    fullDesc: "We Provide Unrivalled specialist know-how in designing state- of-the-art facilities from the Initial Planning Stage through to completion and further add value by our commitment to a sustainable design agenda.",
    icon: <Ruler size={32} />,
    img: "/service2.jpg"
  },
  {
    id: "engineering",
    title: "Engineering Services",
    desc: "ISO 9001-2015 BMQR Certified. Multi-disciplinary design and building service across every major sector.",
    fullDesc: "Venus Civil Engineers is an ISO 9001-2015 BMQR Certified Company provides a Multi-disciplinary design and building service to complement our wide range of construction and Consultancy Services delivering end-to-end building and Civil Engineering Services across every major sector, our design team incorporates Structural, Mechanical, Civil and Industrial Engineers.",
    icon: <Settings size={32} />,
    img: "/why-img1.jpg"
  },
  {
    id: "environmental",
    title: "Environmental Services",
    desc: "Evaluate and identify mitigation of environmental risks, helping clients manage reputation and legislative requirements.",
    fullDesc: "We Evaluate and identify mitigation of environmental and community risks, advising our clients on how to make sustainable business improvements, helping them to manage their reputation when it comes to the environment. Our teams of experts operate at both a local and regional level, enabling us to have an understanding of the implications of approaches to planning and the associated legislative requirements.",
    icon: <Leaf size={32} />,
    img: "/hero-bg.jpg"
  },
  {
    id: "safety",
    title: "Safety Compliance",
    desc: "Fire Safety License, Factory Act Stability Certificates, and Machinery Test Certificates to ensure industrial compliance.",
    fullDesc: "Our safety management services include obtaining Fire Safety Licenses, Public and Factory Act Stability Certificates, and Machinery Test Certificates. We ensure your industrial operations meet all regulatory safety standards with rigorous inspections and documentation.",
    icon: <ShieldCheck size={32} />,
    img: "/why-img2.jpg"
  },
  {
    id: "testing",
    title: "Industrial Testing",
    desc: "Compressor and Pressure Vessels Testing with end-to-end certification for industrial equipment.",
    fullDesc: "Specialized testing services for industrial equipment including Compressor and Pressure Vessels Testing. We provide technical excellence and diverse experience in ensuring the integrity and safety of high-pressure industrial systems.",
    icon: <HardHat size={32} />,
    img: "/service1.jpg"
  },
  {
    id: "planning",
    title: "Planning & Approvals",
    desc: "DTCP & LPA Approvals and TN Pollution Board documentation for new construction projects.",
    fullDesc: "We handle the complex process of DTCP & LPA Approvals, TN Pollution Board Approvals, and other legal documentations required for land and building development, ensuring a smooth path for your projects.",
    icon: <FileCheck size={32} />,
    img: "/service2.jpg"
  },
  {
    id: "urban",
    title: "Urban Design",
    desc: "Innovative urban design and interior solutions for residential and commercial developments.",
    fullDesc: "Combining creativity with functionality, our urban design team focuses on creating desirable communities. We provide end-to-end solutions for hospitality, interior, and urban planning that leave a legacy of excellence.",
    icon: <Compass size={32} />,
    img: "/why-img1.jpg"
  }
];

const Service = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoPlayRef = useRef();
  
  const extendedServices = [...servicesData, ...servicesData, ...servicesData];

  useEffect(() => {
    autoPlayRef.current = nextSlide;
  });

  useEffect(() => {
    const play = () => autoPlayRef.current();
    const interval = setInterval(play, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % servicesData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + servicesData.length) % servicesData.length);
  };

  return (
    <section className="services-crafix py-20 bg-secondary" id="services">
      <div className="container">
        {/* Simple Header Tag */}
        <div className="mb-4">
          <span className="section-tag-simple mt-10">OUR SERVICE</span>
        </div>
        <div className="header-row d-flex justify-content-between align-items-end mb-10">
          <h2 className="section-title text-primary mb-0" style={{ maxWidth: '600px' }}>
            Quality services trusted <br/> construction experts
          </h2>
         
        </div>

        {/* Carousel Section */}
        <div className="services-carousel-wrapper overflow-hidden mt-10">
          <motion.div 
            className="services-track d-flex"
            animate={{ x: `-${currentIndex * 80}vw` }}
            transition={{ type: "spring", stiffness: 40, damping: 20 }}
            style={{ gap: '30px', width: `${extendedServices.length * 80}vw` }}
          >
            {extendedServices.map((svc, index) => (
              <motion.div 
                key={index}
                className="service-card-crafix flex-shrink-0"
                style={{ width: '85vw', maxWidth: '1000px' }}
              >
                <div className="crafix-row">
                  <div className="crafix-img-col">
                    <img src={svc.img} alt={svc.title} />
                  </div>
                  <div className="crafix-content-col">
                    <div className="svc-icon-box text-accent mb-4">
                       {svc.icon}
                    </div>
                    <h3 className="text-primary mb-3">
                      <Link to={`/service/${svc.id}`} className="text-primary text-decoration-none">
                        {svc.title}
                      </Link>
                    </h3>
                    <p className="text-secondary opacity-75 mb-5">
                      {svc.desc}
                    </p>
                    <Link to={`/service/${svc.id}`} className="btn-crafix">
                      Discover More
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="services-nav-crafix mt-10 d-flex justify-content-center gap-3">
             <button className="nav-arrow" onClick={prevSlide}><ChevronLeft size={24} /></button>
             <button className="nav-arrow active" onClick={nextSlide}><ChevronRight size={24} /></button>
          </div>
        </div>

        {/* Technical Expertise Grid */}
        <div className="technical-expertise mt-40">
          <div className="section-header center mb-10">
            <span className="section-tag mt-10">Technical Expertise</span>
            <h2 className="section-title">Compliance & Certifications</h2>
          </div>
          <div className="expertise-grid grid-4">
            {[
              { title: "DTCP & LPA Approval", icon: <Building2 size={24} /> },
              { title: "Compressor Testing", icon: <Settings size={24} /> },
              { title: "Pollution Board Approval", icon: <Leaf size={24} /> },
              { title: "Soil Test Work", icon: <MapPin size={24} /> },
              { title: "Fire Safety License", icon: <ShieldCheck size={24} /> },
              { title: "Machinery Certificate", icon: <CheckCircle size={24} /> },
              { title: "Stability Certificate", icon: <Building size={24} /> },
              { title: "Pressure Vessel Test", icon: <Activity size={24} /> }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5, borderColor: 'var(--accent)' }}
                className="expertise-item p-4 bg-surface border border-color rounded text-center"
              >
                <div className="text-accent mb-3 d-flex justify-content-center">{item.icon}</div>
                <h4 className="font-size-sm font-weight-700">{item.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
