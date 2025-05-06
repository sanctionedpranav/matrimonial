"use client";
import React from 'react'
import Image1 from "../../../public/img/about/image1.webp";
import Image2 from "../../../public/img/about/image2.webp";
import Image3 from "../../../public/img/about/image3.webp";
import Image from 'next/image';
import { BsTelephone } from "react-icons/bs";
import { PiHeadset } from "react-icons/pi";


const AboutSection = () => {
  return (
    <section className="pt-8 pb-0 md:pb-2 px-4 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-10 items-center">
        {/* Text Content */}
        <div data-aos="fade-right" data-aos-delay="200">
          <h2 className="text-2xl md:text-[1.7rem] font-bold mb-4">
            About Us:
            <br />
            <span className='text-[1.5rem]'> Connecting Hearts, Building Futures</span>
          </h2>
          <p className="text-[1.2rem] text-gray-700 text-justify md:text-start">
            At H-matrimony, we believe that finding a life partner is one of the most meaningful journeys in life. Rooted in tradition yet embracing modern values, our platform is dedicated to helping individuals discover love, trust, and compatibility. With a focus on authenticity, security, and personalization, we’ve created a space where meaningful connections thrive. Whether you’re seeking a partner who shares your cultural values or someone who complements your dreams, we’re here to guide you every step of the way.
          </p>

          {/* Support Info */}
          <div className="mt-6 flex flex-col md:flex-row gap-8 my-2">
            <div className='flex items-center gap-4'>
              <div className='border-8 border-[#ffecc7] rounded-full'>
                <span className='w-12 h-12 bg-[#f7b32b] flex items-center justify-center rounded-full'>
                  <BsTelephone className='text-[1.8rem] text-[#fff]' />
                </span>
              </div>
              <div>
                <p className="text-[1.1rem] text-gray-600"> Enquiry</p>
                <p className="text-[1.1rem] font-semibold">Support@gmail.com</p>
              </div>
            </div>
            <div className='flex items-center gap-4'>
              <div className='border-8 border-[#ffecc7] rounded-full'>
                <span className='w-12 h-12 bg-[#f7b32b] flex items-center justify-center rounded-full'>
                  <PiHeadset className='text-[1.8rem] text-[#fff]' />
                </span>
              </div>
              <div>
                <p className="text-[1.1rem] text-gray-600">Help & Support</p>
                <p className="text-[1.1rem] font-semibold">Support@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Images */}
        <div className="grid grid-cols-[1.5fr_1fr] gap-4 w-full lg:max-w-4xl mx-auto">
          {/* Large left image */}
          <div data-aos="fade-up" data-aos-delay="100" className="row-span-2">
            <Image
              src={Image1}
              alt="Couple Main"
              className="rounded-lg shadow-md w-full h-full object-cover"
            />
          </div>

          {/* Top right image */}
          <div data-aos="fade-up" data-aos-delay="200">
            <Image
              src={Image3}
              alt="Couple 1"
              className="rounded-lg shadow-md w-full h-full object-cover"
            />
          </div>

          {/* Bottom right image */}
          <div data-aos="fade-up" data-aos-delay="300">
            <Image
              src={Image2}
              alt="Couple 2"
              className="rounded-lg shadow-md w-full h-full object-cover"
            />
          </div>
        </div>


      </div>

      {/* Statistics */}
      <div className="mt-8 border-y-2 py-6">
        <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-2 text-center '>
          <div className='flex items-center gap-4'>
            <div className='border-8 border-[#ffc7c7] rounded-full'>
              <span className='w-12 h-12 bg-[#c90413] flex items-center justify-center rounded-full'>
                <PiHeadset className='text-[1.8rem] text-[#fff]' />
              </span>
            </div>
            <div className='text-start'>
              <p className="text-[1.1rem] text-gray-600">Matched Couple</p>
              <p className="text-[1.1rem] font-semibold">1000+</p>
            </div>
          </div>
          <div className='flex items-center gap-4 lg:border-s-2 lg:pl-2'>
            <div className='border-8 border-[#ffc7c7] rounded-full'>
              <span className='w-12 h-12 bg-[#c90413] flex items-center justify-center rounded-full'>
                <PiHeadset className='text-[1.8rem] text-[#fff]' />
              </span>
            </div>
            <div className='text-start'>
              <p className="text-[1.1rem] text-gray-600">Registered men</p>
              <p className="text-[1.1rem] font-semibold">300+</p>
            </div>
          </div>
          <div className='flex items-center gap-4 lg:border-s-2 lg:pl-2'>
            <div className='border-8 border-[#ffc7c7] rounded-full'>
              <span className='w-12 h-12 bg-[#c90413] flex items-center justify-center rounded-full'>
                <PiHeadset className='text-[1.8rem] text-[#fff]' />
              </span>
            </div>
            <div className='text-start'>
              <p className="text-[1.1rem] text-gray-600">Registered women</p>
              <p className="text-[1.1rem] font-semibold">300+</p>
            </div>
          </div>
          <div className='flex items-center gap-4 lg:border-s-2 lg:pl-2'>
            <div className='border-8 border-[#ffc7c7] rounded-full'>
              <span className='w-12 h-12 bg-[#c90413] flex items-center justify-center rounded-full'>
                <PiHeadset className='text-[1.8rem] text-[#fff]' />
              </span>
            </div>
            <div className='text-start'>
              <p className="text-[1.1rem] text-gray-600">Total Registered</p>
              <p className="text-[1.1rem] font-semibold">4000+</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection