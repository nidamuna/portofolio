import React from 'react'
import {BsLinkedin, BsGithub, BsInstagram, BsTelegram} from "react-icons/bs"

const Icon = () => {
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
        <div className="flex">
            <div className=" flex flex-row w-full p-2 gap-5 -mt-[30px] items-center justify-center">
                  {links.map((link) => (
                     <div className="hover:scale-125">
                        <a href={link.url} target="_blank" rel="noreferrer">
                          {link.icon}
                        </a>
                     </div>
                  ))}
            </div>
        </div>
    </>
  )
}

export default Icon