import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, Sparkles, CheckCircle, PhoneCall, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface FAQItem {
  question: string;
  answer: string;
  highlights?: string[];
  category: string;
}

const faqs: FAQItem[] = [
  {
    category: 'Company & Location',
    question: 'Who is The Automation People and where are you located?',
    answer: 'The Automation People (TAP) is a premier industrial automation engineering and manufacturing company based in Madurai, Tamil Nadu, India. Our head office is located at No.9A Sekkadi Street, Narimedu, Madurai - 625002, and our manufacturing & testing factory is situated at Sellur, Madurai.',
    highlights: ['Head Office: Narimedu, Madurai', 'Factory: Sellur, Madurai', 'Serving Industries Across India']
  },
  {
    category: 'Engineering Services',
    question: 'What industrial automation and engineering services do you provide?',
    answer: 'We provide end-to-end industrial engineering services, including custom PLC control panel fabrication, PLC/HMI software programming, SCADA web dashboard development, custom PCB design for valve actuation, process control tuning (PID/DCS), smart factory IoT integration, and machinery retrofitting.',
    highlights: ['PLC Programming & Panels', 'SCADA & HMI Dashboards', 'Custom PCB Design', 'IoT & Industry 4.0']
  },
  {
    category: 'Products',
    question: 'What industrial products, sensors, and valves do you supply?',
    answer: 'We supply a comprehensive catalog of industrial automation hardware including inductive & optical sensors, temperature & pressure transmitters, solenoid valves, pneumatic control valves, electromagnetic flowmeters, PLCs, HMIs, VFD motor drives, and industrial IoT gateways.',
    highlights: ['Sensors & Transmitters', 'Process & Control Valves', 'PLCs, HMIs & VFD Drives', 'IoT Gateways']
  },
  {
    category: 'Custom Machinery',
    question: 'Do you build Special Purpose Machines (SPM) and custom equipment?',
    answer: 'Yes! We design, fabricate, wire, and commission Special Purpose Machines (SPM) tailored specifically to your manufacturing process requirements. We also engineer End-of-Arm Tooling (EOAT) for robotic pick-and-place automation and modernize legacy machinery with modern controls.',
    highlights: ['Custom SPM Design', 'Robotic Arm Integration', 'Legacy Machine Modernization']
  },
  {
    category: 'SCADA & Cloud',
    question: 'What SCADA software and IoT monitoring platforms do you offer?',
    answer: 'We build customized web-based SCADA systems and IoT dashboards featuring real-time telemetry, historical trend logging, automated fault alerts, and cloud reporting. You can explore our live web application demo (NetZero Energy & Carbon Platform) at https://tapgreen.vercel.app.',
    highlights: ['Real-time Web SCADA', 'Automated SMS/Email Alerts', 'Live Demo at tapgreen.vercel.app']
  },
  {
    category: 'Consultation & Quotes',
    question: 'How can I get a quote or discuss a custom automation project?',
    answer: 'You can easily request a project quote or technical consultation by calling our engineering team at +91 9944042138, emailing reachus@theautomationpeople.in, or filling out our online form on our contact page.',
    highlights: ['Phone: +91 9944042138', 'Email: reachus@theautomationpeople.in', 'Fast Engineering Consultation']
  }
];

export default function AEOFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const navigate = useNavigate();

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      id="faq-section" 
      className="py-24 bg-slate-900 text-white relative overflow-hidden border-t border-slate-800"
      itemScope 
      itemType="https://schema.org/FAQPage"
    >
      {/* Background Decorative Lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Badge & Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>AI Search & Direct Answers</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-6">
            Frequently Asked Questions & <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-300">Technical Details</span>
          </h2>
          
          <p className="text-slate-400 text-base md:text-lg leading-relaxed">
            Get instant, verifiable answers regarding our industrial automation capabilities, custom machinery, SCADA software, and company location in Madurai, India.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? 'bg-slate-800/90 border-emerald-500/50 shadow-xl shadow-emerald-950/30 ring-1 ring-emerald-500/30' 
                    : 'bg-slate-800/40 border-slate-700/60 hover:border-slate-600 hover:bg-slate-800/60'
                }`}
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? 'bg-emerald-500 text-slate-950 font-bold' : 'bg-slate-700/60 text-emerald-400'
                    }`}>
                      <HelpCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                        {faq.category}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight" itemProp="name">
                        {faq.question}
                      </h3>
                    </div>
                  </div>
                  
                  <ChevronDown className={`w-6 h-6 text-slate-400 shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-emerald-400' : ''
                  }`} />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      itemScope
                      itemProp="acceptedAnswer"
                      itemType="https://schema.org/Answer"
                    >
                      <div className="px-6 sm:px-7 pb-7 pt-2 border-t border-slate-700/50 text-slate-300 leading-relaxed space-y-4">
                        <p itemProp="text" className="text-base text-slate-300">
                          {faq.answer}
                        </p>

                        {faq.highlights && (
                          <div className="flex flex-wrap gap-2 pt-2">
                            {faq.highlights.map((item, hIdx) => (
                              <span 
                                key={hIdx}
                                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/20"
                              >
                                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                                {item}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Bar below FAQs */}
        <div className="mt-16 bg-gradient-to-r from-emerald-950/80 to-slate-800/90 border border-emerald-500/30 p-8 sm:p-10 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Have a specific engineering question?</h3>
            <p className="text-slate-400 text-sm sm:text-base">Speak directly with our technical automation specialists today.</p>
          </div>
          
          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <a 
              href="tel:+919944042138" 
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-600 text-white font-bold text-sm transition-all"
            >
              <PhoneCall className="w-4 h-4 text-emerald-400" />
              <span>+91 9944042138</span>
            </a>
            <button
              onClick={() => navigate('/contact')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-emerald-500/20"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Us</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
