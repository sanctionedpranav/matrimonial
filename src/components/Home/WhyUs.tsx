/* eslint-disable react/jsx-no-undef */
"use client";
import React from 'react'
import Image1 from "../../../public/img/whyus/image1.png";
import Image2 from "../../../public/img/whyus/image2.png";
import Image3 from "../../../public/img/whyus/image3.png";
import Image from 'next/image';


const WhyUs = () => {

  return (
    <section className="max-w-6xl mx-auto px-4 py-8 md:py-12">
      {/* Heading */}
      <div className="text-center md:mb-10 mb-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">Why We&apos;re The Perfect Choice</h2>
        <p className="text-gray-600 text-[1.1rem] max-w-2xl mx-auto mt-2">
          We go the extra mile to make your journey special. With dedicated support for every member, expert wedding
          planning services, and thoroughly verified profiles.
        </p>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Column - Full Height Card */}
        <div data-aos="fade-right" data-aos-delay="100" className="row-span-2 row-span-2 bg-white shadow-md rounded-lg p-6 border border-gray-200 flex flex-col h-full">
          <h3 className="text-xl font-bold">Personalized Support for Every Member</h3>
          <p className="text-[1.1rem] mt-2 leading-relaxed py-3">
            We believe every journey is unique, so we offer one-on-one assistance to guide you through every step of the process.
            Our dedicated staff is here to ensure you have the best experience possible.
          </p>
          <div className="mt-4 flex-grow">
            <Image src={Image1} alt="Support" className="rounded-lg w-full h-full object-cover" />
          </div>
        </div>

        {/* Right Column - Two Stacked Cards with Equal Height */}
        {/* Top Card */}
        <div data-aos="fade-up" data-aos-delay="100" className="bg-white shadow-md rounded-lg p-6 border border-gray-200 flex flex-col">
          <h3 className="text-xl font-bold">Expert Wedding Planning Assistance</h3>
          <p className="text-[1.1rem] mt-2 leading-relaxed py-3">
            From engagement to your special day, our wedding planners help you organize and execute every detail, ensuring
            that your celebrations are flawless and memorable.
          </p>
          <div className="mt-4 flex-grow">
            <Image src={Image2} alt="Wedding Planning" className="rounded-lg w-full h-full object-cover" />
          </div>
        </div>

        {/* Bottom Card */}
        <div data-aos="fade-up" data-aos-delay="150" className="bg-white shadow-md rounded-lg p-6 border border-gray-200 flex flex-col">
          <h3 className="text-xl font-bold">Verified and Authentic Profiles</h3>
          <p className="text-[1.1rem] mt-2 leading-relaxed py-3">
            We take profile verification seriously to ensure you&apos;re connecting with genuine individuals. Our extensive
            verification process ensures peace of mind for all members.
          </p>
          <div className="mt-4 flex-grow">
            <Image src={Image3} alt="Verified Profiles" className="rounded-lg w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs