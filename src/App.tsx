/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/layout/WhatsAppButton';

const Services = lazy(() => import('./components/sections/Services'));
const Partners = lazy(() => import('./components/sections/Partners'));
const AEOFAQSection = lazy(() => import('./components/sections/AEOFAQSection'));
const Contact = lazy(() => import('./components/sections/Contact'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const SoftwarePage = lazy(() => import('./pages/SoftwarePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const SensorsPage = lazy(() => import('./pages/products/SensorsPage'));
const ValvesPage = lazy(() => import('./pages/products/ValvesPage'));
const AutomationProductsPage = lazy(() => import('./pages/products/AutomationProductsPage'));
const InstrumentsPage = lazy(() => import('./pages/products/InstrumentsPage'));
const IOTPage = lazy(() => import('./pages/products/IOTPage'));
const CustomizedMachinePage = lazy(() => import('./pages/products/CustomizedMachinePage'));

const HomePage = () => (
  <>
    <Hero />
    <Services />
    <Partners />
    <AEOFAQSection />
  </>
);

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Helmet>
          <title>The Automation People | Smart Industrial Solutions</title>
          <meta name="description" content="The Automation People provides advanced industrial automation, process control, valves, sensors, SCADA software, and IoT solutions to optimize your manufacturing and business operations." />
          <meta name="keywords" content="Industrial Automation, Process Control, IoT, Manufacturing efficiency, Valves, Sensors, Flow Instruments, Analytical Instruments, SCADA, PLC, Smart Control Solutions, Madurai, Automation experts" />
          <meta name="geo.region" content="IN-TN" />
          <meta name="geo.placename" content="Madurai, Tamil Nadu, India" />
          <meta name="geo.position" content="9.937879;78.127016" />
          <meta name="ICBM" content="9.937879, 78.127016" />
          <meta property="og:site_name" content="The Automation People" />
          <meta property="og:title" content="The Automation People | Smart Industrial Solutions" />
          <meta property="og:description" content="Optimizing industrial operations with smart automation and IoT solutions." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://theautomationpeople.in/" />
          <meta property="og:image" content="https://theautomationpeople.in/logo512.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="The Automation People | Smart Industrial Solutions" />
          <meta name="twitter:description" content="Optimizing industrial operations with smart automation and IoT solutions." />
          <meta name="twitter:image" content="https://theautomationpeople.in/logo512.png" />
          <link rel="canonical" href="https://theautomationpeople.in/" />
        </Helmet>

        <Header />

        <main>
          <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
              <div className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          }>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/software" element={<SoftwarePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/products/sensors" element={<SensorsPage />} />
              <Route path="/products/valves" element={<ValvesPage />} />
              <Route path="/products/automation" element={<AutomationProductsPage />} />
              <Route path="/products/instruments" element={<InstrumentsPage />} />
              <Route path="/products/iot" element={<IOTPage />} />
              <Route path="/products/customized-machine" element={<CustomizedMachinePage />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}
