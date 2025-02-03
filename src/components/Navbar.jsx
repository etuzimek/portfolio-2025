// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-scroll'

const Navbar = () => {

  const links = [
    {title: 'Banner', url: 'banner'},
    {title: 'Services', url: 'services'},
    {title: 'Projects', url: 'projects'},
    {title: 'Contact', url: 'contact'},
  ]
  return (
    <div className='w-full h-24 bg-[var(--primary) fixed'>
      <div className='w-full h-full max-w-[1200px] mx-auto px-2 lg:px-0'>
        {/* desktop menu */}
        <div className='flex h-full items-center justify-between'>
          {/* logo */}
          <div className='font-[allura] text-5xl font-bold'>
            <Link>ET .</Link>
          </div>

          {/* desktop-links */}
          <div className='flex'>
            {links.map((link, index) => (
              <div className='desktop-links' key={index}>
                <Link>{link.title}</Link>
              </div>
            ))}
          </div>

          <div>
            <Link className='btn'>Shoot me an Email</Link>
          </div>

        </div>

        {/* mobile menu */}
      </div>
    </div>
  )
}

export default Navbar