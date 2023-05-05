import React from 'react'
import {BsLinkedin, BsGithub, BsInstagram} from "react-icons/bs"
import hli from '../assets/hli.png'
import mvn from '../assets/mvn.png'
import jataka from '../assets/jataka.png'
import digi from '../assets/digismart.png'
import perpus from '../assets/perpus.png'
import Navbar from './Navbar'

const Projects2 = () => {
    const links=[
        {
          name: "Linkedin",
          icon: <BsLinkedin />,
          url: "https://www.linkedin.com/in/nidamuna/"
        },
        {
          name: "Github",
          icon: <BsGithub />,
          url: "https://github.com/nidamuna"
        },
        {
          name: "Instagram",
          icon: <BsInstagram />,
          url: "https://github.com/nidamuna"
        },
      ]

    const proj=[
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
      <div className="w-full h-auto p-16 bg-[#edede9] dark:bg-[#5e5e5e] text-[#393d3f]">
        <div className="bg-white dark:bg-[#edede9] p-5 rounded-xl shadow-xl">
          <Navbar />
          <div className="flex">
            <div className="flex flex-col w-[50px] h-[500px] p-4 gap-5 items-center justify-center">
                  {links.map((link) => (
                     <div className="hover:scale-125">
                        <a href={link.url} target="_blank" rel="noreferrer">
                          {link.icon}
                        </a>
                     </div>
                  ))}
            </div>
                <div id="projects" className='px-8 my-8 w-full min-h-[500px] flex flex-col justify-start items-start'>
                    <div className='w-full'>
                            <h1 className='font-bold text-[30px] w-[70%]'>
                                Projects I've Completed
                            </h1>
                            <div className='bg-[#3a0f6c] w-[400px] h-[2px]' />
                    </div>
                        <div className='px-8 grid grid-cols-2 gap-10 mt-9'>
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
                </div>
            </div>
        </div>
      </div>
   </>
  )
}

export default Projects2