import React from 'react'
import Lottie from "lottie-react";
import Code from '../assets/service.json'

const Service = () => {
  return (
    <>
      <div className='pr-5 mt-10 w-full h-[500px] flex flex-col justify-start items-start'>
        <h1 className='font-bold text-[30px] w-[70%]'>
            What I Do
        </h1>
        <div className='bg-[#3a0f6c] w-[200px] h-[2px]' />
        <div className='flex flex-row mt-8 w-full rounded-xl bg-[#ceb6cc] p-5'>
            <div className='w-[50%]'>
                <h1 className='font-semibold text-[20px] mb-5'>
                    Frontend Developer
                </h1>
                <p className='font-normal'>
                    Building user-friendly and responsive user interfaces 
                    using React.js, Tailwind CSS, and JavaScript. 
                    I am enthusiastic about continuing to learn and 
                    acquiring new skills in web development. I am used 
                    to working in a goal-oriented team with excellent 
                    communication skills.
                </p>
            </div>
            <div className='w-[70%] h-[300px]'>
                <Lottie
                    className='h-[400px] ml-[50px]'
                    animationData={Code}
                    loop={true}
                />
            </div>
        </div>
      </div>
    </>
  )
}

export default Service