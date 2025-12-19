import { useEffect } from 'react';
import Header from '../components/layout/Header';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import ServicesSection from '../components/sections/ServicesSection';
import WorkSection from '../components/sections/WorkSection';
import TeamSection from '../components/sections/TeamSection';
import ClientsSection from '../components/sections/ClientsSection';
import OfficeLocationsSection from '../components/sections/OfficeLocationsSection';
import ContactSection from '../components/sections/ContactSection';
import Footer from '../components/layout/Footer';

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WorkSection />
        <TeamSection />
        <ClientsSection />
        <OfficeLocationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
