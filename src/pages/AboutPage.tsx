import { motion } from 'motion/react';
import { Cpu, Zap, Globe, ChevronRight, CircuitBoard, Terminal, Gauge, Activity, Network, Box } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function AboutPage() {
  const navigate = useNavigate();

  const services = [
    {
      title: 'PLC Programming & Control Panels',
      desc: 'Customized PLC solutions and control panels to automate, monitor, and streamline your industrial processes.',
      icon: <Terminal className="w-6 h-6 text-white" />,
      color: 'bg-indigo-600',
      shadow: 'shadow-indigo-900/40'
    },
    {
      title: 'Automation Products & Instruments',
      desc: 'A complete range of automation components and instruments for accurate process control.',
      icon: <Gauge className="w-6 h-6 text-white" />,
      color: 'bg-emerald-600',
      shadow: 'shadow-emerald-900/40'
    },
    {
      title: 'Valves & Control Solutions',
      desc: 'High-performance valve systems designed for precise flow control in demanding environments.',
      icon: <Activity className="w-6 h-6 text-white" />,
      color: 'bg-blue-600',
      shadow: 'shadow-blue-900/40'
    },
    {
      title: 'Custom-made PCB Boards',
      desc: 'Specialized PCB designs for valve control and other automation needs, tailored to your specifications.',
      icon: <CircuitBoard className="w-6 h-6 text-white" />,
      color: 'bg-purple-600',
      shadow: 'shadow-purple-900/40'
    },
    {
      title: 'IoT Products & Solutions',
      desc: 'Smart IoT-enabled devices and systems for real-time monitoring, remote access, and intelligent decision-making.',
      icon: <Network className="w-6 h-6 text-white" />,
      color: 'bg-amber-600',
      shadow: 'shadow-amber-900/40'
    },
    {
      title: 'Customized Machines',
      desc: 'Bespoke manufacturing and assembly equipment designed for your unique operational requirements.',
      icon: <Box className="w-6 h-6 text-white" />,
      color: 'bg-rose-600',
      shadow: 'shadow-rose-900/40'
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>About Us | Industrial Automation Experts - The Automation People</title>
        <meta name="description" content="Learn about The Automation People, our mission, precision engineering expertise, and our range of custom PCB designs, PLC systems, and smart IoT solutions." />
        <meta property="og:title" content="About Us | Industrial Automation Experts - The Automation People" />
        <meta property="og:description" content="Learn about The Automation People, our mission, precision engineering expertise, and our range of custom PCB designs, PLC systems, and smart IoT solutions." />
        <link rel="canonical" href="https://theautomationpeople.in/about" />
      </Helmet>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-48 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80" 
            alt="Industrial Background" 
            className="w-full h-full object-cover grayscale brightness-50"
          />
          <div className="absolute inset-0 bg-emerald-900/60 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-primary-green/40 to-primary-green/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <span className="inline-block py-1.5 px-3 rounded bg-white/20 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-6 border border-white/30">
              Engineering the Future
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
              Engineering the <br />
              Future of Industry
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 md:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "50px" }}
            className="space-y-8"
          >
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-[2px] bg-emerald-500"></div>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Introduction</span>
              </div>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                Welcome to <span className="font-bold text-slate-900">The Automation People</span>, a trusted name in industrial automation and smart control solutions. We specialize in delivering innovative products and services that enhance efficiency, reliability, and intelligence across various industrial applications.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "50px" }}
            className="bg-slate-50 border border-slate-100 p-8 md:p-12 rounded-2xl relative"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10">
              <Zap className="w-24 h-24 text-emerald-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Precision Engineering</h3>
            <blockquote className="text-slate-600 italic text-lg border-l-4 border-emerald-500 pl-6 py-2">
              "Bridging the gap between physical hardware and intelligent digital control."
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-24 bg-slate-50 border-y border-slate-200 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">What We Do</h2>
            <div className="w-24 h-1.5 bg-emerald-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "50px" }}
                whileHover={{ 
                  y: -10,
                  transition: { type: "spring", stiffness: 300 }
                }}
                transition={{ delay: idx * 0.05, duration: 0.5 }}
                className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col group transition-all duration-300 hover:shadow-xl hover:border-emerald-500/20"
              >
                <motion.div 
                  whileHover={{ 
                    rotate: [0, -10, 10, -10, 0],
                    transition: { duration: 0.5 }
                  }}
                  className={`w-16 h-16 ${s.color} rounded-2xl flex items-center justify-center mb-8 shadow-lg ${s.shadow} transition-all duration-300`}
                >
                  {s.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-emerald-700 transition-colors uppercase tracking-tight">{s.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 bg-primary-green relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-[radial-gradient(#fff_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "50px" }}
            className="space-y-12"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
              <Zap className="w-8 h-8 text-emerald-400" />
            </div>
            
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium text-white leading-tight italic px-4">
              "At <span className="font-bold text-emerald-400">The Automation People</span>, we blend cutting-edge technology with engineering excellence to deliver scalable, reliable, and cost-effective automation solutions."
            </h2>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact')}
              className="bg-white text-primary-green px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-emerald-400/20 transition-all flex items-center gap-2 mx-auto"
            >
              Discuss Your Project
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
