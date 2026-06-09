import { motion } from 'motion/react';
import { Droplets, Activity, ChevronRight, Settings2, Wind, Layers } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ProductSubNav from '../../components/layout/ProductSubNav';

export default function ValvesPage() {
  const navigate = useNavigate();

  const valveItems = [
    {
      id: 'v1',
      title: '3-way L-port Ball Valve',
      desc: '3-way L-port Ball Valve With Pneumatic Actuator (VP PF 100/500/1000) for flow diversion, mixing, and shutoff.',
      specs: [
        'Actuator Type: Pneumatic (Single/Double Acting)',
        'Valve Body: Stainless Steel, Brass, Carbon Steel',
        'Ball Material: Stainless Steel, PTFE Coated',
        'Size: 1/4" to 4"',
        'Pressure Rating: Up to 1000 bar',
        'Temp Range: -20°C to +180°C',
        'Port Connection: Threaded/Flanged/Welded'
      ],
      image: '/images/valve_3way.png'
    },
    {
      id: 'v2',
      title: 'Bin Discharge Combo & Fine Valve',
      desc: 'Bin Discharge Combo & Fine valve (VP 1000P) designed for controlled and continuous flow of powder and bulk materials.',
      specs: [
        'Material: Stainless Steel, Carbon Steel, Alloy',
        'Size Range: 2" to 12"',
        'Pressure Rating: Up to 10 bar',
        'Temp Range: -20°C to +150°C',
        'Flow Type: Controlled, Intermittent, Continuous',
        'Actuation: Pneumatic, Electric, Manual',
        'Seal Material: PTFE, Viton, EPDM'
      ],
      image: '/images/valve_bin.png'
    },
    {
      id: 'v3',
      title: 'Knife Gate Valve',
      desc: 'Knife Gate Valve (VP 50) ideal for pulp, paper, mining, wastewater treatment, and slurry handling.',
      specs: [
        'Material: Cast/Ductile Iron, SS, Alloy Steel',
        'Size Range: 2" to 48"',
        'Pressure Rating: Up to 16 bar standard',
        'Temp Range: -29°C to +450°C',
        'Actuation: Manual, Pneumatic, Electric, Hydraulic',
        'End Connection: Wafer, Lugged, Flanged',
        'Seal: PTFE, EPDM, NBR, Metal-to-Metal'
      ],
      image: '/images/valve_knife.png'
    },
    {
      id: 'v4',
      title: 'Pneumatic Operated Ball Valve',
      desc: 'Pneumatic Operated Ball Valve (VP 50) for high durability, quick operation, and low torque applications.',
      specs: [
        'Material: SS, Brass, Carbon Steel, PVC',
        'Size Range: 1/2" to 12"',
        'Pressure Rating: Up to 1000 psi',
        'Temp Range: -20°C to +180°C',
        'Actuation: Pneumatic (Single/Double Acting)',
        'Flow Type: Full Port or Reduced Port',
        'End Connection: Threaded, Flanged, Welded'
      ],
      image: '/images/valve_pneumatic.png'
    },
    {
      id: 'v5',
      title: 'Sanitary Ball Valve',
      desc: 'Sanitary Ball Valve (VP 50) with high polished surface finish for hygienic applications like food and pharmaceuticals.',
      specs: [
        'Material: 304/316 Stainless Steel',
        'Size Range: 1/2" to 4"',
        'Pressure Rating: Up to 150 psi (10 bar)',
        'Temp Range: -20°C to +150°C',
        'Seal: FDA-Approved EPDM, PTFE, Silicone',
        'End Connection: Tri-Clamp, Butt Weld, Threaded/Flanged',
        'Surface Finish: High Polished (Ra ≤ 0.8 μm)'
      ],
      image: '/images/valve_sanitary.png'
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center pt-48 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/circuit_background.png" 
            alt="Valves Background" 
            className="w-full h-full object-cover grayscale brightness-50"
          />
          <div className="absolute inset-0 bg-primary-green/60 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-primary-green/40 to-primary-green/90"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <span className="inline-block py-1.5 px-3 rounded bg-white/20 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-6 border border-white/30">
              Flow Control
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Valve Solutions
            </h1>
            <p className="text-emerald-100 max-w-2xl text-lg opacity-80 uppercase tracking-widest text-sm">
              Reliable regulation for every industrial medium
            </p>
          </motion.div>
        </div>
      </section>

      <ProductSubNav />

      {/* Main Content */}
      <section className="py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {valveItems.map((v, idx) => (
              <motion.div
                key={v.title.split(" ")[0]}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "50px" }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100 flex flex-col group hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  <img 
                    src={v.image} 
                    alt={v.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-primary-green text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest">
                      {v.title.split(" ")[0]}
                    </span>
                  </div>
                </div>
                <div className="p-10 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 uppercase tracking-tight">{v.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-sm mb-6">{v.desc}</p>
                  
                  <div className="space-y-3 mb-8 flex-grow">
                    {v.specs.map((spec, i) => (
                      <div key={i} className="flex items-start gap-3 text-xs text-slate-600 font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0 mt-1.5" />
                        {spec}
                      </div>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-emerald-600 font-bold text-xs uppercase tracking-widest group/btn"
                  >
                    View Technical Datasheet
                    <ChevronRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-green relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 uppercase tracking-tighter">Need a specific valve body material?</h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/contact')}
            className="bg-white text-primary-green px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest shadow-2xl transition-all flex items-center gap-2 mx-auto"
          >
            Contact Engineering
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </div>
      </section>
    </div>
  );
}

