"use client";
import Image from 'next/image';
import React from 'react'
import HeroBg from "../../../public/img/hero/herobg.png";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[650px] flex items-center justify-center text-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={HeroBg}
          alt="Wedding Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}
      </div>

      {/* Content */}
      <div data-aos="zoom-in" className="relative z-10 text-white px-6 max-w-[750px]">
        <h1 className="text-3xl md:text-5xl font-bold">
          Find Your Perfect Match, Made For A Lifetime
        </h1>
        <p className="mt-4 text-[1.3rem]">
          Discover meaningful connections rooted in tradition and trust. Whether you’re searching for a bond of love or a union of values, we’re here to make your journey effortless, secure, and joyful.
        </p>

        {/* Email Registration Form */}
        <div className="max-w-[550px] mx-auto mt-6 bg-white py-2 rounded-lg px-3 shadow-lg">
          <div className="flex">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full p-3 text-black outline-none rounded-l-lg"
            />
            <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition">
              Register
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection