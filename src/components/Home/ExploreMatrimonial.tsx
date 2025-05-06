"use client";
import React, { useState } from 'react'
import { Tab } from "@headlessui/react";

const ExploreMatrimonial = () => {
  const [selectedIndex, setSelectedIndex] = useState(0); // Track selected button

  const categories = [
    { name: "Religion", options: ["Hindu", "Muslim", "Christianity", "Buddist", "Inter-religion", "Sikh", "Jain"] },
    { name: "Caste", options: ["Brahmin", "Rajput", "Maratha", "Jat", "Kayastha"] },
    { name: "City", options: ["Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata"] },
    { name: "State", options: ["Maharashtra", "Tamil Nadu", "Punjab", "Rajasthan"] },
    { name: "Country", options: ["India", "USA", "UK", "Canada", "Australia"] },
    { name: "Occupation", options: ["Doctor", "Engineer", "Lawyer", "Teacher", "Business"] },
  ];

  return (
    <div className="bg-red-700 py-12 text-white text-center">
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-2">Explore matrimonial profiles by</h2>

      {/* Tab Group */}
      <Tab.Group>
        <div className="overflow-x-auto scrollbar-hide">
          <Tab.List className="flex justify-start md:justify-center gap-8 mt-4 text-lg px-4 min-w-max">
            {categories.map((category, index) => (
              <Tab key={index} className="relative pt-1 outline-none">
                {({ selected }) => (
                  <span className={`cursor-pointer flex flex-col items-center ${selected ? "font-semibold" : "opacity-75"}`}>
                    {selected && <span className="absolute top-0 left-0 w-full h-1 bg-[#f7b32b]"></span>}
                    {category.name}
                  </span>
                )}
              </Tab>
            ))}
          </Tab.List>
        </div>


        {/* Tab Panels */}
        <Tab.Panels className="mt-6">
          {categories.map((category, index) => {

            return (
              <Tab.Panel key={index} className="flex flex-wrap justify-center gap-4 px-10">
                {category.options.map((option, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedIndex(i)} // Set selected index on click
                    className={`px-5 py-2 rounded-lg text-sm font-medium transition ${selectedIndex === i
                      ? "bg-[#f7b32b] text-black"
                      : "border border-white hover:bg-[#f7b32b] hover:text-black"
                      }`}
                  >
                    {option}
                  </button>
                ))}
              </Tab.Panel>
            );
          })}
        </Tab.Panels>
      </Tab.Group>
      <button className="px-5 py-2 mt-5 rounded-lg border border-[#f7b32b] text-[#f7b32b] hover:bg-[#f7b32b] hover:text-black transition">
        View More
      </button>
    </div>
  )
}

export default ExploreMatrimonial