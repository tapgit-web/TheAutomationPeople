import { motion } from 'motion/react';
import { Target, Zap, ChevronRight, Search, Eye, Radio, ShieldCheck, Box } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ProductSubNav from '../../components/layout/ProductSubNav';

export default function SensorsPage() {
  const navigate = useNavigate();

  const sensorItems = [
    {
      id: 's1',
      title: 'Condition Monitoring System / Vibration Sensor',
      desc: 'High-precision vibration sensor for robust condition monitoring.',
      specs: [
        'Voltage: 12V/24V DC or 220V AC',
        'Frequency Range: 10Hz to 1kHz',
        'Sensitivity: 100 mV/g',
        'Measuring Range: 0-50g',
        'Accuracy: ±1%',
        'Operating Temp: -20°C to +80°C',
        'Dimensions: 60mm x 30mm x 25mm',
        'Weight: 150g',
        'Output Signal: 4-20mA / Voltage / Digital'
      ],
      image: '/images/vibration_sensor.png'
    },
    {
      id: 's2',
      title: 'Temperature Sensors',
      desc: 'Reliable temperature measurement for diverse industrial applications.',
      specs: [
        'Type: RTD / Thermocouple / Thermistor / Infrared',
        'Temp Range: -200°C to +1200°C (varies by type)',
        'Accuracy: ±0.1°C to ±2°C',
        'Output Signal: Resistance / Voltage / Current / Digital',
        'Response Time: Fast (milliseconds to seconds)',
        'Operating Env: -40°C to +85°C (std), up to 250°C (spec)',
        'Material: Stainless Steel / Ceramic / Polymer Coating',
        'Probe Length: Customizable (50mm to 1000mm)',
        'Mounting: Threaded / Flange / Clamp / Surface',
        'Communication: Analog / RS485 / Wireless Options',
        'Applications: Industrial, HVAC, Food Processing, Medical, Automotive'
      ],
      image: '/images/temp_sensor.png'
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center pt-48 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/circuit_background.png" 
            alt="Sensors Background" 
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
              Sensing Technology
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Premium Sensors
            </h1>
            <p className="text-emerald-100 max-w-2xl text-lg opacity-80 uppercase tracking-widest text-sm">
              Precision feedback for complex processes
            </p>
          </motion.div>
        </div>
      </section>

      <ProductSubNav />

      {/* Main Content */}
      <section className="py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {sensorItems.map((s, idx) => (
              <motion.div
                key={s.title.split(" ")[0]}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "50px" }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100 flex flex-col group hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  <img 
                    src={s.image} 
                    alt={s.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-primary-green text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest">
                      {s.title.split(" ")[0]}
                    </span>
                  </div>
                </div>
                <div className="p-10 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 uppercase tracking-tight">{s.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-sm mb-6">{s.desc}</p>
                  
                  <div className="space-y-3 mb-8 flex-grow">
                    {s.specs.map((spec, i) => (
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 uppercase tracking-tighter">Need a specific sensor configuration?</h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/contact')}
            className="bg-white text-primary-green px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest shadow-2xl transition-all flex items-center gap-2 mx-auto"
          >
            Consult Our Experts
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </div>
      </section>
    </div>
  );
}

