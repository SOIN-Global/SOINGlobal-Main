"use client"
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '@/assets/logos/soin-logo.png';
import ThemeToggleButton from './ThemeToggleButton';


const Navbar = () => {
  const [isMenu, setIsMenu] = useState(false);


  useEffect(() => {
    if (isMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenu]);


  return (
    <nav className=' relative z-10'>
      <nav className="w-full transition-transform duration-300 mt-3 md:mt-6 max-w-6xl m-auto rounded-2xl md:bg-[#C6EFEF] dark:md:bg-[#152030] border-[#ffffff73] text-black dark:text-white md:border px-4">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex justify-between items-center h-16">
            <div className="">
              <Link href="/" className="text-2xl flex items-center gap-2">
                <Image src={logo} alt='logo' height={34} width={34} quality={100} />
                <span className='text-[#1E233F] dark:text-white font-outfit'><strong className='font-medium'>SOIN</strong> Global</span>
              </Link>
            </div>

            <div className="flex items-center gap-2 md:gap-6">
              <div className="hidden lg:flex space-x-8 nav-links transition-transform duration-300">
                <Link href="/" className='hover:text-transparent hover:bg-clip-text hover:bg-[linear-gradient(90deg,_#4EA9A9_0%,_#4EA9A9_19%,_#A1920E_43%,_#A1920E_63%,_#5B4A9A_82%,_#5B4A9A_100%)] transition-all duration-300'>Home</Link>
                <Link href="#services" className='hover:text-transparent hover:bg-clip-text hover:bg-[linear-gradient(90deg,_#4EA9A9_0%,_#4EA9A9_19%,_#A1920E_43%,_#A1920E_63%,_#5B4A9A_82%,_#5B4A9A_100%)] transition-all duration-300'>Services</Link>
                <Link href="#Roadmap" className='hover:text-transparent hover:bg-clip-text hover:bg-[linear-gradient(90deg,_#4EA9A9_0%,_#4EA9A9_19%,_#A1920E_43%,_#A1920E_63%,_#5B4A9A_82%,_#5B4A9A_100%)] transition-all duration-300'>Roadmap</Link>
                <Link href="/about" className='hover:text-transparent hover:bg-clip-text hover:bg-[linear-gradient(90deg,_#4EA9A9_0%,_#4EA9A9_19%,_#A1920E_43%,_#A1920E_63%,_#5B4A9A_82%,_#5B4A9A_100%)] transition-all duration-300'>About</Link>
                <Link href="#doc" className='hover:text-transparent hover:bg-clip-text hover:bg-[linear-gradient(90deg,_#4EA9A9_0%,_#4EA9A9_19%,_#A1920E_43%,_#A1920E_63%,_#5B4A9A_82%,_#5B4A9A_100%)] transition-all duration-300'>Doc</Link>
              </div>
              <div className="hidden lg:flex space-x-8">
                <div className='relative p-[1px] flex rounded-xl bg-gradient-to-r from-[#CFBEFF] via-[#00F2EACC] to-[#ACF7AC]'>
                  <div className="px-4 py-2 bg-[#C6EFEF] dark:bg-[#152030] rounded-xl">
                    DApp
                  </div>
                </div>
                <Link
                  href=""
                  className="px-4 py-2 text-white dark:text-black font-light rounded-lg cursor-pointer transition-all duration-300 shadow-[0_0_5px_rgba(127,255,212,0.8)] hover:shadow-[0_0_8px_rgba(127,255,212,1)] bg-[#48A3A4] dark:bg-[linear-gradient(131deg,_#98faff,_#9bf5fb,_#6fe7db)]"
                >
                  Sign up for Free
                </Link>
              </div>
              <ThemeToggleButton />
              <div onClick={() => setIsMenu(!isMenu)} className="lg:hidden text-black dark:text-white/80 cursor-pointer">
                <Menu />
              </div>
            </div>

          </div>
        </div>
      </nav>

      {/* for mobile screen  */}
      <nav className={`fixed top-0 z-50 lg:hidden h-screen w-full p-2 bg-[#f3f3f3] dark:bg-[#242526] ${isMenu ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex justify-between items-center h-16 pr-3 mt-1 pl-2">
          <div className="flex-shrink-0">
            <div className="">
              <Link href="/" className="text-2xl flex items-center gap-2">
                <Image src={logo} alt='logo' height={34} width={34} quality={100} />
                <span className='text-[#1E233F] dark:text-white'><strong className='font-semibold'>SOIN</strong> Global</span>
              </Link>
            </div>
          </div>
          <div onClick={() => setIsMenu(!isMenu)} className="lg:hidden text-black dark:text-white/80 cursor-pointer">
            <X />
          </div>
        </div>
        {/* Nav items  */}
        <div onClick={() => setIsMenu(false)} className="flex flex-col items-center nav-links transform transition-transform duration-300 space-y-5 mt-10">
          <Link href="/" className=''>Home</Link>
          <Link href="#services" className=''>Services</Link>
          <Link href="#Roadmap" className=''>Roadmap</Link>
          <Link href="/about" className=''>About</Link>
          <Link href="#doc" className=''>Doc</Link>
          <div className='relative p-[1px] flex rounded-xl bg-gradient-to-r from-[#CFBEFF] via-[#00F2EACC] to-[#ACF7AC]'>
            <div className="px-4 py-2 bg-[#152030] rounded-xl text-white ">
              DApp
            </div>
          </div>
          <Link href="/signup" className='nav_btn1 px-4 py-2'>Sign up for free</Link>
        </div>
      </nav>

    </nav>
  );
};

export default Navbar;
