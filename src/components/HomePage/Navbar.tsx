"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  // useEffect(() => {
  //   // Set initial scroll state before mount
  //   setScrolled(window.scrollY > 20);
  //   setMounted(true);

  //   const handleScroll = () => {
  //     setScrolled(window.scrollY > 20);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <nav
      style={{ boxShadow: "0px 15px 30px 3px #0000000A" }}
      className={clsx(
        "w-[95%] sm:w-[90%] md:w-full fixed top-0  mt-2 sm:mt-3 md:mt-4 max-w-4xl z-50",
        mounted && "transition-all duration-300",
        scrolled ? "bg-white/80 backdrop-blur-md" : "bg-white",
        "rounded-3xl lg:rounded-full"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between py-2 px-3 sm:px-4 md:px-6">

        {/* LEFT LOGO */}
        <div className="flex items-center gap-2">
          <Image src="/navbar/nav-logo.svg" alt="Logo" className="w-28 sm:w-32 md:w-40 h-8 sm:h-9 md:h-10" width={1000} height={1000} />
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-10 text-xs xl:text-sm font-medium text-muted">
          {["Home", "Service", "Roadmap", "Blog", "Whitepaper"].map((item) => {
            const getHref = (item: string) => {
              if (item === "Home") return "/#hero";
              if (item === "Service") return "/#service";
              if (item === "Roadmap") return "/#roadmap";
              if (item === "Whitepaper") return "https://soin-global.gitbook.io/soin-social-intelligence";
              if (item === "Blog") return "/blogs";
              return "#";
            };
            
            return (
            <Link
              key={item}
              href={getHref(item)}
              className="relative group transition-all duration-300"
            >
              {/* Text */}
              <span className="group-hover:text-black transition-colors duration-300">
                {item}
              </span>

              {/* Underline on hover */}
              <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-0.5 bg-black rounded-full transition-all duration-300"></span>
            </Link>
          );
          })}
        </div>

        {/* RIGHT BUTTON (DESKTOP) */}
        <div className="hidden lg:block">
          <Link href="https://dapp.soinglobal.com/" target="_blank" rel="noopener noreferrer">
            <Button className="rounded-full px-4 xl:px-6 py-4 xl:py-5 font-medium bg-black hover:bg-black/90 text-white gap-2 transition-transform duration-300 hover:scale-105 text-xs xl:text-sm relative overflow-hidden">
              <span className="relative z-10">⚡ Try the Dapp</span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_2s_ease-in-out_infinite]" style={{ animation: 'shimmer 2s ease-in-out infinite', transform: 'translateX(-100%)' }}></span>
              <style jsx>{`
                @keyframes shimmer {
                  0% { transform: translateX(-100%); }
                  100% { transform: translateX(100%); }
                }
              `}</style>
            </Button>
          </Link>
        </div>

        {/* HAMBURGER (MOBILE) */}
        <button
          className="lg:hidden text-black transition-transform duration-300 active:scale-90"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} className="sm:w-6 sm:h-6" /> : <Menu size={22} className="sm:w-6 sm:h-6" />}
        </button>
      </div>

      {/* MOBILE MENU (Animated) */}
      <div
        className={clsx(
          "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="flex flex-col gap-4 sm:gap-6 text-black px-3 sm:px-6 pb-4 sm:pb-6 text-sm font-medium pt-2">
          {["Home", "Service", "Roadmap", "Blog", "Whitepaper"].map((item) => {
            const getHref = (item: string) => {
              if (item === "Home") return "/#hero";
              if (item === "Service") return "/#service";
              if (item === "Roadmap") return "/#roadmap";
              if (item === "Blog") return "/blogs";
              return "#";
            };
            
            return (
            <Link
              key={item}
              href={getHref(item)}
              className="transition-all duration-300 hover:pl-2"
              onClick={() => setOpen(false)}
            >
              {item}
            </Link>
          );
          })}
          <Link href="https://dapp.soinglobal.com/" target="_blank" rel="noopener noreferrer">

          <Button className="rounded-full w-fit bg-black text-white py-2 px-4 mt-2 transition-all duration-300 hover:scale-105 text-xs sm:text-sm relative overflow-hidden">
            <span className="relative z-10">⚡ Try the Dapp</span>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_2s_ease-in-out_infinite]" style={{ animation: 'shimmer 2s ease-in-out infinite', transform: 'translateX(-100%)' }}></span>
          </Button>
          </Link>

        </div>
      </div>
    </nav>
  );
}
