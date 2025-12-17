import React from 'react';
import { EducationalHero, ProgramCard, WhyBitcoin , ProgramsSection , OtherBitcoinPrograms , BitcoinVideos , BitcoinResources} from '../components/sections';

const Education = () => {
  return (
    <div className="pt-16">
      <EducationalHero />
      <ProgramCard />
      <WhyBitcoin />
      <ProgramsSection />
      <OtherBitcoinPrograms />
      <BitcoinVideos/>
      <BitcoinResources />
    </div>
  );
};

export default Education;
