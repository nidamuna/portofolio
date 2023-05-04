import React from 'react'
import hli from '../assets/hli.png'
import mvn from '../assets/mvn.png'
import jataka from '../assets/jataka.png'
import digi from '../assets/digismart.png'

const Projects = () => {
    const proj=[
        {
            name: "Home Learning Indonesia",
            photo: hli,
            code:"Javascript, ReactJS, and Tailwind CSS ",
            url: "https://hli.co.id/"
        },
        {
            name: "Jataka",
            photo: jataka,
            code:"Javascript, ReactJS, and Tailwind CSS ",
            url: "https://www.jataka.io/"
        },
        {
            name: "Meta Visi Nusantara",
            photo: mvn,
            code:"Javascript, ReactJS, and Tailwind CSS ",
            url: "https://metavisinusantara.com/"
        },
        {
            name: "Digismart",
            photo: digi,
            code:"Javascript, NextJS, and AntDesign ",
            url: "https://marketplace.digiswap.finance/"
        }
    ]
  return (
    <>
        <div id="projects" className='pr-5 my-8 w-full min-h-[500px] flex flex-col justify-start items-start'>
           <div className='w-full'>
                <h1 className='font-bold text-[30px] w-[70%]'>
                    Projects I've Completed
                </h1>
                <div className='bg-[#3a0f6c] w-[400px] h-[2px]' />
           </div>
            <div className='grid grid-cols-2 gap-10 mt-9'>
                {proj.map((link) => (
                    <>
                        <div className='w-[450px] h-[300px] overflow-hidden rounded-xl border-[2px] border-[#274c77] hover:border-[#104256] '>
                            <img
                                className='w-[450px] h-[200px] -z-10'
                                src={link.photo}
                                alt={link.name}
                            />
                            <a href={link.url} target="_blank" rel="noreferrer">
                                <div className='z-30 w-[450px] h-[100px] p-5 text-white overflow-hidden bg-[#274c77] hover:bg-[#104256]'>
                                   <p className='font-medium text-[20px]'>
                                        {link.name}
                                   </p>
                                   <p className='font-normal text-[16px] italic'>
                                        {link.code}
                                   </p>
                                </div>
                            </a>
                        </div>
                    </>
                ))}
            </div>
            <div className='w-full mt-10'>
                <h1 className='font-bold text-[30px] w-[70%]'>
                    My Resume
                </h1>
                <div className='bg-[#3a0f6c] w-[400px] h-[2px]' />
                <div className='mt-8 font-semibold'>
                    <h1>
                        If you would like to learn more about 
                        my professional background, I kindly invite 
                        you to review my resume.
                    </h1>
                    <button className='hover:scale-110 mt-6 border-2 border-[#3a0f6c] px-4 py-2 rounded-full'>
                        Go to my resume
                    </button>
                </div>
           </div>
        </div>
    </>
  )
}

export default Projects