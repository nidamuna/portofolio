import React from 'react'
import Me from '../assets/me.png'
const Hero = () => {
  return (
    <>
        <div id="home" className='w-full h-[450px] flex flex-row overflow-hidden'>
            <div className='w-[50%] flex flex-col justify-center items-start'>
                <h1 className='font-bold text-[50px] w-[70%] leading-[60px] '>
                    Nida Muna Fadhilla
                </h1>
                <p className='font-semibold text-[20px] mb-5'>
                    Junior Web Frontend Developer
                </p>
                <p className='font-light text-[16px]'>
                    Frontend web developer from Magelang, Indonesia. 
                    Have more than 1 year of experience as a frontend web
                    developer with the ability to build user experiences 
                    with responsive designs as needed.
                </p>
                <button className='hover:scale-110 hover:ml-4 mt-6 border-2 border-[#3a0f6c] px-4 py-2 rounded-full'>
                    Contact Me
                </button>
            </div>
            <div className='w-[50%] flex justify-center items-center'>
                <img 
                    className='h-[480px]'
                    src={Me} 
                    alt="Nida Muna" 
                />
            </div>
        </div>
    </>
  )
}

export default Hero