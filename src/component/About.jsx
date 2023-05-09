import React from 'react'
import {BsLinkedin, BsGithub, BsInstagram, BsTelegram} from "react-icons/bs"
import Prof from '../assets/nida.png'
import Navbar from "./Navbar";
import Icon from './Icon';

const About = () => {
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
        {
            name: "Telegram",
            icon: <BsTelegram />,
            url: "https://t.me/nidamuna"
          },
      ]
  return (
    <>
      <div className="w-full h-auto p-8 md:p-16 bg-[#edede9] dark:bg-[#5e5e5e] text-[#393d3f]">
            <div className="bg-white dark:bg-[#edede9] p-5 rounded-xl shadow-xl overflow-hidden">
                <Navbar />
                <div className='w-full flex justify-center items-center md:hidden'>
                    <Icon />
                </div>
                <div className="flex">
                    <div className="hidden md:flex flex-col w-[50px] h-[500px] p-4 gap-5 items-center justify-center">
                        {links.map((link) => (
                            <div className="hover:scale-125">
                                <a href={link.url} target="_blank" rel="noreferrer">
                                {link.icon}
                                </a>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col">
                        {/* code */}
                        <div className="w-full p-0 md:pl-10">
                            <div className='pr-5 my-8 w-full min-h-[500px] flex flex-col justify-start items-start'>
                                <h1 className='font-bold text-[25px] md:text-[30px] w-[70%]'>
                                    Explore my profile
                                </h1>
                                <div className='bg-[#3a0f6c] w-[250px] md:w-[300px] h-[2px]' />
                                <div className='flex-col md:flex-row flex className="w-[850px] min-h-[200px] p-2 md:p-8 ml-0 md:ml-8 mt-8"'>
                                    <div className='w-[200px] h-[300px] mr-10 overflow-hidden'>
                                        <img src={Prof} alt='Nida Muna' className='scale-110'/>
                                    </div>
                                    <div className='w-full mt-6 md:mt-0 md:w-[60%]'>
                                        <h1 className='font-bold text-[30px] md:text-[40px] underline underline-offset-8'>
                                            Nida Muna Fadhilla
                                        </h1>
                                        <p className='text-[12px] italic mb-5'>
                                            Magelang, Indonesia
                                        </p>
                                        <p className='text-[12px] text-justify'>
                                            I am a graduate of a bachelor's degree in
                                             Information Technology with work 
                                             experience as a frontend developer. 
                                             I have experience building user-friendly
                                             and responsive user interfaces using 
                                             React.js, Tailwind CSS, and JavaScript.
                                             I am enthusiastic about continuing to 
                                             learn and acquiring new skills in web 
                                             development. I am used to working in a
                                             goal-oriented team with excellent 
                                             communication skills.
                                        </p>

                                    </div>
                                </div>
                                {/* Edu */}
                                <div className="w-[270px] md:w-[850px] bg-[#ebdbea] rounded-lg shadow-xl min-h-[200px] p-8 ml-0 md:ml-8 mt-8">
                                    <h1 className="text-[26px] font-semibold italic">
                                        My Education
                                    </h1>
                                    <div className='mt-6'>
                                        <p className='text-[20px] font-semibold'>
                                            Teknik Informatika S1
                                        </p>
                                        <p>
                                            Universitas Muhammadiyah Magelang
                                        </p>
                                        <div className='flex-col md:flex-row flex justify-between iems-start md:items-center text-[14px] md:text-[16px] mt-3 w-full md:w-[50%]'>
                                            <p className='italic'>
                                                September 2018 - Februari 2022
                                            </p>
                                            <p className='italic'>
                                                3.94
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* cert */}
                        <div className="w-full p-0 md:pl-10">
                            <div className='pr-5 my-8 w-full min-h-[500px] flex flex-col justify-start items-start'>
                            <h1 className='font-bold text-[20px] md:text-[30px] w-[70%]'>
                                    Certification
                                </h1>
                                <div className='bg-[#3a0f6c] w-[250px] md:w-[300px] h-[2px]' />
                                <div className="w-[270px] md:w-[850px] bg-[#ebdbea] rounded-lg shadow-xl min-h-[200px] p-8 ml-0 md:ml-8 mt-8">
                                    <h1 className='font-bold text-[18px]'>
                                        Certification Completeness: Front-End Development Libraries 
                                    </h1>
                                    <p className='italic mb-6'>
                                        freeCodeCamp.org (2022)
                                    </p>
                                    <h1 className='font-bold text-[18px]'>
                                        CCNAV7: Introducing to Networks
                                    </h1>
                                    <p className='italic mb-6'>
                                        Cisco Networking Academy (2022) 
                                    </p>
                                    <h1 className='font-bold text-[18px]'>
                                        Sertifikat Kompetensi: Software Development
                                    </h1>
                                    <p className='italic mb-6'>
                                        BNSP (2021) 
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* jurnal */}
                        <div className="w-full p-0 md:pl-10">
                            <div className='pr-5 my-8 w-full min-h-[500px] flex flex-col justify-start items-start'>
                            <h1 className='font-bold text-[20px] md:text-[30px] w-[70%]'>
                                    Publication
                                </h1>
                                <div className='bg-[#3a0f6c] w-[250px] md:w-[300px] h-[2px]' />
                                <div className="w-[270px] md:w-[850px] bg-[#ebdbea] rounded-lg shadow-xl min-h-[200px] p-8 ml-0 md:ml-8 mt-8">
                                    <h1 className='font-bold text-[18px]'>
                                        Optimization of Expert System for Agriculture Development of Zalacca Tree in Srumbung: A Literature Study                                    
                                    </h1>
                                    <p className='italic mb-6'>
                                        Proceedings of the 2nd Borobudur International Symposium on Humanities and Social Sciences / Nov 2022
                                    </p>
                                    <h1 className='font-bold text-[18px]'>
                                        Program Komputer Sistem Pakar Kesesuaian Lahan Salak Dengan Prolog dan Metode Forward Chaining                                    
                                    </h1>
                                    <p className='italic mb-6'>
                                        Surat Pencatatan Hak Cipta (Haki) / Apr 2022 
                                    </p>
                                    <h1 className='font-bold text-[18px]'>
                                        The Influence of Blockchain Implementation for Virtual Meetings at Home Learning Indonesia
                                    </h1>
                                    <p className='italic mb-6'>
                                        iJET Vol. 18 No. 06 (2023) / Mar 2023  
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default About