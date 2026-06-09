import { motion } from 'motion/react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, Linkedin, Facebook, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (href: string, id: string) => {
    if (location.pathname === href) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(href);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <footer id="contact-info" className="bg-[#0A192F] text-slate-300 py-16 px-4 border-t border-slate-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        {/* Brand & Social */}
        <div className="max-w-sm">
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center mb-6">
            <img 
              src="/images/logo_transparent.png" 
              alt="The Automation People" 
              className="h-16 md:h-20 lg:h-[88px] w-auto object-contain" 
            />
          </Link>
          <p className="text-sm text-slate-400 mb-6 leading-relaxed">
            Leading industrial automation solutions provider, empowering businesses with smart technology and innovative engineering.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 bg-slate-800/50 rounded-lg flex items-center justify-center hover:text-emerald-400 hover:bg-slate-800 transition-all"><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="w-10 h-10 bg-slate-800/50 rounded-lg flex items-center justify-center hover:text-emerald-400 hover:bg-slate-800 transition-all"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="w-10 h-10 bg-slate-800/50 rounded-lg flex items-center justify-center hover:text-emerald-400 hover:bg-slate-800 transition-all"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="w-10 h-10 bg-slate-800/50 rounded-lg flex items-center justify-center hover:text-emerald-400 hover:bg-slate-800 transition-all"><Youtube className="w-5 h-5" /></a>
          </div>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider border-l-2 border-emerald-500 pl-4">Contact Us</h3>
          <div className="space-y-4">
            <a href="tel:+919944042138" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-emerald-600 transition-all duration-300">
                <Phone className="w-5 h-5 text-emerald-400 group-hover:text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Call Us</span>
                <span className="text-slate-200 group-hover:text-emerald-400 transition-colors">+91 9944042138</span>
              </div>
            </a>
            <a href="mailto:reachus@theautomationpeople.in" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-emerald-600 transition-all duration-300">
                <Mail className="w-5 h-5 text-emerald-400 group-hover:text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Email Us</span>
                <span className="text-slate-200 group-hover:text-emerald-400 transition-colors whitespace-nowrap text-sm">reachus@theautomationpeople.in</span>
              </div>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider border-l-2 border-emerald-500 pl-4">Quick Links</h3>
          <ul className="space-y-3">
            <li><button onClick={() => handleNavClick('/', 'hero')} className="hover:text-emerald-400 transition-colors text-sm">Home</button></li>
            <li><button onClick={() => navigate('/about')} className="hover:text-emerald-400 transition-colors text-sm">About Us</button></li>
            <li><button onClick={() => navigate('/services')} className="hover:text-emerald-400 transition-colors text-sm">Services</button></li>
            <li><button onClick={() => navigate('/contact')} className="hover:text-emerald-400 transition-colors text-sm">Contact Us</button></li>
            <li className="pt-4"><span className="text-[10px] font-bold text-emerald-500 uppercase tracking-[0.2em] block mb-2 opacity-60">Products</span></li>
            <li><button onClick={() => navigate('/products/sensors')} className="hover:text-emerald-400 transition-colors text-sm pl-2">Sensors</button></li>
            <li><button onClick={() => navigate('/products/valves')} className="hover:text-emerald-400 transition-colors text-sm pl-2">Valves</button></li>
            <li><button onClick={() => navigate('/products/automation')} className="hover:text-emerald-400 transition-colors text-sm pl-2">Automation Products</button></li>
            <li><button onClick={() => navigate('/products/instruments')} className="hover:text-emerald-400 transition-colors text-sm pl-2">Instruments</button></li>
            <li><button onClick={() => navigate('/products/iot')} className="hover:text-emerald-400 transition-colors text-sm pl-2">IOT</button></li>
          </ul>
        </div>

        {/* Address */}
        <div>
          <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider border-l-2 border-emerald-500 pl-4">Address</h3>
          <p className="max-w-[200px] leading-relaxed text-slate-400 text-sm italic">
            No.9A Sekkadi Street, Narimedu, Madurai, TamilNadu 625002
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
        <p>© {new Date().getFullYear()} The Automation People. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">Sitemap</a>
        </div>
      </div>
    </footer>
  );
}
