import { motion } from 'motion/react';
import { Gauge, Thermometer, ChevronRight, Activity, Zap, Compass } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ProductSubNav from '../../components/layout/ProductSubNav';

export default function InstrumentsPage() {
  const navigate = useNavigate();

  const instrumentItems = [
    {
      id: 'i1',
      title: 'Analytical Instrument',
      desc: 'High-precision tools for liquid and gas compositions, ensuring optimal process quality and safety.',
      specs: [
        'Type: Spectrometers, Chromatographs, pH Meters, Gas Analyzers, Refractometers',
        'Measurement Range: Varies by instrument (e.g., 0-1000 nm for UV-Vis, 0-10% for concentration)',
        'Accuracy: ±0.1% to ±2% of reading',
        'Principle of Operation: Absorption, Emission, Chromatography, Gravimetry',
        'Resolution: High Resolution (e.g., 0.1 nm for Spectrometers)',
        'Detection Limits: ppb to % concentration',
        'Power Supply: 110V AC / 220V AC / Rechargeable Battery',
        'Display: Digital LCD / Touchscreen with Data Logging',
        'Output Signal: Analog (4-20mA), Digital (RS485, Modbus)'
      ],
      image: '/images/instrument_1.png'
    },
    {
      id: 'i2',
      title: 'Flow Instruments',
      desc: 'Accurate flow measurement for liquids, gases, and steam in industrial applications.',
      specs: [
        'Type: Electromagnetic, Ultrasonic, Turbine, Vortex, Coriolis',
        'Flow Range: 0.1 L/min to 100,000 L/min',
        'Accuracy: ±0.5% to ±2% of reading',
        'Flow Measurement: Volume Flow / Mass Flow',
        'Output Signal: Analog (4-20mA), Pulse, Digital, Modbus',
        'Fluid Types: Liquids, Gases, Slurries, Steam',
        'Pressure Rating: Up to 1000 bar',
        'Operating Temperature: -50°C to +250°C',
        'Material: Stainless Steel, PTFE, PVC, Carbon Steel'
      ],
      image: '/images/instrument_2.png'
    },
    {
      id: 'i3',
      title: 'Gas Detector (PORTABLE/ONLINE)',
      desc: 'Reliable single and multiple gas detection solutions for safety and monitoring.',
      specs: [
        'Detection Type: Single/Multiple Gas Detection',
        'Gas Types: Combustible, Toxic, Oxygen, CO2, etc.',
        'Power Supply: Rechargeable Battery / 220V AC',
        'Measurement Range: Customizable (ppm/LEL/%Volume)',
        'Display: Digital LCD with Backlight',
        'Accuracy: ±2%',
        'Alarm: Audible, Visual, and Vibrational',
        'Operating Temperature: -20°C to +50°C',
        'Housing: Weatherproof and Explosion-proof Design',
        'Dimensions: Compact and Lightweight',
        'Communication: USB/RS485/Wireless (Online Version)'
      ],
      image: '/images/instrument_3.png'
    },
    {
      id: 'i4',
      title: 'Level Instruments',
      desc: 'Continuous and point level monitoring for tanks and vessels.',
      specs: [
        'Type: Ultrasonic, Capacitive, Radar, Float, Displacer, Laser',
        'Measurement Range: 0.1 m to 30 m',
        'Accuracy: ±0.2% to ±2% of full scale',
        'Level Detection: Continuous, Point, or Interface Measurement',
        'Output Signal: Analog (4-20mA), Digital, Modbus, HART',
        'Pressure Rating: Up to 1000 bar',
        'Operating Temperature: -40°C to +200°C',
        'Material: Stainless Steel, PTFE, Glass, Ceramic',
        'Power Supply: 24V DC, 110V AC, 220V AC',
        'Mounting Type: Top-Mounted, Side-Mounted, Flanged',
        'Applications: Water and Wastewater, Oil & Gas, Chemical, Food & Beverage, Storage Tanks',
        'Communication: RS485, Modbus, Wireless',
        'Certification: ATEX, IECEx, CE, UL Certified'
      ],
      image: '/images/instrument_4.png'
    },
    {
      id: 'i5',
      title: 'Pressure Instruments',
      desc: 'Pressure measurement tools for demanding industrial applications.',
      specs: [
        'Type: Pressure Transmitter, Pressure Sensor, Pressure Gauge, Differential Pressure Transmitter',
        'Measurement Range: 0-100 mbar to 0-1000 bar',
        'Accuracy: ±0.05% to ±0.5% of full scale',
        'Output Signal: Analog (4-20mA), Digital, Modbus, HART',
        'Pressure Type: Gauge, Absolute, Differential, Sealed Gauge',
        'Overpressure Protection: Up to 1.5x rated pressure',
        'Material: Stainless Steel, Hastelloy, Titanium, Ceramic',
        'Operating Temperature: -40°C to +250°C',
        'Power Supply: 24V DC, 110V AC, 220V AC',
        'Display: Digital LCD, Analog Dial, Remote Monitoring',
        'Applications: Oil & Gas, HVAC, Water Treatment, Industrial Process Control',
        'Communication: RS485, Modbus, Wireless',
        'Certification: ATEX, IECEx, CE, UL Certified'
      ],
      image: '/images/instrument_5.png'
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Process Instruments & Gauges | The Automation People</title>
        <meta name="description" content="Explore our range of flow meters, pressure transmitters, level indicators, and analytical instruments for precise process manufacturing control." />
        <meta property="og:title" content="Process Instruments & Gauges | The Automation People" />
        <meta property="og:description" content="Explore our range of flow meters, pressure transmitters, level indicators, and analytical instruments for precise process manufacturing control." />
        <link rel="canonical" href="https://theautomationpeople.in/products/instruments" />
      </Helmet>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center pt-48 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/circuit_background.png" 
            alt="Instruments Background" 
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
              Process Measurement
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Precision Instruments
            </h1>
            <p className="text-emerald-100 max-w-2xl text-lg opacity-80 uppercase tracking-widest text-sm">
              Accuracy you can trust, data you can act on
            </p>
          </motion.div>
        </div>
      </section>

      <ProductSubNav />

      {/* Main Content */}
      <section className="py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {instrumentItems.map((v, idx) => (
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
                    className="hidden items-center gap-2 text-emerald-600 font-bold text-xs uppercase tracking-widest group/btn"
                  >
                    View technical datasheet
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 uppercase tracking-tighter">Need custom measurement scale?</h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/contact')}
            className="bg-white text-primary-green px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest shadow-2xl transition-all flex items-center gap-2 mx-auto"
          >
            Speak with an Instrument Specialist
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </div>
      </section>
    </div>
  );
}

