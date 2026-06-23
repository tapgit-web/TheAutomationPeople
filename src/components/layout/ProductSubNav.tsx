import { NavLink } from 'react-router-dom';
import { motion } from 'motion/react';

const productLinks = [
  { name: 'Sensors', href: '/products/sensors' },
  { name: 'Valves', href: '/products/valves' }, 
  { name: 'Automation Products', href: '/products/automation' },
  { name: 'Instruments', href: '/products/instruments' },
  { name: 'IOT', href: '/products/iot' },
  { name: 'Customized Machine', href: '/products/customized-machine' },
];

export default function ProductSubNav() {
  return (
    <div className="bg-slate-900 border-b border-white/5 sticky top-[72px] md:top-[80px] lg:top-[88px] z-40">
      <div className="max-w-7xl mx-auto px-4 overflow-x-auto no-scrollbar">
        <div className="flex items-center justify-between min-w-max md:min-w-0">
          {productLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              className={({ isActive }) => `
                relative py-4 px-4 md:px-6 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300
                ${isActive ? 'text-emerald-400' : 'text-white/70 hover:text-white'}
              `}
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-400"
                      initial={false}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}
