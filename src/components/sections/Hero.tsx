import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();
  return (
    <section id="hero" className="relative min-h-[85vh] flex items-center pt-48 pb-20 md:pb-24 overflow-hidden">
      {/* Background Image Container with improved scaling behavior */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2070"
          alt="Industrial Automation Facility"
          fetchPriority="high"
          decoding="sync"
          className="w-full h-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40 md:to-transparent backdrop-blur-[1px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-block py-1.5 px-3 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-400 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-4 sm:mb-6"
            >
              Innovation in Motion
            </motion.span>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
              Empowering Industry with <span className="text-emerald-400">Smart Automation</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-slate-200 mb-8 sm:mb-10 leading-relaxed max-w-xl">
              From Industrial Automation to IoT integration, we deliver advanced solutions that optimize your operations and drive global efficiency.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-emerald-500 text-white px-8 py-4 rounded-xl text-base font-semibold hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20 flex items-center gap-3 group"
              >
                Explore Solutions
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/contact')}
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl text-base font-semibold hover:bg-white/20 transition-all"
              >
                Contact Experts
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
      

    </section>
  );
}
