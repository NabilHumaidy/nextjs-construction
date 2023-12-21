import Image from 'next/image';
import React from 'react'

export const Project = () => {
    const projectBanner = [
        {
            name: 'Skyskuy Tower',
            src: '/skyskuy.png',
            category: 'Renovation & Architecture'
        },
        {
            name: 'The Fallingwater House',
            src: '/fallingwater.png',
            category: 'Building & Interior'
        },
        {
            name: 'The Orange Apartemen',
            src: '/orange.png',
            category: 'Construction & Interior'
        },
        {
            name: 'Patrick',
            src: '/patrick.jpeg',
            category: 'Undefined'
        },
        {
            name: 'Jackie',
            src: '/jackie.jpeg',
            category: 'Undefined'
        },
        {
            name: 'Alex',
            src: '/alex.jpeg',
            category: 'Undefined'
        }
    ];
    return (
        <>
            <div className='bg-oren'>
                <div className='container mx-auto py-8'>
                    <div className=''>
                        <div className='mx-12 mb-10 hidden lg:block md:block'>
                            <div className='flex ms-6 gap-4'>
                                <div className='flex flex-col items-center text-center relative'>
                                    <p className='text-white w-3/5 mb-2'>Evaluation And Signing Of The Contract</p>
                                    <p className='text-white text-xs mb-6'>Step 1</p>
                                    <div className='relative'>
                                        <div className='w-7 h-7 flex justify-center items-center absolute -top-3 -left-4 cursor-pointer hover:scale-150 hover:animate-jump animate-pulse animate-infinite'>
                                            <div className='bg-white opacity-20 w-7 h-7 rounded-full '></div>
                                            <div className='bg-white w-[0.9rem] h-[0.9rem] rounded-full absolute'></div>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex flex-col items-center text-center relative'>
                                    <p className='text-white w-1/2 lg:w-[65%] mb-2'>Preparation Of The Work Plan</p>
                                    <p className='text-white text-xs mb-6'>Step 2</p>
                                    <div className='relative'>
                                        <div className='w-7 h-7 flex justify-center items-center absolute -top-3 -left-4 cursor-pointer hover:scale-150 hover:animate-jump animate-pulse animate-infinite'>
                                            <div className='bg-white opacity-20 w-7 h-7 rounded-full '></div>
                                            <div className='bg-white w-[0.9rem] h-[0.9rem] rounded-full absolute'></div>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex flex-col items-center text-center relative'>
                                    <p className='text-white w-1/2 lg:w-[65%] mb-2'>Implementation Of Quality Works</p>
                                    <p className='text-white text-xs mb-6'>Step 3</p>
                                    <div className='relative'>
                                        <div className='w-7 h-7 flex justify-center items-center absolute -top-3 -left-4 cursor-pointer hover:scale-150 hover:animate-jump animate-pulse animate-infinite'>
                                            <div className='bg-white opacity-20 w-7 h-7 rounded-full '></div>
                                            <div className='bg-white w-[0.9rem] h-[0.9rem] rounded-full absolute'></div>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex flex-col items-center text-center relative'>
                                    <p className='text-white w-[60%] mb-2'>Delivering The Project To The Customer</p>
                                    <p className='text-white text-xs mb-6'>Step 4</p>
                                    <div className='relative'>
                                        <div className='w-7 h-7 flex justify-center items-center absolute -top-3 -left-4 cursor-pointer hover:scale-150 hover:animate-jump animate-pulse animate-infinite'>
                                            <div className='bg-white opacity-20 w-7 h-7 rounded-full '></div>
                                            <div className='bg-white w-[0.9rem] h-[0.9rem] rounded-full absolute'></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className='border-white border-[2px] rounded-xl' />
                        </div>

                        <div className='lg:hidden md:hidden'>
                            <div className='flex justify-center'>
                                <hr className='border w-1 h-80 bg-white rounded-full'></hr>
                                <div className='flex flex-col'>
                                    <div className='flex items-center mb-10'>
                                        <div className='relative'>
                                            <div className='w-7 h-7 flex justify-center items-center absolute -left-4 -top-3 z-10 cursor-pointer hover:scale-150 hover:animate-jump animate-pulse animate-infinite'>
                                                <div className='bg-white opacity-20 w-7 h-7 rounded-full '></div>
                                                <div className='bg-white w-[0.9rem] h-[0.9rem] rounded-full absolute'></div>
                                            </div>
                                        </div>
                                        <p className='text-white text-xs ms-5'>Step 1</p>
                                        <p className='text-white w-3/5 ms-2'>Evaluation And Signing Of The Contract</p>
                                    </div>

                                    <div className='flex items-center mb-10'>
                                        <div className='relative'>
                                            <div className='w-7 h-7 flex justify-center items-center absolute -left-4 -top-3 z-10 cursor-pointer hover:scale-150 hover:animate-jump animate-pulse animate-infinite'>
                                                <div className='bg-white opacity-20 w-7 h-7 rounded-full '></div>
                                                <div className='bg-white w-[0.9rem] h-[0.9rem] rounded-full absolute'></div>
                                            </div>
                                        </div>
                                        <p className='text-white text-xs ms-5'>Step 2</p>
                                        <p className='text-white w-3/5 ms-2'>Preparation Of The Work Plan</p>
                                    </div>

                                    <div className='flex items-center mb-10'>
                                        <div className='relative'>
                                            <div className='w-7 h-7 flex justify-center items-center absolute -left-4 -top-3 z-10 cursor-pointer hover:scale-150 hover:animate-jump animate-pulse animate-infinite'>
                                                <div className='bg-white opacity-20 w-7 h-7 rounded-full '></div>
                                                <div className='bg-white w-[0.9rem] h-[0.9rem] rounded-full absolute'></div>
                                            </div>
                                        </div>
                                        <p className='text-white text-xs ms-5'>Step 3</p>
                                        <p className='text-white w-3/5 ms-2'>Implementation Of Quality Works</p>
                                    </div>

                                    <div className='flex items-center mb-10'>
                                        <div className='relative'>
                                            <div className='w-7 h-7 flex justify-center items-center absolute -left-4 -top-3 z-10 cursor-pointer hover:scale-150 hover:animate-jump animate-pulse animate-infinite'>
                                                <div className='bg-white opacity-20 w-7 h-7 rounded-full '></div>
                                                <div className='bg-white w-[0.9rem] h-[0.9rem] rounded-full absolute'></div>
                                            </div>
                                        </div>
                                        <p className='text-white text-xs ms-5'>Step 4</p>
                                        <p className='text-white w-3/5 ms-2'>Delivering The Project To The Custom</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className='mt-10 mx-4 lg:mx-12'>
                        <div className='block lg:flex justify-between items-center mb-10'>
                            <p className='text-hitam text-5xl font-semibold'>Featured Project</p>
                            
                            <div className='flex flex-wrap gap-7'>
                                <button className="text-hitam font-semibold text-md py-3 px-1 border-b-4 rounded border-hitam">All Works</button>
                                <button className="text-white font-semibold text-md py-3 px-1">Construction</button>
                                <button className="text-white font-semibold text-md py-3 px-1">Architecture</button>
                                <button className="text-white font-semibold text-md py-3 px-1">Building</button>
                                <button className="text-white font-semibold text-md py-3 px-1">Renovations</button>
                                <button className="text-white font-semibold text-md py-3 px-1">Interior</button>
                            </div>
                        </div>
                        <div className='flex gap-5 overflow-y-auto mb-20'>
                            {projectBanner.map((project) => (
                                <div className='relative flex-none cursor-pointer'>
                                    <Image src={project.src} alt={project.name} width={2000} height={5000} className='rounded-xl object-cover lg:w-96 lg:h-[485px] w-60 h-[303px]'/>
                                    <div className='text-white text-center lg:w-96 w-60 absolute top-[240px] lg:top-[420px]'>
                                        <div className='relative'>
                                            <div className='absolute z-10 lg:w-96 w-60 '>
                                                <p className='lg:text-xl tex-lg'>{project.name}</p>
                                            <p className='lg:text-sm text-sm'>{project.category}</p>
                                            </div>
                                            <div className='lg:w-96 w-60 bg-hitam opacity-25 h-16 rounded-b-xl absolute top-0'></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
