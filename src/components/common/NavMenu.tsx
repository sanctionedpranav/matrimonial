"use client";
import Link from 'next/link';
import React from 'react'
import { FiSearch, FiFacebook, FiInstagram } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";
import { LuMail } from "react-icons/lu";
import { VscTarget } from "react-icons/vsc";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { CiTwitter } from "react-icons/ci";


const NavMenu = () => {
  const menuItem = [
    {
      itemName: "search",
      icon: <FiSearch />,
      link: "/search"
    },
    {
      itemName: "about",
      link: "/about"
    },
    {
      itemName: "faqs",
      link: "/faqs"
    }, {
      itemName: "contact",
      link: "/contact"
    },
  ]

  return (
    <nav className="bg-[#c90413] text-white">
      <div className="hidden container mx-auto md:flex justify-between items-center px-4">
        {/* Left Side */}
        <div className="flex items-center gap-5">

          {
            menuItem?.map((menu, idx) => {
              return (
                <Link key={idx} href={menu?.link} className="hover:opacity-75 text-[14px] hover:underline uppercase">{menu?.icon ? menu?.icon : menu?.itemName}</Link>
              )
            })
          }
        </div>

        {/* Right Side */}
        <div className="flex items-center  text-[13px]">
          <div className='flex items-center gap-2 border-r border-[#db5963] py-3 px-4'>
            <span><BsTelephone className='text[20px]' /> </span>
            <span>+91 9260 3181 61</span>
          </div>
          <div className='flex items-center gap-2 border-r border-[#db5963] py-3 px-4'>
            <span><LuMail className='text[20px]' /></span>
            <span>SUPPORT@GMAIL.COM</span>
          </div>

          <div className="flex items-center text-[1.2rem]">
            <Link href="#" className="hover:opacity-75 border-r border-[#db5963] py-3 px-2"><FiFacebook /></Link>
            <Link href="#" className="hover:opacity-75 border-r border-[#db5963] py-3 px-2"><FiInstagram /></Link>
            <Link href="#" className="hover:opacity-75  py-3 px-2"><CiTwitter /></Link>
          </div>
        </div>
      </div>

      {/* Secondary Navbar */}
      <div className="bg-[#f7b32b] py-3">
        <div className="container mx-auto flex justify-between items-center px-4">
          <Link href="/" className='flex items-center gap-2 text-[2.2rem]'>
            <span><VscTarget /></span>
            <button>Logo</button>
          </Link>
          <div className='flex items-center lg:gap-3 lg:text-[1.3rem]'>
            <Link href="/login" className="bg-[#c90413] text-[#fff] hover:bg-[#c90413] px-6 py-1 rounded-lg">Login</Link>
            <Link href="/help" className="flex items-center gap-2 text-white px-2 md:px-4 py-1 rounded-md">
              <span className='text-[1.5rem]'><IoIosHelpCircleOutline /></span>
              <span>Help</span>
            </Link>
          </div>

        </div>
      </div>
    </nav>
  )
}

export default NavMenu