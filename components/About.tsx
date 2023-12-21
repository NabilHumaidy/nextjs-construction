import Image from 'next/image';
import React from 'react'
import { FaCheckCircle } from "react-icons/fa";

export const About = () => {
  return (
    <div className='container mx-auto relative'>
        <div className='lg:absolute bg-oren rounded-xl text-white -top-[10.15rem] right-10 p-12'>
            <ul className='block md:flex lg:block justify-center lg:justify-normal items-center lg:items-start'>
                <li className='mb-4 flex items-center gap-2'><FaCheckCircle /> Quality Control System, 100% Satisfaction Guarantee</li>
                <li className=' flex items-center gap-2'><FaCheckCircle /> Highly Proffesional Staff, Accurate Testing Processes</li>
                <li className='mt-4 flex items-center gap-2'><FaCheckCircle /> Unrivalled Workmanship, Proffesional and Qualified</li>
            </ul>
        </div>
        <div className='mt-12 ms-12 flex gap-5 justify-center lg:justify-normal flex-wrap'>
            <div className='flex items-center gap-2'>
                <p className='text-4xl text-oren font-semibold'>25+</p>
                <p className='text-white w-20 font-medium text-xs'>Years of Experience</p>
            </div>
            <div className='flex items-center gap-2'>
                <p className='text-4xl text-oren font-semibold'>378+</p>
                <p className='text-white w-20 font-medium text-xs'>Project Complete</p>
            </div>
            <div className='flex items-center gap-2'>
                <p className='text-4xl text-oren font-semibold'>69+</p>
                <p className='text-white w-[5.25rem] font-medium text-xs'>Winning Global Award</p>
            </div>
        </div>
        <div className='flex flex-wrap mt-10 lg:mt-20 justify-center lg:justify-between'>
            <div className='w-[70vw] lg:w-1/3 m-0 lg:ms-14'>
                <Image src="/experience.png" alt="Experience Worker" height={4000} width={2000}/>
                <hr className='border-oren lg:hidden' />
            </div>
            <div className='w-[80%] lg:w-1/2 me-0 lg:me-12 text-center lg:text-start'>
                <div className='mb-7'>
                    <p className="text-white text-5xl font-semibold leading-normal tracking-wider"><span className="text-oren">25 years</span><br/> of experience!</p>
                </div>
                <p className='text-white'>We have a team of experienced professionals who have been in the industry for over 25 years. Our contractors have a wealth of knowledge and skills that they have acquired over the years, making them experts in their field.<br/><br/>
                With 25 years of experience, our contractors have a deep understanding of industry standards and regulations. We ensure that all our projects comply with the latest safety and building codes, and that the final product meets or exceeds our client's expectations.</p>
                <div className="mt-8 mb-10">
                    <p className='text-white font-comforter-brush text-6xl ms-3'>jhon lbf</p>
                    <p className='text-white text-xs mt-5'>Henry Kurnia Adhi - Founder</p>
                </div>
            </div> 
        </div>
    </div>
  )
}
