"use client";
import Link from 'next/link';
import React from 'react'
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-[#c90413] text-white pt-16 pb-10">
      <div className="px-6">
        {/* Grid Layout */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-[#f8e0e2]">
          {/* Column 1 - Branding */}
          <div>
            <h2 className="text-[1.8rem] font-bold">Matrimonial</h2>
            <p className="mt-4 text-[1.1rem]">
              Discover meaningful connections rooted in tradition and trust. Whether you’re searching for a bond of love or a union of values.
            </p>
          </div>

          {/* Column 2 - Navigation */}
          <div>
            <h3 className="text-2xl font-semibold">Navigation</h3>
            <ul className="mt-4 space-y-2 text-[1.2rem]">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Career</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Column 3 - Support */}
          <div>
            <h3 className="text-2xl font-semibold">Support</h3>
            <ul className="mt-4 space-y-2 text-[1.2rem]">
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Terms of Service</a></li>
              <li><a href="#" className="hover:underline">FAQs</a></li>
              <li><a href="#" className="hover:underline">Customer Support</a></li>
            </ul>
          </div>

          {/* Column 4 - Subscribe & Socials */}
          <div>
            <h3 className="text-xl font-semibold">Latest Updates</h3>
            <div className="mt-3 flex bg-red-600 p-2 rounded-lg w-full">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 p-2 text-gray-900 bg-transparent focus:outline-none placeholder-gray-300 w-full"
              />
              <button className="bg-[#f7b32b] text-black px-4 py-2 rounded-lg font-semibold">
                Subscribe
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="bg-[#f7b32b] p-2 rounded-full text-black hover:bg-yellow-400">
                <FiFacebook />
              </a>
              <a href="#" className="bg-[#f7b32b] p-2 rounded-full text-black hover:bg-yellow-400">
                <FiInstagram />
              </a>
              <a href="#" className="bg-[#f7b32b] p-2 rounded-full text-black hover:bg-yellow-400">
                <FiTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Copyright */}
        <div className="border-t border-gray-400 mt-8 pt-4 text-center text-gray-300">
          Copyright © Matrimonial 2025 | Product of <Link className='hover:underline' href="https://jithvar.com/" target='_blank'>Jithvar Consultancy Services</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer