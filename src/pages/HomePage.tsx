import { useEffect } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import WorkSection from '../components/WorkSection';
import TeamSection from '../components/TeamSection';
import ClientsSection from '../components/ClientsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

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
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
