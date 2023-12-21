import Link from 'next/link';
import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import {Location, SocialMedia} from './LinkLocation';
import Image from 'next/image';

export const Footer = () => {
    return (
        <div className='bg-hitam'>
            <div className='container mx-auto'>
                <div className='mx-12 pt-8'>
                    <div className='flex justify-center flex-col lg:flex-row lg:justify-between items-center mb-5'>
                        <Link href="/" className='text-white text-xl lg:text-3xl font-unlock'>JHONTRAKTOR</Link>
                        <div className='lg:flex lg:gap-5 items-center mt-4 lg:mt-0 '>
                            <p className='text-white text-xs lg:text-base'>Subscribe To Our Newslatter:</p>
                            <div className='flex gap-2 lg:gap-12  border-b pb-1 border-gray-400'>
                                <input type="text" className='bg-transparent text-xs lg:text-sm outline-none text-white' placeholder={`Enter your email address`} />
                                <button type="submit" className='text-white'>
                                    <FaArrowRight />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-around lg:justify-between flex-wrap lg:flex-nowrap text-white gap-5 lg:gap-10'>
                        <div className='basis-full lg:basis-[33%]'>
                            <p className='mb-3'>About Us</p>
                            
                            <p className='text-xs leading-relaxed'>We have the confidence to provide the best service for you, with the support of Professional and Certified HR that we currently have and the high-quality materials we use and structured work techniques, we will be able to realize timely completion of work.</p>
                        </div>

                        <div className='basis-full lg:basis-[20%]'>
                            <p className='mb-3'>Office</p>
                            
                            <p className='text-xs leading-relaxed'>18 Office Park Building 21th Floor Unit C. <br/> Jl. TB Simatupang Kav. 18, Jakarta Selatan ,12520</p>
                        </div>

                        <div className='basis-full lg:basis-[20%]'>
                            <p className='mb-3'>Contact</p>
                            
                            <p className='text-xs leading-relaxed'>Email : contact@jhontracktor.co <br/> Phone : (+62) 877-2469-7246</p>
                        </div>

                        <div className='flex flex-col justify-center lg:block'>
                            <p className='mb-3 text-center lg:text-left'>Link</p>
                            <div className='flex lg:block gap-3'>
                                {Location.map((link) => (
                                    <>
                                        <Link href={link.src} className='text-xs no-underline'>{link.title}</Link> <br/>
                                    </>
                                    
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className='flex gap-3 mb-10 justify-center lg:justify-normal'>
                        {SocialMedia.map((sosmed) => (
                            <Link href={sosmed.src}><Image src={sosmed.icon} alt={`${sosmed.name} Logo`} width={23} height={23}/></Link>
                        ))}
                    </div>

                    <div className='text-white text-center text-[9px] text-opacity-50 mb-2'>
                        Copyright © 2023 CandyAP. All Rights Reserved
                    </div>
                </div>
                
            </div>
        </div>
    )
}
