"use client";
import Image from 'next/image';
import React from 'react'
import RegistrationBG from "../../../public/img/registration/registration bs.png";

const FindMatchRegistration = () => {
  return (
    <section className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center text-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={RegistrationBG} // Replace with your actual image path
          alt="Wedding Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-black bg-opacity-75"></div> {/* Overlay */}
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 text-white">
        <h2 data-aos="zoom-in" data-aos-delay="100" className="text-3xl md:text-5xl font-bold leading-tight">
          Find Your Perfect Match, Made For <br className="hidden md:block" /> A Lifetime
        </h2>
        <p data-aos="zoom-in" data-aos-delay="150" className="mt-4 max-w-2xl mx-auto text-[1.1rem]">
          Discover meaningful connections rooted in tradition and trust. Whether you’re searching for a bond of love or a union of values, we’re here to make your journey effortless, secure, and joyful.
        </p>

        {/* Buttons */}
        <div data-aos="zoom-in" data-aos-delay="200" className="mt-6 flex flex-col md:flex-row gap-4 justify-center">
          <button className="bg-red-600 text-white px-6 py-3 text-sm md:text-base rounded-lg font-semibold hover:bg-red-700 transition">
            Register Now
          </button>
          <button className="border border-[#f7b32b] text-[#f7b32b] px-6 py-3 text-sm md:text-base rounded-lg font-semibold hover:bg-[#f7b32b] hover:text-black transition">
            Help and Support
          </button>
        </div>
      </div>
    </section>
  )
}

export default FindMatchRegistration