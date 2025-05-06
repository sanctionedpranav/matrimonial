"use client";
import React from 'react'

import Image from 'next/image';
import Image1 from "../../../public/img/glimpsoflove/Frame 44.webp";
import Image2 from "../../../public/img/glimpsoflove/Frame 45.webp";
import Image3 from "../../../public/img/glimpsoflove/Frame 43.webp";
import Image4 from "../../../public/img/glimpsoflove/Frame 46.webp";
import Image5 from "../../../public/img/glimpsoflove/Frame 48.webp";
import Image6 from "../../../public/img/glimpsoflove/Frame 49.webp";


const LoveMoments = () => {

  return (
    <section className="max-w-6xl mx-auto py-10 px-4">
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-2">A Glimpse of Love in Moments</h2>
      <p className="text-center max-w-4xl mx-auto text-[1.1rem] mb-8 leading-relaxed tracking-wide">
        Explore a collection of beautiful moments shared by couples who found their perfect match. From first meetings to wedding celebrations, let these photos inspire your own journey toward love
      </p>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-4 w-full lg:max-w-6xl mx-auto">
        {/* Left Section */}
        <div className="grid grid-cols-2 gap-4">
          <div data-aos="zoom-in" data-aos-delay="100" className="h-[250px] md:h-[300px] lg:h-[400px]">
            <Image src={Image1} alt="Couple Walking" className="rounded-lg w-full h-full object-cover" />
          </div>

          <div data-aos="zoom-in" data-aos-delay="200" className="h-[250px] md:h-[300px] lg:h-[400px]">
            <Image src={Image2} alt="Wedding Ritual" className="rounded-lg w-full h-full object-cover" />
          </div>

          <div data-aos="zoom-in" data-aos-delay="300" className="col-span-2 ">
            <Image src={Image3} alt="Wedding Ceremony" className="rounded-lg w-full h-full object-cover" />
          </div>
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-2 gap-4">
          <div data-aos="zoom-in" data-aos-delay="400" className="col-span-2 ">
            <Image src={Image4} alt="Couple Holding Hands" className="rounded-lg w-full h-full object-cover" />
          </div>

          <div data-aos="zoom-in" data-aos-delay="500" className="h-[250px] md:h-[300px] lg:h-[400px]">
            <Image src={Image5} alt="Couple Using Laptop" className="rounded-lg w-full h-full object-cover" />
          </div>

          <div data-aos="zoom-in" data-aos-delay="600" className="h-[250px] md:h-[300px] lg:h-[400px]">
            <Image src={Image6} alt="Couple Enjoying Time" className="rounded-lg w-full h-full object-cover" />
          </div>
        </div>
      </div>

    </section>
  )
}

export default LoveMoments