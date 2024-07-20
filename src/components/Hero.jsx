import React from 'react'

export default function Hero(){
    return ( 
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] 
    w-fill mx-auto p-4'>
       <div className='flex flex-col gap-4'>
       <p>TURN THE PAGE</p>
       <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>Page<span className='text-blue-400'>Shelf</span></h1>
       </div> 
       <p className='text-sm md:text-base font-light'>Keep track of all the <span className='text-blue-400 font-medium'>pages of books </span> you have read throughout the year.
        It is important to have a <span className='text-blue-400 font-medium'>vast library </span> in your mind, and even more important to have
        that knowledge organized. By continuing you agree to keep progress of your thirst for 
        reading.
       </p>
       <button className='px-8 py-4 rounded-md border-[2px] bg-slate-950 border-blue-400 border-solid blueShadow duration-200'>
        <p>Accept & Begin</p>
       </button>
    </div>
        
    )
}