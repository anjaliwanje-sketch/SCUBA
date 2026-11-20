import React from 'react';
import { Hero } from '../components/home/Hero';
import { BrandIntro } from '../components/home/BrandIntro';
import { ServicesCarousel } from '../components/home/ServicesCarousel';
import { WhyScuba } from '../components/home/WhyScuba';
import { ProcessTimeline } from '../components/home/ProcessTimeline';
import { SelectedWork } from '../components/home/SelectedWork';
import { FaqAccordion } from '../components/home/FaqAccordion';
import { CtaBanner } from '../components/home/CtaBanner';

export const HomePage: React.FC = () => {
  return (
    <main id="main-content" className="w-full">
      <Hero />
      <BrandIntro />
      <ServicesCarousel />
      <WhyScuba />
      <ProcessTimeline />
      <SelectedWork />
      <FaqAccordion />
      <CtaBanner />
    </main>
  );
};
