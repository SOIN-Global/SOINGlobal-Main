import Image from "next/image";
import React from "react";
import logo from "@/assets/logos/soin-logo.png";
import Link from "next/link";
import twitterImage from "@/assets/logos/twiter-logo.png";
import telegramImage from "@/assets/logos/telegram-logo.png";
import mediumImage from "@/assets/logos/medium-logo.png";


const Footer = () => {
    return (
        <div className=" bg-[#48A3A4]/10 mt-12">
            <div className="flex justify-between flex-wrap text-black/80 dark:text-white/80 py-6 md:py-12 max-w-screen-xl m-auto px-4">
                <div className="w-full md:w-60 lg:w-80 mb-6 md:mb-0">
                    <div className="mb-5">
                        <Link href="/" className="text-2xl flex items-center gap-2">
                            <Image src={logo} alt='logo' height={34} width={34} quality={100} />
                            <span className='text-[#1E233F] dark:text-white'><strong className='font-semibold'>SOIN</strong> Global</span>
                        </Link>
                    </div>
                    <p>The trusted hub that pairs real influencers with brands for successful Web3 campaigns through AI</p>
                </div>
                <div className="w-full md:w-3/5 flex">
                    <div className="w-1/3">
                        <h3 className="text-xl text-[#48A3A4] dark:text-[#C6EFEF] font-bold mb-5">Resources</h3>
                        <li className="mb-3 list-none">
                            <Link href="https://soin-global.gitbook.io/soin-social-intelligence">Docs</Link>
                        </li>
                        <li className="mb-3 list-none">
                            <Link href="/blog">Blogs</Link>
                        </li>
                        <li className="mb-3 list-none">
                            <Link href="https://t.me/SOINGLOBALAnnoucement">News letter</Link>
                        </li>
                    </div>
                    <div className="w-1/3">
                        <h3 className="text-xl text-[#48A3A4] dark:text-[#C6EFEF] font-bold mb-5">Company</h3>
                        <li className="mb-3 list-none">
                            <Link href="/about">About Us</Link>
                        </li>
                        <li className="mb-3 list-none">
                            <Link href="/">Contact us</Link>
                        </li>
                    </div>
                    <div className="w-1/3">
                        <h3 className="text-xl text-[#48A3A4] dark:text-[#C6EFEF] font-bold mb-5">Social Media</h3>
                        <li className="mb-3 list-none">
                            <Link href="https://x.com/SoinGlobal" className="flex items-center gap-2">
                                <Image src={twitterImage} alt="" quality={100} width={30} height={30} className="w-5 object-cover" />
                                Twitter</Link>
                        </li>
                        <li className="mb-3 list-none">
                            <Link href="https:t.me/SOINGlobal" className="flex items-center gap-2">
                                <Image src={telegramImage} alt="" quality={100} width={30} height={30} className="w-6 object-cover" />
                                Telegram</Link>
                        </li>
                        <li className="mb-3 list-none">
                            <Link href="https://medium.com/@soinglobalblog" className="flex items-center gap-2">
                                <Image src={mediumImage} alt="" quality={100} width={30} height={30} className="w-6 object-cover" />
                                Medium</Link>
                        </li>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;