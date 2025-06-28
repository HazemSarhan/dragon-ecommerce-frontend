import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CompanyLogos from '@/components/CompanyLogos';
import CategoriesSection from '@/components/CategoriesSection';
import ImagesSection from '@/components/ImagesSection';
import BestSellingSection from '@/components/BestSellingSection';
import FeaturesSection from '@/components/FeaturesSection';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <CompanyLogos />
      <CategoriesSection />
      <ImagesSection />
      <BestSellingSection />
      <FeaturesSection />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default HomePage;
