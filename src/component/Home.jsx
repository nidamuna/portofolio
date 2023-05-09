import React from "react";
import {BsLinkedin, BsGithub, BsInstagram, BsTelegram} from "react-icons/bs"
import Navbar from "./Navbar";
import Hero from "./Hero";
import Service from "./Service";
import Projects from "./Projects";

function Home() {
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
            <div className="w-full pl-5 md:pl-10">
                <Hero />
                <Service />
                <Projects />
            </div>
          </div>
        </div>
      </div>
   </>
  );
}

export default Home;
