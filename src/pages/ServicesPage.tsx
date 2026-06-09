import { motion, useScroll, useTransform } from 'motion/react';
import { Bot, Gauge, Globe, Cpu, Zap, Activity, ChevronRight, Binary, Factory, ShieldCheck, Cog } from 'lucide-react';
import { useRef } from 'react';

const detailedServices = [
  {
    id: 'industrial-automation',
    title: 'Industrial Automation',
    shortDesc: 'Precision control systems for modern manufacturing.',
    longDesc: 'We design and implement end-to-end automation architectures that streamline production, reduce downtime, and ensure micro-precision across the entire assembly line.',
    icon: <Bot className="w-10 h-10" />,
    color: 'from-emerald-500 to-teal-600',
    features: ['PLC Programming', 'Servo Motion Control', 'Vision System Integration']
  },
  {
    id: 'process-control',
    title: 'Process Control',
    shortDesc: 'Robust regulation of complex industrial cycles.',
    longDesc: 'Our process control solutions manage temperature, pressure, flow, and level with unparalleled stability, ensuring product consistency in the most demanding environments.',
    icon: <Gauge className="w-10 h-10" />,
    color: 'from-blue-500 to-indigo-600',
    features: ['DCS Implementation', 'PID Tuning', 'Instrumentation Calibration']
  },
  {
    id: 'iot-integration',
    title: 'IoT & Smart Factory',
    shortDesc: 'Data-driven insights for the Industry 4.0 era.',
    longDesc: 'Bridge the gap between hardware and intelligence. We connect your shop floor to the cloud, providing real-time analytics and predictive maintenance capabilities.',
    icon: <Globe className="w-10 h-10" />,
    color: 'from-purple-500 to-pink-600',
    features: ['Real-time Monitoring', 'Cloud Connectivity', 'Smart Energy Management']
  },
  {
    id: 'robotics',
    title: 'Robotic Integration',
    shortDesc: 'Automated handling with robotic precision.',
    longDesc: 'From pick-and-place to collaborative robotic arms, we integrate high-speed robotic systems designed to handle repetitive tasks with zero fatigue.',
    icon: <Cpu className="w-10 h-10" />,
    color: 'from-orange-500 to-red-600',
    features: ['Cobot Setup', 'Palletizing Solutions', 'End-of-Arm Tooling']
  },
  {
    id: 'scada',
    title: 'SCADA Solutions',
    shortDesc: 'Centralized HMI and monitoring stations.',
    longDesc: 'Custom-developed SCADA interfaces that provide high-level supervision of machines and processes, featuring intuitive dashboards and alarming systems.',
    icon: <Activity className="w-10 h-10" />,
    color: 'from-cyan-500 to-blue-600',
    features: ['Custom HMI Design', 'Data Logging', 'Remote Access Control']
  },
  {
    id: 'retrofitting',
    title: 'Modern Retrofitting',
    shortDesc: 'Upgrading legacy hardware for the future.',
    longDesc: 'Don\'t replace—refresh. We modernize existing machinery with new controllers and sensors, extending the lifespan of your heavy investments.',
    icon: <Zap className="w-10 h-10" />,
    color: 'from-yellow-500 to-amber-600',
    features: ['Hardware Component Updates', 'Efficiency Audits', 'Life Extension Engineering']
  }
];

export default function ServicesPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div className="bg-white min-h-screen text-slate-900 selection:bg-emerald-500 selection:text-white" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden border-b border-slate-200">
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute inset-0 z-0 opacity-20"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/20 via-white/40 to-white"></div>
          <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block py-1.5 px-4 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-[0.2em] mb-8">
              Solutions for Tomorrow
            </span>
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-none tracking-tighter">
              ADVANCED <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-200">
                INDUSTRIAL SERVICES
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed border-l-2 border-emerald-500 pl-6 py-2 text-left">
              Engineering the next generation of automation. We don't just solve problems; we redefine what's possible on the factory floor.
            </p>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -right-20 -top-20 opacity-10 pointer-events-none"
        >
          <Cog className="w-96 h-96 text-emerald-500" />
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {detailedServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "50px" }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-3xl blur-2xl -z-10"
                  style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-from), var(--tw-gradient-to))` }}
                ></div>
                
                <div className="h-full bg-white shadow-2xl p-8 rounded-[2.5rem] border border-slate-200 transition-all duration-300 group-hover:border-emerald-500/50 flex flex-col">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-8 shadow-lg shadow-emerald-950/20`}>
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 group-hover:text-emerald-600 transition-colors">
                    {service.title}
                    <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed mb-8">
                    {service.longDesc}
                  </p>

                  <div className="mt-auto pt-8 border-t border-slate-200">
                    <ul className="space-y-3">
                      {service.features.map(feature => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-slate-600">
                          <Binary className="w-4 h-4 text-emerald-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            whileInView={{ scale: [0.95, 1], opacity: [0, 1] }}
            className="bg-gradient-to-r from-emerald-600 to-teal-700 rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_30%,_#fff_0%,_transparent_50%)]"></div>
            <h2 className="text-4xl md:text-6xl font-black mb-8 relative z-10 leading-tight">
              READY TO MODERNIZE <br />
              YOUR OPERATIONS?
            </h2>
            <p className="text-xl md:text-2xl text-emerald-50 max-w-2xl mx-auto mb-12 relative z-10 opacity-90">
              Schedule a technical consultation with our engineering team today and start your journey towards Industry 4.0.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-emerald-900 px-12 py-5 rounded-full font-black text-lg shadow-2xl hover:shadow-emerald-900/40 transition-all uppercase tracking-widest"
            >
              Contact Specialist
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Stats/Badge Banner */}
      <div className="border-t border-slate-200 bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-40 text-slate-600">
          <div className="flex items-center gap-2"><Factory className="w-5 h-5" /> <span>IS0 9001 CERTIFIED</span></div>
          <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5" /> <span>INDUSTRY COMPLIANT</span></div>
          <div className="flex items-center gap-2 text-emerald-500"><Binary className="w-5 h-5" /> <span>CUSTOM LOGIC EXPERTS</span></div>
        </div>
      </div>
    </div>
  );
}
