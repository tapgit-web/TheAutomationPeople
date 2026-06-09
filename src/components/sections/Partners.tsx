import { motion } from 'motion/react';

const partners = [
  { name: 'Partner 1', logo: '/images/product/l1.png' },
  { name: 'Partner 2', logo: '/images/product/l2.png' },
  { name: 'Partner 3', logo: '/images/product/l3.png' },
  { name: 'Partner 4', logo: '/images/product/l4.png' },
  { name: 'Partner 5', logo: '/images/product/l5.jpg' },
  { name: 'Partner 6', logo: '/images/product/l6.png' },
  { name: 'Partner 7', logo: '/images/product/l7.png' },
  { name: 'Partner 8', logo: '/images/product/l8.png' },
  { name: 'Partner 9', logo: '/images/product/l9.jpg' },
  { name: 'Partner 10', logo: '/images/product/l10.png' },
  { name: 'Partner 11', logo: '/images/product/l11.jpg' },
  { name: 'Partner 12', logo: '/images/product/l12.png' },
  { name: 'Partner 13', logo: '/images/product/l13.jpg' },
  { name: 'Partner 14', logo: '/images/product/l14.png' },
  { name: 'Partner 15', logo: '/images/product/l15.jpg' },
  { name: 'Partner 17', logo: '/images/product/L17.jpg' },
  { name: 'Partner 21', logo: '/images/product/l21.jpeg' },
  { name: 'Partner 22', logo: '/images/product/l22.png' },
  { name: 'Partner 23', logo: '/images/product/l23.png' },
  { name: 'Partner 24', logo: '/images/product/l24.jpg' },
  { name: 'Partner 25', logo: '/images/product/l25.jpg' },
  { name: 'Partner 7b', logo: '/images/product/l7.jpg' }
];

export default function Partners() {
  return (
    <section id="products" className="py-32 bg-white relative overflow-hidden scroll-mt-36">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: `radial-gradient(#000 1px, transparent 1px), radial-gradient(#000 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 20px 20px'
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "50px" }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
                Products We Support<br />
                <span className="text-slate-400">Reliability Guaranteed.</span>
              </h2>
            </motion.div>
          </div>


        </div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.05
              }
            }
          }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"
        >
          {partners.map((partner, idx) => (
            <motion.div
              key={`${partner.name}-${idx}`}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="bg-white p-6 rounded-[2rem] shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 flex items-center justify-center min-h-[140px] transition-all duration-300 group relative overflow-hidden"
            >
              {/* Subtle hover background effect */}
              <div className="absolute inset-0 bg-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                {partner.logo ? (
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    loading="lazy"
                    decoding="async"
                    className="max-h-16 w-auto max-w-[80%] object-contain transition-transform duration-300 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <span className="text-sm font-black text-slate-400 tracking-tighter group-hover:text-emerald-600 transition-colors uppercase">
                    {partner.name}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
