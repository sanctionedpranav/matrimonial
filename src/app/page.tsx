"use client";
import React, { useEffect } from 'react'

import AOS from "aos";
import "aos/dist/aos.css"

import AboutSection from "@/components/Home/AboutSection";
import BlogPostSection from "@/components/Home/BlogPostSection";
import ExploreMatrimonial from "@/components/Home/ExploreMatrimonial";
import FAQSection from "@/components/Home/FAQSection";
import FindMatchRegistration from "@/components/Home/FindMatchRegistration";
import FindPartner from "@/components/Home/FindPartner";
import HeroSection from "@/components/Home/HeroSection";
import HowItWorks from "@/components/Home/HowItWorks";
import LoveMoments from "@/components/Home/LoveMoments";
import Testimony from "@/components/Home/Testimony";
import WhyUs from "@/components/Home/WhyUs";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <HeroSection />
      <FindPartner />
      <AboutSection />
      <LoveMoments />
      <HowItWorks />
      <WhyUs />
      <Testimony />
      <FAQSection />
      <ExploreMatrimonial />
      <BlogPostSection />
      <FindMatchRegistration />
    </>
  );
}
