'use client'
import React, { useState } from 'react'
import { IoEarthSharp } from "react-icons/io5";
import {Location} from './LinkLocation';
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import { TbAlignLeft } from "react-icons/tb";
import { VscChromeClose } from "react-icons/vsc";

const Navbar = () => {
    const url = usePathname();
    let [open, setOpen] = useState(false);
    return (
        <nav className='bg-hitam w-screen fixed z-50'>
            <div className='container mx-auto flex justify-between items-center p-5'>
                <div onClick={()=>setOpen(!open)} className='lg:hidden text-white cursor-pointer'>
                    {open ? <VscChromeClose size={35}/> : <TbAlignLeft size={35} />}
                    
                </div>
                <div className='font-unlock text-oren text-xl lg:text-3xl'>
                    <a href="">
                        JHONTRAKTOR
                    </a>
                </div>
                <div className='text-white hidden lg:block'>
                    <ul className='list-none flex gap-8 text-xl'>
                        {Location.map((link, index) => (
                            <li key={index} className={`px-1 py-4 ${url === link.src ? 'text-oren border-b-oren border-b-2' : ''}`}>
                                <Link href={link.src}>
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='flex gap-5 text-white text-base lg:text-xl items-center'>
                    <div className='hidden lg:block md:block'>
                        <div className="flex gap-2 items-center">
                            <IoEarthSharp />
                            <p>English</p>
                        </div>
                    </div>
                    <div>
                        <button className='bg-oren rounded-xl text-sm px-3 py-2 lg:text-base lg:px-5 lg:py-3'>Contact Us</button>
                    </div>
                </div>
            </div>
            <div className={`bg-hitam text-oren border-t border-b-2 border-oren ${open ? 'block' : 'hidden'}`}>
                <div className='flex justify-between'>
                    <ul>
                        {Location.map((link, index) => (
                            <li key={index} className={`text-xl p-5 `}><Link href={link.src}>{link.title} </Link></li>
                        ))}
                    </ul>
                    <div className="flex gap-2 items-center p-5 text-xl md:hidden">
                        <IoEarthSharp />
                        <p>English</p>
                    </div>
                </div>
                
            </div>
        </nav>
    )
}

export default Navbar