import React from 'react'
import hli from '../assets/hli.png'
import mvn from '../assets/mvn.png'
import jataka from '../assets/jataka.png'
import digi from '../assets/digismart.png'
import icw from '../assets/icw.png'
import perpus from '../assets/perpus.png'
import { Link } from 'react-router-dom'

const Projects = () => {
    const proj=[
        {
            name: "Indo Circular Waste",
            photo: icw,
            code:"Javascript, ReactJS, Tailwind CSS, and AntDesign ",
            url: "https://www.indocircularwaste.co.id/"
        },
        {
            name: "Digismart",
            photo: digi,
            code:"Javascript, NextJS, and AntDesign ",
            url: "https://marketplace.digiswap.finance/"
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
            name: "Home Learning Indonesia",
            photo: hli,
            code:"Javascript, ReactJS, and Tailwind CSS ",
            url: "https://hli.co.id/"
        },
        {
            name: "Perpustakaan UNIMMA",
            photo: perpus,
            code:"Elementor, Wordpress, and CPanel",
            url: "https://lib.unimma.ac.id/"
        },
    ]
  return (
    <>
        <div id="projects" className='-ml-[57px] md:ml-0 mt-[230px] md:mt-0 pr-5 my-8 w-full min-h-[500px] flex flex-col justify-start items-start'>
           <div className='w-full'>
                <h1 className='font-bold text-[30px] w-[70%]'>
                    Projects I've Completed
                </h1>
                <div className='bg-[#3a0f6c] w-[200px] md:w-[400px] h-[2px]' />
           </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 mt-9'>
                {proj.map((link) => (
                    <>
                        <div className='w-[250px] md:w-[450px] h-[200px] md:h-[300px] overflow-hidden rounded-xl border-[2px] border-[#274c77] hover:border-[#104256] '>
                            <img
                                className='w-[250px] md:w-[450px] h-[120px] md:h-[200px] -z-10'
                                src={link.photo}
                                alt={link.name}
                            />
                            <a href={link.url} target="_blank" rel="noreferrer">
                                <div className='z-30 w-[250px] md:w-[450px] h-[80px] md:h-[100px] p-5 text-white overflow-hidden bg-[#274c77] hover:bg-[#104256]'>
                                   <p className='font-medium text-[18px] md:text-[20px]'>
                                        {link.name}
                                   </p>
                                   <p className='font-normal text-[12px] md:text-[16px] italic'>
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
                <div className='bg-[#3a0f6c] w-[200px] md:w-[400px] h-[2px]' />
                <div className='mt-8 font-semibold'>
                    <h1>
                        If you would like to learn more about 
                        my professional background, I kindly invite 
                        you to review my resume.
                    </h1>
                    <Link to="/portofolio/resume" >
                        <button className='hover:scale-110 mt-6 border-2 border-[#3a0f6c] px-4 py-2 rounded-full'>
                            Go to my resume
                        </button>
                    </Link>
                </div>
           </div>
        </div>
    </>
  )
}

export default Projects