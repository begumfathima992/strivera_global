import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';

const Services = lazy(() => import('./pages/Services.jsx'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail.jsx'));
const RestaurantSolutions = lazy(() => import('./pages/RestaurantSolutions.jsx'));
const Work = lazy(() => import('./pages/Work.jsx'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail.jsx'));
const Industries = lazy(() => import('./pages/Industries.jsx'));
const Technologies = lazy(() => import('./pages/Technologies.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const Pricing = lazy(() => import('./pages/Pricing.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy.jsx'));
const CookiePolicy = lazy(() => import('./pages/CookiePolicy.jsx'));
const NotFound = lazy(() => import('./pages/NotFound.jsx'));

export default function App() {
  return (
    <Layout>
      <Suspense fallback={<div style={{ minHeight: '100vh' }} aria-busy="true" />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/restaurant-solutions" element={<RestaurantSolutions />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:slug" element={<ProjectDetail />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
