"use client";

import React, { useRef } from "react";
import Slider from "react-slick";
import Image, { StaticImageData } from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LuQuote } from "react-icons/lu";
import { IoStarSharp } from "react-icons/io5";
import { LiaLongArrowAltRightSolid, LiaLongArrowAltLeftSolid } from "react-icons/lia";// Custom arrow icons
import Profile from "../../../public/img/testimony/profile.png";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  message: string;
  image: StaticImageData;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Aarti S.",
    role: "Member",
    message:
      "I never thought I would find someone so compatible, but this platform made it happen. The personalized support and authentic profiles gave me the confidence to take the leap, and I’m so grateful for the guidance I received throughout the process",
    image: Profile,
    rating: 5,
  },
  {
    id: 2,
    name: "Rahul K.",
    role: "Member",
    message:
      "I never thought I would find someone so compatible, but this platform made it happen. The personalized support and authentic profiles gave me the confidence to take the leap, and I’m so grateful for the guidance I received throughout the process",
    image: Profile,
    rating: 4,
  },
  {
    id: 3,
    name: "Priya M.",
    role: "Member",
    message:
      "I never thought I would find someone so compatible, but this platform made it happen. The personalized support and authentic profiles gave me the confidence to take the leap, and I’m so grateful for the guidance I received throughout the process",
    image: Profile,
    rating: 5,
  },
];

const Testimony: React.FC = () => {
  const sliderRef = useRef<Slider>(null); // Ref for slider

  const settings = {
    centerMode: true,
    centerPadding: "100px",
    slidesToShow: 1,
    arrows: false, // Hide default arrows
    infinite: true,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: "10px",
        },
      },
    ],
  };

  return (
    <div className="pt-6 pb-20 bg-[#c90413]">
      <div className="text-center max-w-6xl mx-auto text-white py-6 px-4">
        <h2 className="text-2xl md:text-3xl font-bold py-2">What Our Members Say</h2>
        <p className="max-w-3xl mx-auto mt-2 mb-4 text-[1.1rem]">
          Our members’ stories speak for themselves. From successful matches to unforgettable weddings, we’re proud to have been part of their journeys. Here’s what they have to say about their experience with us.
        </p>

        {/* Testimonial Slider */}
        <div className="relative">
          <Slider ref={sliderRef} {...settings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="p-2 md:p-6">
                <div className="flex flex-col gap-3 bg-white text-black text-start p-6 rounded-lg shadow-md relative transition-all duration-300 
                  border-t-4 border-transparent slick-center:border-red-500">
                  <p className="text-4xl text-red-600 font-bold"><LuQuote /></p>
                  <p className="text-[1.1rem] leading-relaxed tracking-wider font-medium py-5">{testimonial.message}</p>
                  <div className="flex items-center gap-4 mt-2">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={50}
                      height={50}
                      className="w-12 h-12 rounded-full border-2 border-[#000]"
                    />
                    <div>
                      <p className="font-medium text-[1.2rem]">{testimonial.name}</p>
                      <p className="text-gray-500 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex justify-end mt-3 text-yellow-400 pr-4">
                    {Array.from({ length: testimonial.rating }, (_, i) => (
                      <span key={i} className="text-[1.4rem]"><IoStarSharp /></span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          {/* Custom Navigation Arrows */}
          <div className="absolute inset-x-0 bottom-[-70px] flex justify-center gap-6">
            <button
              onClick={() => sliderRef.current?.slickPrev()}
              className="w-12 h-12 flex items-center justify-center border text-[#fff] rounded-full shadow-md hover:bg-[#fbbf24] transition p-2"
            >
              <LiaLongArrowAltLeftSolid size={24} />
            </button>
            <button
              onClick={() => sliderRef.current?.slickNext()}
              className="w-12 h-12 flex items-center justify-center border text-white rounded-full shadow-md hover:bg-yellow-500 transition p-2"
            >
              <LiaLongArrowAltRightSolid size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimony;
