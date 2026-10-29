import React from 'react';
import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero/Hero';
import CompanyIntro from '@/components/sections/CompanyIntro/CompanyIntro';
import ServicesOverview from '@/components/sections/ServicesOverview/ServicesOverview';
import ProjectsSection from '@/components/sections/ProjectsSection/ProjectsSection';
import WhyChooseUs from '@/components/sections/WhyChooseUs/WhyChooseUs';
import HowWeWork from '@/components/sections/HowWeWork/HowWeWork';
import PartnershipSection from '@/components/sections/PartnershipSection/PartnershipSection';
import Industries from '@/components/sections/Industries/Industries';
import CTASection from '@/components/common/CTASection/CTASection';
import HomeContactSection from '@/components/sections/HomeContactSection/HomeContactSection';
import GlobalOffices from '@/components/sections/GlobalOffices/GlobalOffices';

export const metadata: Metadata = {
  title: 'Grace Technologies | Technology That Moves Business Forward',
  description:
    'Grace Technologies is a premier UK technology and business services consultancy strategically partnered with Ank Square Private Limited (India) to engineer scalable web architectures, merchant account operations, AI automation, and digital growth.',
};

export default function HomePage() {
  return (
    <>
      {/* SECTION 1 – CINEMATIC HERO */}
      <Hero />

      {/* SECTION 2 – COMPANY INTRODUCTION */}
      <CompanyIntro />

      {/* SECTION 3 – SERVICES OVERVIEW */}
      <ServicesOverview />

      {/* SECTION 4 – FEATURED PROJECTS & CASE STUDIES */}
      <ProjectsSection />

      {/* SECTION 5 – WHY GRACE TECHNOLOGIES */}
      <WhyChooseUs />

      {/* SECTION 6 – HOW WE WORK */}
      <HowWeWork />

      {/* SECTION 7 – UK–INDIA PARTNERSHIP */}
      <PartnershipSection />

      {/* SECTION 8 – INDUSTRIES WE SUPPORT */}
      <Industries />

      {/* SECTION 9 – FINAL CTA */}
      <CTASection
        title="Your Next Move Starts With a Conversation."
        description="Let's discuss your ideas, challenges and opportunities. Together, we can build something meaningful."
        primaryCtaText="Start a Conversation"
        primaryCtaHref="#contact-section"
        secondaryCtaText="Explore Capabilities"
        secondaryCtaHref="/services"
      />

      {/* SECTION 10 – CONTACT SECTION */}
      <HomeContactSection />

      {/* SECTION 11 – BILATERAL ADDRESS & INTERACTIVE COORDINATE GLOBE */}
      <GlobalOffices />
    </>
  );
}
