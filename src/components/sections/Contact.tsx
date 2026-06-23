import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -30, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 100, damping: 15 }
  }
};

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <section id="contact" className="relative pt-48 pb-32 bg-slate-50 overflow-hidden min-h-screen flex flex-col justify-center">
      <Helmet>
        <title>Contact Us | Get in Touch - The Automation People</title>
        <meta name="description" content="Have questions about our industrial automation, SCADA software, or IoT solutions? Contact The Automation People's engineering team in Madurai today." />
        <meta property="og:title" content="Contact Us | Get in Touch - The Automation People" />
        <meta property="og:description" content="Have questions about our industrial automation, SCADA software, or IoT solutions? Contact The Automation People's engineering team in Madurai today." />
        <link rel="canonical" href="https://theautomationpeople.in/contact" />
      </Helmet>
      {/* Enhanced Technical Background */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        {/* Grid Layer */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `linear-gradient(#059669 1px, transparent 1px), linear-gradient(90deg, #059669 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        ></div>

        {/* Large Decorative Text (Matches Hero Aesthetic) */}
        <div className="absolute top-[5%] left-0 right-0 flex justify-center opacity-[0.05] pointer-events-none select-none w-full" aria-hidden="true">
          <div className="text-emerald-900 text-[25vw] md:text-[20vw] font-black leading-none tracking-tighter">
            CONNECT
          </div>
        </div>

        {/* Dynamic Circuit Lines Layer */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.1]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <marker id="node" markerWidth="8" markerHeight="8" refX="4" refY="4">
              <circle cx="4" cy="4" r="2.5" fill="#059669" />
            </marker>
          </defs>

          <g stroke="#059669" strokeWidth="1.5" fill="none" markerEnd="url(#node)" markerStart="url(#node)">
            <path d="M-100,200 L200,200 L240,240 L400,240" />
            <path d="M100,-100 L100,100 L140,140 L140,300" />
            <path d="M500,100 L700,100 L740,60 L900,60" />
            <path d="M1200,400 L1000,400 L960,440 L800,440" />
            <path d="M800,800 L800,600 L840,560 L1000,560" />
            <path d="M0,800 L200,800 L240,840 L400,840" />
            <path d="M1600,300 L1300,300 L1260,340 L1100,340" />
          </g>

          {/* Animated Data Pulses */}
          <motion.circle
            r="4"
            fill="#10b981"
            filter="url(#glow)"
            animate={{
              offsetDistance: ["0%", "100%"],
              opacity: [0, 1, 1, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              offsetPath: "path('M-100,200 L200,200 L240,240 L400,240')",
              willChange: 'transform, opacity'
            }}
          />
          <motion.circle
            r="4"
            fill="#10b981"
            filter="url(#glow)"
            animate={{
              offsetDistance: ["0%", "100%"],
              opacity: [0, 1, 1, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: 3,
              ease: "linear"
            }}
            style={{
              offsetPath: "path('M1600,300 L1300,300 L1260,340 L1100,340')",
              willChange: 'transform, opacity'
            }}
          />
        </svg>

        {/* Ambient Depth Gradients */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-emerald-100/30 blur-[160px] rounded-full translate-x-1/2 -translate-y-1/2" aria-hidden="true"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-emerald-100/30 blur-[160px] rounded-full -translate-x-1/2 translate-y-1/2" aria-hidden="true"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-4"
          >
            Get in Touch
          </motion.h1>
          <div className="w-20 h-1.5 bg-primary-green mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {/* Contact Layout */}
          <div className="relative max-w-6xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Left Column: Contact Details */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "50px" }}
                className="bg-white p-8 sm:p-12 rounded-[2.5rem] shadow-2xl shadow-green-900/10 border border-green-100 relative z-10"
              >
                <div className="space-y-16">
                  {/* Head Office Section */}
                  <div>
                    <div className="flex items-center gap-4 mb-10">
                      <h2 className="text-2xl font-bold text-slate-800 tracking-tight uppercase">Head Office</h2>
                      <div className="h-px flex-1 bg-slate-100" />
                    </div>

                    <div className="space-y-8">
                      <div className="flex items-start gap-6 group">
                        <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary-green group-hover:text-white transition-all duration-300">
                          <MapPin className="w-6 h-6 text-primary-green group-hover:text-white" />
                        </div>
                        <p className="text-slate-600 leading-relaxed font-medium">No.9A Sekkadi Street, Narimedu,<br />Madurai, TamilNadu 625002</p>
                      </div>

                      <div className="flex items-center gap-6 group">
                        <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary-green group-hover:text-white transition-all duration-300">
                          <Phone className="w-6 h-6 text-primary-green group-hover:text-white" />
                        </div>
                        <a href="tel:+919944042138" className="text-lg font-bold text-slate-800 hover:text-primary-green transition-colors">+91 9944042138</a>
                      </div>

                      <div className="flex items-center gap-6 group">
                        <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary-green group-hover:text-white transition-all duration-300">
                          <Mail className="w-6 h-6 text-primary-green group-hover:text-white" />
                        </div>
                        <a href="mailto:reachus@theautomationpeople.in" className="text-sm sm:text-base lg:text-lg font-bold text-slate-800 hover:text-primary-green transition-colors whitespace-nowrap">
                          reachus@theautomationpeople.in
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Factory Location Section */}
                  <div>
                    <div className="flex items-center gap-4 mb-10">
                      <h2 className="text-2xl font-bold text-slate-800 tracking-tight uppercase">Factory</h2>
                      <div className="h-px flex-1 bg-slate-100" />
                    </div>

                    <div className="flex items-start gap-6 group">
                      <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary-green group-hover:text-white transition-all duration-300">
                        <MapPin className="w-6 h-6 text-primary-green group-hover:text-white" />
                      </div>
                      <div>
                        <p className="text-slate-600 leading-relaxed font-medium">No 31/1 Ahimsapuram 5th Street Extension,<br />Near Gopuram Theater, Sellur,<br />Madurai - 625002</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Column: Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "50px" }}
                className="bg-white p-8 sm:p-12 rounded-[2.5rem] shadow-2xl shadow-green-900/10 border border-green-100 relative z-10 flex flex-col"
              >
                <div className="flex items-center gap-4 mb-10">
                  <h2 className="text-2xl font-bold text-slate-800 tracking-tight uppercase">Send a Message</h2>
                  <div className="h-px flex-1 bg-slate-100" />
                </div>

                <iframe name="hidden_iframe" id="hidden_iframe" style={{ display: 'none' }}></iframe>
                {isSubmitted ? (
                  <div className="flex-1 flex flex-col items-center justify-center space-y-4 text-center py-12">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                      <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800">Thank You!</h3>
                    <p className="text-slate-600">Your message has been sent successfully. We will get back to you soon.</p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-6 text-primary-green font-semibold hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form
                    action="https://docs.google.com/forms/d/e/1FAIpQLScknoIErqEz0TwnCMbhvzyh6ME9E7SX0LPCCvq6scNjgnHM4Q/formResponse"
                    method="post"
                    target="hidden_iframe"
                    className="space-y-6 flex-1 flex flex-col justify-between"
                    onSubmit={() => {
                      setTimeout(() => setIsSubmitted(true), 500);
                    }}
                  >
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-semibold text-slate-700">Full Name</label>
                          <input type="text" name="entry.1165663985" id="name" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-primary-green focus:border-primary-green transition-all outline-none" placeholder="John Doe" required />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="company" className="text-sm font-semibold text-slate-700">Company Name</label>
                          <input type="text" name="entry.1659873230" id="company" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-primary-green focus:border-primary-green transition-all outline-none" placeholder="Acme Corp" required />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="designation" className="text-sm font-semibold text-slate-700">Designation</label>
                          <input type="text" name="entry.1229887326" id="designation" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-primary-green focus:border-primary-green transition-all outline-none" placeholder="Manager" />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="phone" className="text-sm font-semibold text-slate-700">Phone Number</label>
                          <input type="tel" name="entry.1287555262" id="phone" pattern="[0-9]{10}" minLength={10} maxLength={10} title="Please enter exactly 10 digits" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-primary-green focus:border-primary-green transition-all outline-none" placeholder="9876543210" required />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-semibold text-slate-700">Email Address</label>
                        <input type="email" name="entry.192625699" id="email" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-primary-green focus:border-primary-green transition-all outline-none" placeholder="john@example.com" required />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="requirements" className="text-sm font-semibold text-slate-700">Requirements</label>
                        <textarea name="entry.909921449" id="requirements" rows={4} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-primary-green focus:border-primary-green transition-all outline-none resize-none" placeholder="Tell us about your project requirements..." required></textarea>
                      </div>
                    </div>

                    <button type="submit" className="w-full py-4 bg-primary-green hover:bg-emerald-700 text-white font-bold rounded-xl shadow-lg shadow-emerald-600/30 transition-all active:scale-[0.98] mt-6">
                      Submit Requirements
                    </button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Full Width Map */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "50px" }}
        transition={{ duration: 1 }}
        className="w-[90%] mx-auto max-w-7xl h-[500px] lg:h-[650px] mt-24 relative group border border-slate-200 rounded-[2rem] overflow-hidden shadow-2xl"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.402671895547!2d78.127016!3d9.937878699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c5cf58b15361%3A0x888557beaed09c1a!2sThe%20Automation%20People!5e1!3m2!1sen!2sin!4v1778480903819!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="The Automation People Location"
          className="grayscale-[0.4] group-hover:grayscale-0 transition-all duration-500 contrast-[1.05]"
        ></iframe>
      </motion.div>
    </section>
  );
}
