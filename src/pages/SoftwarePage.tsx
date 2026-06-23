import { motion } from 'motion/react';
import { Monitor, Code, Cloud, Database, ChevronRight, CheckCircle2, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function SoftwarePage() {
  const navigate = useNavigate();

  const softwareSolutions = [
    {
      title: 'SCADA Systems',
      desc: 'Supervisory Control and Data Acquisition systems tailored for monitoring and controlling industrial processes in real-time.',
      icon: <Monitor className="w-6 h-6 text-white" />,
      color: 'bg-blue-600',
      shadow: 'shadow-blue-900/40'
    },
    {
      title: 'Custom Dashboards',
      desc: 'Interactive, web-based dashboards for visualizing factory floor data, KPIs, and production metrics at a glance.',
      icon: <Code className="w-6 h-6 text-white" />,
      color: 'bg-emerald-600',
      shadow: 'shadow-emerald-900/40'
    },
    {
      title: 'Cloud Integration',
      desc: 'Secure cloud architectures for data storage, remote access, and centralized management of multiple facilities.',
      icon: <Cloud className="w-6 h-6 text-white" />,
      color: 'bg-purple-600',
      shadow: 'shadow-purple-900/40'
    },
    {
      title: 'Database Management',
      desc: 'Robust historical data logging, reporting, and predictive analytics using enterprise-grade databases.',
      icon: <Database className="w-6 h-6 text-white" />,
      color: 'bg-amber-600',
      shadow: 'shadow-amber-900/40'
    }
  ];

  const features = [
    'Real-time Data Processing',
    'Customizable Reporting & Analytics',
    'Cross-Platform Accessibility',
    'Secure & Scalable Architectures',
    'Third-Party API Integrations',
    'Automated Alerts & Notifications'
  ];

  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Industrial Software & SCADA Solutions | The Automation People</title>
        <meta name="description" content="Optimize your production with our advanced industrial software, PLC programming, custom SCADA/HMI dashboards, and real-time data monitoring solutions." />
        <meta property="og:title" content="Industrial Software & SCADA Solutions | The Automation People" />
        <meta property="og:description" content="Optimize your production with our advanced industrial software, PLC programming, custom SCADA/HMI dashboards, and real-time data monitoring solutions." />
        <link rel="canonical" href="https://theautomationpeople.in/software" />
      </Helmet>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80" 
            alt="Software Solutions Background" 
            className="w-full h-full object-cover grayscale brightness-50"
          />
          <div className="absolute inset-0 bg-blue-900/70 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-primary-green/80 to-primary-green/95"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <span className="inline-block py-1.5 px-3 rounded bg-white/20 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-6 border border-white/30">
              Digital Transformation
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
              Industrial Software <br /> Solutions
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-emerald-50 mb-8 leading-relaxed">
              Empowering your physical infrastructure with intelligent software. From SCADA systems to custom dashboards, we bridge the gap between hardware and actionable insights.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 md:py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Our Software Expertise</h2>
            <div className="w-20 h-1.5 bg-emerald-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {softwareSolutions.map((solution, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "50px" }}
                whileHover={{ y: -5 }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex gap-6 group hover:shadow-xl hover:border-emerald-500/30 transition-all duration-300"
              >
                <div className={`shrink-0 w-14 h-14 ${solution.color} rounded-2xl flex items-center justify-center shadow-lg ${solution.shadow}`}>
                  {solution.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">{solution.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-sm">{solution.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Web Application */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block py-1.5 px-3 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-4 border border-emerald-500/30">
              Live Demo
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">NetZero Solution</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg mb-8">
              Experience the performance and design of our customized web platforms firsthand.
            </p>
            <div className="max-w-3xl mx-auto flex flex-col gap-6 mb-12">
              <div className="bg-slate-800/80 p-5 md:p-8 rounded-2xl border border-slate-700 shadow-2xl backdrop-blur-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative z-10">
                  
                  <div className="text-left flex-1 w-full">
                    <div className="text-xs font-bold text-emerald-400 uppercase tracking-[0.2em] mb-4">Demo Credentials</div>
                    <div className="space-y-3">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-6 bg-slate-900/80 p-4 rounded-xl border border-slate-700/50">
                        <span className="text-slate-400 text-sm font-medium shrink-0 uppercase tracking-wider text-[10px]">Admin Access</span>
                        <div className="font-mono text-emerald-100 text-sm sm:text-right break-all sm:break-normal">
                          <span className="text-slate-300">admin@tapgreen.com</span>
                          <span className="mx-2 text-emerald-500/50 hidden sm:inline">|</span>
                          <span className="block sm:inline text-emerald-300 font-bold mt-1 sm:mt-0">admin</span>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-6 bg-slate-900/80 p-4 rounded-xl border border-slate-700/50">
                        <span className="text-slate-400 text-sm font-medium shrink-0 uppercase tracking-wider text-[10px]">Manager Access</span>
                        <div className="font-mono text-emerald-100 text-sm sm:text-right break-all sm:break-normal">
                          <span className="text-slate-300">manager1@tapgreen.com</span>
                          <span className="mx-2 text-emerald-500/50 hidden sm:inline">|</span>
                          <span className="block sm:inline text-emerald-300 font-bold mt-1 sm:mt-0">site1</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex shrink-0 w-full lg:w-auto justify-center mt-2 lg:mt-0">
                    <a 
                      href="https://tapgreen.vercel.app/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full lg:w-auto inline-flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-5 rounded-xl font-bold transition-all shadow-xl shadow-emerald-500/20 group hover:-translate-y-1"
                    >
                      <span>Open Live App</span>
                      <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </a>
                  </div>

                </div>
              </div>
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-800 h-[60vh] md:h-[80vh] min-h-[400px] md:min-h-[600px] max-h-[900px] w-full relative ring-4 ring-slate-800/50"
          >
             {/* Browser Chrome */}
             <div className="h-10 md:h-12 bg-[#1e293b] border-b border-slate-800 flex items-center px-3 md:px-4 justify-between gap-2">
               <div className="flex items-center gap-1.5 md:gap-2 w-12 md:w-20 shrink-0">
                 <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500/80"></div>
                 <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500/80"></div>
                 <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-emerald-500/80"></div>
               </div>
               <div className="flex-1 max-w-sm mx-auto bg-slate-900/50 rounded text-[10px] md:text-xs px-2 md:px-4 py-1 md:py-1.5 text-slate-400 flex items-center justify-center gap-1.5 md:gap-2 border border-slate-700/50 truncate">
                 <Monitor className="w-2.5 h-2.5 md:w-3 md:h-3 shrink-0" /> tapgreen.vercel.app
               </div>
               <div className="w-12 md:w-20 shrink-0"></div>
             </div>
             <iframe 
               src="https://tapgreen.vercel.app/" 
               className="w-full h-[calc(100%-40px)] md:h-[calc(100%-48px)] border-none bg-slate-50"
               title="TAP Green Interactive Demo"
               loading="lazy"
             />
          </motion.div>
        </div>
      </section>

      {/* Features & Call to Action */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Choose Our Software Solutions?</h2>
              <p className="text-slate-600 mb-8 text-lg">
                We don't just write code; we understand industrial processes. Our software is designed to integrate seamlessly with your existing hardware, providing reliable, secure, and user-friendly interfaces.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span className="text-slate-700 font-medium text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-primary-green rounded-[3rem] p-10 md:p-12 text-center text-white relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[size:20px_20px]"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Ready to upgrade your systems?</h3>
                <p className="text-emerald-100 mb-8">
                  Let's discuss how our custom software can optimize your operations and provide unparalleled visibility.
                </p>
                <button
                  onClick={() => navigate('/contact')}
                  className="bg-white text-primary-green px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-emerald-400/20 hover:scale-105 transition-all flex items-center gap-2 mx-auto"
                >
                  Contact Our Software Team
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
