/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import {FaLinkedin, FaGithub} from 'react-icons/fa'
import { FaInstagram, FaXTwitter } from "react-icons/fa6";

const Banner = () => {

  const socials = [
    {icon: <FaLinkedin/>, url: ''},
    {icon: <FaGithub/>, url: ''},
    {icon: <FaXTwitter/>, url: ''},
    {icon: <FaInstagram/>, url: ''},
  ]
  return (
    <div className='w-full h-screen'>
      <div className='pages'>
        {/* left */}
        <div className='flex flex-col'>
          <h1>Hi, I'm a</h1>
          <h1><span>Gdańsk</span>Based</h1>
          <h1>Frontend<span>Developer</span></h1>
          <p>
            I'm passionate about frontend development, UI/UX design, and building interactive, user-friendly web applications. I specialize in crafting modern, responsive websites using the latest web technologies, ensuring seamless user experiences.
          </p>

          {/* buttons */}
          <div>
            <button>Explore Projects</button>
            <button>Hire Me</button>
          </div>

          {/* social media links */}
          <div className='flex justify-center'>
            {socials.map((social, index) => (
              <div className='social-links' key={index}>
                <a href={social.url}>
                  {social.icon}
                </a>
              </div>
            ))}
          </div>
        </div>
        
        {/* right */}
      </div>
    </div>
  )
}

export default Banner