import { motion } from 'motion/react';
import { Bot, Gauge, Globe, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Industrial Automation',
    description: 'Tailored automation systems to enhance productivity and precision in manufacturing lines.',
    icon: <Bot className="w-8 h-8 text-primary-green" />,
    link: '/products/automation',
  },
  {
    title: 'Process Control',
    description: 'Robust control solutions for managing complex processes and ensuring consistent quality.',
    icon: <Gauge className="w-8 h-8 text-primary-green" />,
    link: '#',
  },
  {
    title: 'IoT',
    description: 'Connecting devices and systems for real-time data insights and smarter decision-making.',
    icon: <Globe className="w-8 h-8 text-primary-green" />,
    link: '/products/iot',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50 scroll-mt-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "50px" }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
          >
            Core Services
          </motion.h2>
          <div className="w-20 h-1.5 bg-primary-green mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "50px" }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100 group"
            >
              <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 border border-emerald-100">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <Link
                to={service.link}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-green hover:gap-2 transition-all"
              >
                Learn More
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
