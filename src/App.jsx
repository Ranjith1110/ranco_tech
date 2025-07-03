import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import AboutPage from './pages/AboutPage';
import Features from './components/Features';
import TechExpertise from './components/TechExpertise';
import Services from './components/Services';
import Projects from './components/Projects';
import Stats from './components/Stats';
import Footer from './components/Footer';
import ServicesPage from './pages/ServicesPage';
import FAQPage from './pages/FaqPage';
import OurTeam from './components/OurTeam';
import FAQ from './components/Faq';
import Testimonial from './components/Testimonial';
import ScrollToTop from './components/ScrollToTop'; // Import ScrollToTop
import OurClients from './components/OurClients';
import WorldMap from './components/WorldMap';
import ContactUs from './components/ContactUs';
import AdBanner from './components/AdBanner';
import FloatingButtons from './components/FloatingButtons';

const App = () => {
  return (
    <Router>
      <Header />
      <ScrollToTop /> {/* Place ScrollToTop here */}
      <AdBanner />
      <div className="pt-20">
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Hero />
                <About />
                <Features/>
                <TechExpertise/>
                <Services />
                <Projects />
                <OurTeam />
                <FAQ />
                <OurClients/>
                <WorldMap />
                <Testimonial />
                {/* <ContactUs/> */}
              </>
            } 
          />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<Services />} />
          <Route path="projects" element={<Projects />} />
          <Route path="team" element={<OurTeam />} />
          <Route path="faq" element={<FAQPage />} />
          <Route path="testimonial" element={<Testimonial />} />
          <Route path="/servicespage" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactUs />} />

        </Routes>
      </div>
      <Footer />
      <FloatingButtons/>
    </Router>
  );
};

export default App;
