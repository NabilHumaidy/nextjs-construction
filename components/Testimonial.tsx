import Image from 'next/image'
import React from 'react'

export const Testimonial = () => {
  return (
    <>
        <div className='container mx-auto mt-10'>
            <div className='text-center mb-6'>
                <p className='text-2xl font-semibold text-oren mb-5'>What Our Client Says</p>
                <p className='text-white w-[90%] lg:w-[66%] mx-auto mb-3'>I am very satisfied with the services. Their team is very professional and efficient in completing our project on time and at a very affordable cost. The quality of their work is very good and I highly recommend this company for any construction project.</p>
                <p className='text-white mb-1'>Tom Delonge</p>
                <p className='text-white text-xs'>CEO, Lexmark</p>
            </div>
            <div className='flex justify-center items-center gap-3 text-white mb-20'>
                <button className='text-xs'>&lt; Prev</button>
                <div className='opacity-50'>
                    <Image src="/joseph.png" alt='Joseph Photo' width={40} height={40} className='rounded-full'/>
                </div>
                
                <div className='h-[70px] w-[70px] border-4 border-oren rounded-full flex justify-center items-center'>
                    <Image src="/iandooley.png" alt='Ian Dooley Photo' width={53} height={53} className='rounded-full'/>
                </div>

                <div className='opacity-50'>
                    <Image src="/ayo.png" alt='Ayo Photo' width={40} height={40} className='rounded-full'/>
                </div>
                <button className='text-xs'>Next &gt;</button>
            </div>
        </div>
    </>
  )
}
