/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaInstagram, FaXTwitter } from 'react-icons/fa6';

const Banner = () => {
  const socials = [
    { icon: <FaLinkedin />, url: '' },
    { icon: <FaGithub />, url: '' },
    { icon: <FaXTwitter />, url: '' },
    { icon: <FaInstagram />, url: '' },
  ];
  return (
    <div className="w-full h-screen">
      <div className="pages flex justify-between items-center flex-col lg:flex-row">
        {/* left */}
        <div className="flex flex-col max-w-[700px] order-2 lg:order-1">
          <h1>Hi, I'm a</h1>
          <h1 className="text-2xl md:text-5xl">
            <span className="text-[var(--secondary)] pr-2">Gdańsk</span>Based -
          </h1>
          <h1 className="text-2xl md:text-5xl my-4">
            Frontend <span className="text-[var(--secondary)]">Developer</span>
          </h1>
          <p>
            I'm passionate about frontend development, UI/UX design, and
            building interactive, user-friendly web applications. I specialize
            in crafting modern, responsive websites using the latest web
            technologies, ensuring seamless user experiences.
          </p>

          {/* buttons */}
          <div>
            <button className='btn mx-4 my-4'>Explore Projects</button>
            <button className='btn mx-4 my-4'>Hire Me</button>
          </div>

          {/* social media links */}
          <div className="flex justify-center">
            {socials.map((social, index) => (
              <div className="social-links" key={index}>
                <a className='text-[1.3em]' href={social.url}>{social.icon}</a>
              </div>
            ))}
          </div>
        </div>

        {/* right */}
        <div className="order-1 lg:order-2">
          <img src="/images/edward.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
