import Image from 'next/image'
import React, { useState } from 'react'
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const HomeHeader = () => {
  return (
    <>
    <div>
        <Image src="/header.png" alt="Construction Worker Header Page" width={2000} height={4000} className='w-screen h-[115vh] object-cover object-center absolute -z-10' />
        <div className='container mx-auto h-[115vh] flex items-center justify-center lg:justify-normal'>
            <div className='mx-10 lg:ms-12'>
                <p className='text-white text-5xl lg:w-[45%] font-semibold leading-normal'>We Prepare For The <span className='text-oren'>Future</span></p>
                <p className='text-white mt-5 lg:w-[70%] '>We provide the best architectural design, contruction, and building maintance services for you.</p>
                <div className='flex gap-5 mt-20'>
                    <button className='text-white font-medium flex gap-2 items-center text-md lg:text-xl py-2 px-4 lg:px-6 lg:py-3 rounded-xl bg-oren'>Our Services <FaRegArrowAltCircleRight /></button>
                    <button className='text-black font-medium flex gap-2 items-center text-md lg:text-xl py-2 px-4 lg:px-6 lg:py-3 rounded-xl bg-white'>View Project</button>
                </div>
            </div>
            
        </div>
        
    </div>
    </>
  )
}

export default HomeHeader