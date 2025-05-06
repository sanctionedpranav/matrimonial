"use client";

import React from 'react'
import Image from 'next/image';
import Image1 from "../../../public/img/howItWorks/Frame 31.webp";
import Image2 from "../../../public/img/howItWorks/Frame 31 (1).webp";
import Image3 from "../../../public/img/howItWorks/Frame 31 (2).webp";
import Image4 from "../../../public/img/howItWorks/Frame 31 (3).webp";

const HowItWorks = () => {
  const stepsToRegister = [
    {
      step: "Step 1: Create Your Profile",
      desc: "Sign up and tell us about yourself – your preferences, interests, and what you’re looking for in a partner.",
      image: Image1, // Correctly imported image
    },
    {
      step: "Step 2: Discover Matches",
      desc: "Browse through tailored profiles based on your preferences, or let our smart algorithm find the best matches for you.",
      image: Image2,
    },
    {
      step: "Step 3: Connect and Communicate",
      desc: "Engage in meaningful conversations and get to know your potential matches better.",
      image: Image3,
    },
    {
      step: "Step 4: Take the Next Step",
      desc: "When you find the right person, take the next step towards a beautiful journey together.",
      image: Image4,
    },
  ];

  return (
    <section className=" py-8 md:py-12 px-4 bg-[#c90413] text-white text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-3">How It Works</h2>
      <p className="max-w-4xl mx-auto text-white text-[1.1rem] mb-8 leading-relaxed tracking-wide">
        We’ve made the process simple and seamless. Follow these steps to connect with like-minded individuals and discover your perfect match.
      </p>

      {/* Steps Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {
          stepsToRegister?.map((element, idx) => {
            return (
              <div data-aos={idx % 2 ? "fade-up" : "fade-up"} data-aos-delay={idx * 150} key={idx} className="border-8 border-[#e57b4a] rounded-2xl h-full bg-[#f7b32b] text-[#262626] text-start p-6 rounded-lg shadow-lg">
                <h3 className="font-bold text-xl mb-2">{element?.step}</h3>
                <p className="text-[1.1rem]">
                  {element?.desc}
                </p>
                <Image src={element?.image} className="mt-4 rounded-md shadow-md" alt="Profile Setup" />
              </div>
            )
          })
        }


      </div>
    </section>
  )
}

export default HowItWorks