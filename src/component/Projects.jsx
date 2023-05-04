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
            url: ""
        },
        {
            name: "Jataka",
            photo: jataka,
            code:"Javascript, ReactJS, and Tailwind CSS ",
            url: ""
        },
        {
            name: "Metavisi Nusantara",
            photo: mvn,
            code:"Javascript, ReactJS, and Tailwind CSS ",
            url: ""
        },
        {
            name: "Digismart",
            photo: digi,
            code:"Javascript, NextJS, and AntDesign ",
            url: ""
        }
    ]
  return (
    <>
        <div className='pr-5 mt-8 w-full h-[500px] flex flex-col justify-start items-start'>
           <div className='w-full'>
                <h1 className='font-bold text-[30px] w-[70%]'>
                    Projects I've Completed
                </h1>
                <div className='bg-[#3a0f6c] w-[400px] h-[2px]' />
           </div>
            <div className='grid grid-cols-2 gap-10 mt-9'>
                {proj.map((link) => (
                    <>
                        <div className='w-[450px] h-[200px] overflow-hidden rounded-xl bg-red-50 '>
                            <img
                                className='w-[450px] h-[200px] -z-10'
                                src={link.photo}
                                alt={link.name}
                            />
                            <a href={link.url}>
                                <div className='z-30 w-[450px] h-[200px] overflow-hidden rounded-xl bg-red-50 '>
                                   sss 
                                </div>
                            </a>
                        </div>
                    </>
                ))}
            </div>
        </div>
    </>
  )
}

export default Projects