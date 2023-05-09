import React from 'react'
import Me from '../assets/me.png'
const Hero = () => {
  return (
    <>
        <div id="home" className='w-full h-[600px] md:h-[450px] flex flex-col md:flex-row overflow-hidden'>
            <div className='w-[80%] md:w-[50%] flex flex-col justify-center items-start'>
                <h1 className='font-bold text-[30px] md:text-[50px] w-full md:w-[70%] leading-0 md:leading-[60px] '>
                    Nida Muna Fadhilla
                </h1>
                <p className='font-semibold text-[16px] md:text-[20px] mb-5'>
                    Junior Web Frontend Developer
                </p>
                <p className='font-light text-[12px] md:text-[16px]'>
                    Frontend web developer from Magelang, Indonesia. 
                    Have more than 1 year of experience as a frontend web
                    developer with the ability to build user experiences 
                    with responsive designs as needed.
                </p>
                <a href={`mailto:munanida@gmail.com`}>
                    <button className='text-[12px] md:text-[16px] hover:scale-110 hover:ml-4 mt-6 border-2 border-[#3a0f6c] px-4 py-2 rounded-full'>
                        Contact Me
                    </button>
                </a>
            </div>
            <div className='w-[80%] md:w-[50%] flex justify-center items-center'>
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