import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ProductSubNav from '../../components/layout/ProductSubNav';

export default function CustomizedMachinePage() {
  const navigate = useNavigate();

  const machineItems = [
    {
      id: 'cm1',
      title: 'Custom Assembly Line',
      desc: 'Tailor-made automation machinery designed for specialized assembly requirements, ensuring maximum throughput and minimal downtime.',
      specs: [
        'Fully customized mechanical design',
        'Integrated PLC and HMI controls',
        'High-speed pneumatic and servo operations',
        'End-of-line testing and validation'
      ],
      image: '/images/circuit_background.png'
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Customized Machines & Special Purpose Machines | The Automation People</title>
        <meta name="description" content="Explore our bespoke automated machines, Special Purpose Machines (SPMs), and custom manufacturing solutions tailored to your unique production needs." />
        <meta property="og:site_name" content="The Automation People" />
        <meta property="og:title" content="Customized Machines & Special Purpose Machines | The Automation People" />
        <meta property="og:description" content="Explore our bespoke automated machines, Special Purpose Machines (SPMs), and custom manufacturing solutions tailored to your unique production needs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://theautomationpeople.in/products/customized-machine" />
        <meta property="og:image" content="https://theautomationpeople.in/logo512.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Customized Machines & Special Purpose Machines | The Automation People" />
        <meta name="twitter:description" content="Explore our bespoke automated machines and Special Purpose Machines (SPMs)." />
        <meta name="twitter:image" content="https://theautomationpeople.in/logo512.png" />
        <link rel="canonical" href="https://theautomationpeople.in/products/customized-machine" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                "name": "Custom Special Purpose Machine (SPM) Manufacturing",
                "provider": {
                  "@type": "LocalBusiness",
                  "name": "The Automation People",
                  "url": "https://theautomationpeople.in/"
                },
                "serviceType": "Special Purpose Machines (SPM), Custom Assembly Equipment & Robotic Integration",
                "description": "Custom engineering, design, and manufacturing of Special Purpose Machines (SPM), robotic tooling, and custom production assembly lines."
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://theautomationpeople.in/"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Products",
                    "item": "https://theautomationpeople.in/products/customized-machine"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Customized Machines",
                    "item": "https://theautomationpeople.in/products/customized-machine"
                  }
                ]
              }
            ]
          })}
        </script>
      </Helmet>
      {/* Hero Section */}
      <section className="relative min-h-[35vh] md:min-h-[50vh] flex items-center pt-32 md:pt-48 pb-12 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/circuit_background.png" 
            alt="Customized Machines Background" 
            className="w-full h-full object-cover grayscale brightness-50"
          />
          <div className="absolute inset-0 bg-primary-green/60 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-primary-green/40 to-primary-green/90"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <span className="inline-block py-1.5 px-3 rounded bg-white/20 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-6 border border-white/30">
              Bespoke Engineering
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Customized Machines
            </h1>
            <p className="text-emerald-100 max-w-2xl text-lg opacity-80 uppercase tracking-widest text-sm">
              Tailor-made automation for unique manufacturing challenges
            </p>
          </motion.div>
        </div>
      </section>

      <ProductSubNav />

      {/* Main Content */}
      <section className="py-12 md:py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {machineItems.map((v, idx) => (
              <motion.div
                key={v.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "50px" }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100 flex flex-col group hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-48 md:h-64 overflow-hidden bg-slate-100">
                  <img 
                    src={v.image} 
                    alt={v.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover p-0 group-hover:scale-110 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-primary-green text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest">
                      {v.title.split(" ")[0]}
                    </span>
                  </div>
                </div>
                <div className="p-10 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 uppercase tracking-tight">{v.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-sm mb-6">{v.desc}</p>
                  
                  <div className="space-y-3 mb-8 flex-grow">
                    {v.specs.map((spec, i) => (
                      <div key={i} className="flex items-start gap-3 text-xs text-slate-600 font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0 mt-1.5" />
                        {spec}
                      </div>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ x: 5 }}
                    onClick={() => navigate('/contact')}
                    className="flex items-center gap-2 text-emerald-600 font-bold text-xs uppercase tracking-widest group/btn cursor-pointer"
                  >
                    Get in touch to know more
                    <ChevronRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-green relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 uppercase tracking-tighter">Have a unique production problem?</h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/contact')}
            className="bg-white text-primary-green px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest shadow-2xl transition-all flex items-center gap-2 mx-auto cursor-pointer"
          >
            Consult Our Engineering Team
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </div>
      </section>
    </div>
  );
}
