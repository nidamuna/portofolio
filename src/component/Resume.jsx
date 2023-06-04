import React from "react";
import {BsLinkedin, BsGithub, BsTelegram, BsInstagram} from "react-icons/bs"
import Navbar from "./Navbar";
import Cpanel from '../assets/cpanel.jpg'
import Css from '../assets/css.svg'
import Elementor from '../assets/elementor.svg'
import Git from '../assets/git.svg'
import Github from '../assets/github.svg'
import Html from '../assets/html.svg'
import Java from '../assets/java.svg'
import Npm from '../assets/npm.svg'
import Php from '../assets/php.svg'
import Postman from '../assets/postman.svg'
import Python from '../assets/python.svg'
import Reactjs from '../assets/react.svg'
import Tailwind from '../assets/tailwind.png'
import Word from '../assets/wordpress.svg'
import Next from '../assets/next.png'
import myDocument from '../assets/myDocument.pdf';
import Icon from "./Icon";

const Resume = () => {

  const downloadFile = () => {
    const link = document.createElement('a');
    link.href = myDocument;
    link.download = 'myDocument.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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

  const front=[
    {
      name: "Html",
      icon: Html,
    },
    {
      name: "CSS",
      icon: Css,
    },
    {
      name: "JavaScript",
      icon: Java,
    },
    {
      name: "React Js",
      icon: Reactjs,
    },
    {
      name: "Next Js",
      icon: Next,
    },
    {
      name: "Tailwind CSS",
      icon: Tailwind,
    },
    {
      name: "Elementor",
      icon: Elementor,
    },
    {
      name: "WordPress",
      icon: Word,
    },
  ]

  const another=[
    {
      name: "npm",
      icon: Npm,
    },
    {
      name: "python",
      icon: Python,
    },
    {
      name: "php",
      icon: Php,
    },
    {
      name: "git",
      icon: Git,
    },
    {
      name: "Github",
      icon: Github,
    },
    {
      name: "Postman",
      icon: Postman,
    },
    {
      name: "CPanel",
      icon: Cpanel,
    },
  ]

  return (
   <>
      <div className="w-full h-auto p-8 md:p-16 bg-[#edede9] dark:bg-[#5e5e5e] text-[#393d3f]">
        <div className="bg-white dark:bg-[#edede9] p-5 rounded-xl shadow-xl">
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
              <div className="w-full pl-0 md:pl-10">
                  <div className='pr-5 my-8 w-full min-h-[500px] flex flex-col justify-start items-start'>
                    <h1 className='font-bold text-[20px] md:text-[30px] w-[70%]'>
                      Program Language I Use
                    </h1>
                    <div className='bg-[#3a0f6c] w-[250px] md:w-[300px] h-[2px]' />
                    <div className="w-[270px] md:w-[850px] bg-[#ebdbea] rounded-lg shadow-xl min-h-[200px] p-8 ml-0 md:ml-8 mt-8">
                      <h1 className="text-[16px] font-[450px] italic">
                        Program language I use for building client-side applications
                      </h1>
                      <div className="mt-10 grid gap-4 grid-cols-4 md:grid-cols-8">
                          {front.map((fronts) => (
                            <div className='hover:scale-110 flex justify-start items-center gap-1'>
                              <img
                                className="w-10"
                                src={fronts.icon}
                                alt={fronts.name}
                              />
                            </div>
                          ))}
                      </div>
                    </div>
                    <div className="w-[270px] md:w-[850px] bg-[#ebdbea] rounded-lg shadow-xl min-h-[200px] p-8 ml-0 md:ml-8 mt-8">
                      <h1 className="text-[16px] font-[450px] italic">
                        Another tech
                      </h1>
                      <div className="mt-10 grid gap-4 grid-cols-4 md:grid-cols-8">
                          {another.map((anot) => (
                            <div className='hover:scale-110 flex justify-start items-center gap-1'>
                              <img
                                className="w-10"
                                src={anot.icon}
                                alt={anot.name}
                              />
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
              </div>
              {/* work */}
              <div className="w-full pl-0 md:pl-10">
                  <div className='pr-5 my-8 w-full min-h-[500px] flex flex-col justify-start items-start'>
                  <h1 className='font-bold text-[20px] md:text-[30px] w-[70%]'>
                      Work Experience
                    </h1>
                    <div className='bg-[#3a0f6c] w-[250px] md:w-[300px] h-[2px]' />
                    <div className="w-[270px] md:w-[850px] bg-[#ebdbea] rounded-lg shadow-xl min-h-[200px] p-8 ml-0 md:ml-8 mt-8">
                      <div className="w-full md:w-[30%]">
                        <h1 className="text-[20px] font-semibold">
                          Frontend Developer
                        </h1>
                        <h1 className="text-[16px] font-[400px]">
                          Hayuning Indotech
                        </h1>
                      </div>
                      <div className="w-[3px] mx-5 bg-[#3a0f6c] rounded-full" />
                      <div>
                        <p className="text-[10px] italic">
                          2022 - 2023
                        </p>
                        <p className="text-[12px] mt-5">
                          Responsible for developing user interfaces on websites using React.js, Tailwind CSS, and Web3.   
                        </p>
                        <p className="text-[12px] mt-2">
                        Worked closely with the backend team, design team, DBA, DevOps team, and project manager to complete a project
                        </p>
                        <p className="text-[12px] mt-2">
                          Completed frontend tasks according to the given deadlines
                        </p>
                      </div>
                    </div>
                    <div className="w-[270px] md:w-[850px] bg-[#ebdbea] rounded-lg shadow-xl min-h-[200px] p-8 ml-0 md:ml-8 mt-8">
                    <div className="w-full md:w-[26%]">
                        <h1 className="text-[20px] font-semibold">
                          IT Staff
                        </h1>
                        <h1 className="text-[16px] font-[400px]">
                          The Library of Muhammadiyah University of Magelang
                        </h1>
                      </div>
                      <div className="w-[3px] mx-5 bg-[#3a0f6c] rounded-full" />
                      <div>
                        <p className="text-[10px] italic">
                          2021 - 2022
                        </p>
                        <p className="text-[12px] mt-5">
                          Responsible for conducting checks and updating the operating system and applications.
                        </p>
                        <p className="text-[12px] mt-2">
                          Perform checks on supporting devices and regularly back up all data in the library.                      </p>
                        <p className="text-[12px] mt-2">
                          Responsible for the existing system and network.                      
                        </p>
                        <p className="text-[12px] mt-2">
                          Redesign the library's website and manage its content.                      
                        </p>
                      </div>
                    </div>
                  </div>
              </div>
              {/* download */}
              <div className="w-full p-0 md:pl-10">
                  <div className='pr-5 my-8 w-full flex flex-col justify-start items-start'>
                  <h1 className='font-bold text-[20px] md:text-[30px] w-[70%]'>
                      Download it
                    </h1>
                    <div className='bg-[#3a0f6c] w-[200px] md:w-[300px] h-[2px]' />
                    <div className='mt-8 font-semibold'>
                        <h1>
                          You could obtain a copy of my resume by downloading it
                        </h1>
                          <button onClick={downloadFile} className='hover:scale-110 mt-6 border-2 border-[#3a0f6c] px-4 py-2 rounded-full'>
                            Download my resume
                          </button>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   </>
  );
}

export default Resume
