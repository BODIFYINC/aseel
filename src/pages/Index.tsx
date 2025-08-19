
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import StatsSection from '@/components/StatsSection';
import DoctorsSection from '@/components/DoctorsSection';
import SpecialOffersSection from '@/components/SpecialOffersSection';
import GallerySection from '@/components/GallerySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import NewsSection from '@/components/NewsSection';
import WorkingHoursSection from '@/components/WorkingHoursSection';
import LocationSection from '@/components/LocationSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <StatsSection />
      <DoctorsSection />
      <SpecialOffersSection />
      <GallerySection />
      <TestimonialsSection />
      <NewsSection />
      <WorkingHoursSection />
      <LocationSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
