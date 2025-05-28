import Image from 'next/image'
import React from 'react'
import ArrowIcon from '@/assets/logos/down-arrow.png'

const HowItsWork = () => {
    return (
        <>
            {/* how it works  */}
            <div className="pt-10 max-w-screen-xl m-auto px-4">
                <h2 className="text-center font-jakarta text-black dark:text-[#C6EFEF] text-4xl font-bold mb-12">How It Works <span className="mt-2 block w-40 bg-[#5B4A9A] dark:bg-[#EAFBFB] h-1 rounded-xl m-auto"></span></h2>


                <div className="flex w-full">

                    <div className="w-full space-y-5 text-center">
                        {/* all rows  */}
                        {/* full row 1  */}
                        <div className="flex justify-end">
                            <div className="relative flex justify-center gap-5 custom-dashed-border w-full md:w-3/4">
                                {/* left side Name  */}
                                <h3 className='hidden md:block absolute -mt-5 -left-20 md:-left-40 lg:-left-60 top-1/2 text-xl text-[#5B4A9A] dark:text-[#EBFFFF] '>BRANDS</h3>
                                {/* arrow images  */}
                                <Image className='absolute -bottom-12' src={ArrowIcon} alt='' height={22} width={22} />
                                {/* main row  */}
                                <div className="relative flex justify-center gradient-border rounded-full">
                                    <div className="z-10 md:px-6 px-3 md:py-3 py-1 rounded-full bg-[#EAFBFB] dark:bg-[#232730] text-black/90 dark:text-white/90 text-sm md:text-base font-medium shadow border border-[#33BCBC] dark:border-[#444]">Creates an order</div>
                                    <span className='absolute h-[2px] w-full block bg-[linear-gradient(to_right,#0B6661,#33BCBC)] z-0 top-1/2 -right-16 md:-right-35'></span>
                                </div>
                                <div className="relative flex justify-center gradient-border rounded-full">
                                    <div className="z-10 md:px-6 px-3 md:py-3 py-1 rounded-full bg-[#EAFBFB] dark:bg-[#232730] text-black/90 dark:text-white/90 text-sm md:text-base font-medium shadow border border-[#33BCBC] dark:border-[#444]">Makes Payment</div>
                                    <span className='absolute h-[2px] w-full block bg-[linear-gradient(to_right,#0B6661,#33BCBC)] z-0 top-1/2 -right-16 md:-right-35'></span>
                                </div>
                                <div className="flex justify-center gradient-border rounded-full z-10">
                                    <div className="md:px-6 px-3 md:py-3 py-1 rounded-full bg-[#EAFBFB] dark:bg-[#232730] text-black/90 dark:text-white/90 text-sm md:text-base font-medium shadow border border-[#33BCBC] dark:border-[#444]">Payment locked in SOIN</div>
                                </div>
                            </div>
                        </div>

                        {/* full row 2  */}
                        <div className="flex justify-end">
                            <div className="relativerelative flex justify-center gap-5 custom-dashed-border w-full md:w-3/4">
                                {/* left side name  */}
                                <h3 className='hidden md:block absolute -mt-5 -left-20 md:-left-40 lg:-left-60 top-1/2 text-xl text-[#5B4A9A] dark:text-[#EBFFFF] '>SOIN Global</h3>
                                {/* arrow images  */}
                                <Image className='absolute -bottom-12' src={ArrowIcon} alt='' height={22} width={22} />
                                {/* main row  */}
                                <div className="relative flex justify-center gradient-border rounded-full z-10">
                                    <div className="z-10 md:px-6 px-3 md:py-3 py-1 rounded-full bg-[#EAFBFB] dark:bg-[#232730] text-black/90 dark:text-white/90 text-sm md:text-base font-medium shadow border border-[#33BCBC] dark:border-[#444]">Smart Contract Secures Payment</div>
                                    <span className='absolute h-[2px] w-full block bg-[linear-gradient(to_right,#0B6661,#33BCBC)] z-0 top-1/2 -right-16 md:-right-35'></span>

                                </div>
                                <div className="flex justify-center gradient-border rounded-full z-10">
                                    <div className="md:px-6 px-3 md:py-3 py-1 rounded-full bg-[#EAFBFB] dark:bg-[#232730] text-black/90 dark:text-white/90 text-sm md:text-base font-medium shadow border border-[#33BCBC] dark:border-[#444]">Monitors Task Progress</div>
                                </div>
                            </div>
                        </div>

                        {/* full row 3  */}
                        <div className="flex justify-end">
                            <div className="relativerelative flex justify-center gap-5 custom-dashed-border w-full md:w-3/4">
                                <h3 className='hidden md:block absolute -mt-5 -left-20 md:-left-40 lg:-left-60 top-1/2 text-xl text-[#5B4A9A] dark:text-[#EBFFFF] '>CREATORS</h3>
                                <div className="relative flex justify-center gradient-border rounded-full z-10">
                                    <div className="z-10 md:px-6 px-3 md:py-3 py-1 rounded-full bg-[#EAFBFB] dark:bg-[#232730] text-black/90 dark:text-white/90 text-sm md:text-base font-medium shadow border border-[#33BCBC] dark:border-[#444]">Accepts Task</div>
                                    <span className='absolute h-[2px] w-full block bg-[linear-gradient(to_right,#0B6661,#33BCBC)] top-1/2 -right-16 lg:-right-35'></span>
                                </div>
                                <div className="relative flex justify-center gradient-border rounded-full z-10">
                                    <div className="z-10 md:px-6 px-3 md:py-3 py-1 rounded-full bg-[#EAFBFB] dark:bg-[#232730] text-black/90 dark:text-white/90 text-sm md:text-base font-medium shadow border border-[#33BCBC] dark:border-[#444]">Completes & Submits Work</div>
                                    <span className='absolute h-[2px] w-full block bg-[linear-gradient(to_right,#0B6661,#33BCBC)] z-0 top-1/2 -right-16 md:-right-35'></span>

                                </div>
                                <div className="flex justify-center gradient-border rounded-full z-10">
                                    <div className="md:px-6 px-3 md:py-3 py-1 rounded-full bg-[#EAFBFB] dark:bg-[#232730] text-black/90 dark:text-white/90 text-sm md:text-base font-medium shadow border border-[#33BCBC] dark:border-[#444]">Receives Payment</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div >
        </>
    )
}

export default HowItsWork