import React from 'react';
import Seo from '../components/seo';
import {HeroSection} from '../components/section/HomePageSections/HeroSection';
import ContentSection from '../components/section/HomePageSections/ContentSection';
import GeneratorSection from '../components/section/HomePageSections/GeneratorSection';
import WhySection from '../components/section/HomePageSections/WhySection';
import TrendSection from '../components/section/HomePageSections/TrendSection';
import FAQSection from '../components/section/HomePageSections/FaqSection';


 const Home = () => (

   
       <>
        <HeroSection />
        <ContentSection />
        <GeneratorSection />
        <WhySection />
        <TrendSection />
        <FAQSection />
        </>

    
 )

export default Home
export const Head = () => <Seo title="Home" />
