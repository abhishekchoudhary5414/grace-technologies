import React from 'react';
import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero/Hero';
import CompanyIntro from '@/components/sections/CompanyIntro/CompanyIntro';
import ServicesOverview from '@/components/sections/ServicesOverview/ServicesOverview';
import WhyChooseUs from '@/components/sections/WhyChooseUs/WhyChooseUs';
import HowWeWork from '@/components/sections/HowWeWork/HowWeWork';
import PartnershipSection from '@/components/sections/PartnershipSection/PartnershipSection';
import Industries from '@/components/sections/Industries/Industries';
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

      {/* SECTION 4 – WHY GRACE TECHNOLOGIES */}
      <WhyChooseUs />

      {/* SECTION 5 – HOW WE WORK */}
      <HowWeWork />

      {/* SECTION 6 – UK–INDIA PARTNERSHIP */}
      <PartnershipSection />

      {/* SECTION 7 – INDUSTRIES WE SUPPORT */}
      <Industries />

      {/* SECTION 8 – CONTACT SECTION */}
      <HomeContactSection />

      {/* SECTION 10 – BILATERAL ADDRESS & INTERACTIVE COORDINATE GLOBE */}
      <GlobalOffices />
    </>
  );
}
