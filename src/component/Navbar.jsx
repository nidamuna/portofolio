import React from 'react'
import Logo from '../assets/logo.png'
import {BsPersonWorkspace, BsPersonFill} from 'react-icons/bs'
import {AiOutlineFileText} from 'react-icons/ai'
import {GrMail} from 'react-icons/gr'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const links = [
        {
          name: 'Projects',
          icon: <BsPersonWorkspace />,
          url: "#projects"
        },
        {
          name: 'Resume',
          icon: <AiOutlineFileText />,
          url: "/portofolio/resume"
        },
        {
          name: 'About Me',
          icon: <BsPersonFill />,
          url: "/portofolio/about"
        }
      ];
  return (
    <>
        <div className='w-full p-4 flex justify-between items-center cursor-pointer'>
            <a href="/portofolio">
                <img 
                    className='w-8 h-8 hover:scale-125'
                    src={Logo} 
                    alt="Nida Muna" 
                />
            </a>
            <div className='hover:scale-110 flex justify-center items-center gap-1'>
                <GrMail />
                <h1 className='font-medium text-[16px]'>
                    munanida@gmail.com
                </h1>
            </div>
            <div className='w-[500px] flex justify-end items-center gap-5'>
                {links.map((link) => (
                    <Link to={link.url} >
                        <div className='hover:scale-110 flex justify-start items-center gap-1'>
                            {link.icon}
                            <h1 className='font-medium text-[16px]'>
                                {link.name}
                            </h1>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    </>
  )
}

export default Navbar