import Image from 'next/image'
import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { Select, Option } from "@material-tailwind/react";
import { Testimonial } from './Testimonial';

export const Contact = () => {
  return (
    <>
        <div className='relative mb-10'>
            <Image src="/contactbg.jpeg" alt="T" width={4000} height={2000} className='w-screen h-[115vh] object-cover object-bottom blur-xl absolute -z-10'/>
            <div className='bg-hitam w-screen h-[135vh] opacity-70 absolute -top-16 -z-[1]'></div>
            <div className='container mx-auto mt-10'>
                <p className='text-white text-4xl lg:text-5xl text-center font-semibold mb-8'>Leading Way In Building & Civil Construction</p>
                <ul className='flex gap-10 justify-center items-center flex-wrap mb-10'>
                    <li className='flex gap-2 text-white text-lg items-center'><FaCheckCircle /> Professional Staff</li>
                    <li className='flex gap-2 text-white text-lg items-center'><FaCheckCircle /> 100% Satisfaction</li>
                    <li className='flex gap-2 text-white text-lg items-center'><FaCheckCircle /> Accurate Testing</li>
                    <li className='flex gap-2 text-white text-lg items-center'><FaCheckCircle /> Transparent Pricing</li>
                </ul>

                <div className='flex justify-center flex-wrap md:flex-wrap lg:flex-nowrap gap-8 mx-12'>
                  <div className='bg-oren px-5 py-4 lg:px-10 lg:py-8 rounded-xl flex-shrink basis-[100%] lg:basis-[64%]'>
                    <p className='text-white text-xl mb-4'>Request A Quote</p>
                    <p className='text-white '>Complete control over products allow us to our customers the best quality prices and services. We take great pride in everything that we do in Jhontraktor</p>
                    <form action="" method='POST' className='mt-3'>
                      <div className='grid grid-cols-2 gap-4'>
                        <input type="text" className='col-span-2 lg:col-span-1 p-4 rounded-xl focus:outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-500 placeholder:ps-8' placeholder='Name'/>
                        <input type="text" className='col-span-2 lg:col-span-1 p-4 rounded-xl focus:outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-500 placeholder:ps-8' placeholder='Email'/>

                        <input type="text" className='col-span-2 lg:col-span-1 p-4 rounded-xl focus:outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-500 placeholder:ps-8' placeholder='Phone'/>
                        <select className='text-gray-400 col-span-2 lg:col-span-1 p-4 ps-12 rounded-xl focus:outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-500 placeholder:ps-8' aria-placeholder='Test'>
                          <option value="" disabled selected>Select Your Service</option>
                          <option value="test">test</option>
                          <option value="test">test</option>
                        </select>
                        
                        <textarea name="" id="" rows={3} className='col-span-2 resize-none p-4 rounded-xl focus:outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-500 focus:rounded-tr-none focus:rounded-br-none placeholder:ps-8' placeholder='Additional Details!'></textarea>

                        <input type="submit" value="Submit Request"  className='col-span-2 text-center bg-hitam rounded-xl text-white cursor-pointer p-4'/>


                      </div>
                    </form>
                    
                  </div>

                  <div className='bg-oren px-5 py-4 lg:px-10 lg:py-8 rounded-xl basis-[100%] lg:basis-[35%]'>
                    <p className='text-white text-xl mb-4'>Contact Info</p>
                    <div className='mb-5'>
                      <p className='text-white mb-1'>Our Location</p>
                      <p className="text-white text-xs">18 Office Park Building 21th Floor Unit C. Jl. TB Simatupang Kav. 18, Jakarta Selatan ,12520</p>
                    </div>
                    <div className='mb-5'>
                      <p className='text-white mb-1'>Quick Contact</p>
                      <p className="text-white text-xs">Email : (+62) 877-2469-7246 <br/> Call Us : contact@jhontraktor.co</p>
                    </div>
                    <div className='mb-5'>
                      <p className='text-white mb-1'>Opening Hours</p>
                      <p className="text-white text-xs">Monday - Friday <br/> 09:00 AM - 06:00 PM</p>
                    </div>
                    <div className='mb-10'>
                      <p className='text-white mb-1'>Do You Have Any Question, Just Contact Us To Get Help!</p>
                    </div>

                    <div>
                      <button className='text-white bg-hitam w-full rounded-xl py-5'>Contact Us</button>
                    </div>
                    
                  </div>

                  <div></div>
                </div>
            </div>
        </div>
    </>
  )
}
