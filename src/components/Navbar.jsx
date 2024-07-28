import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className="flex justify-between items-center h-16 bg-slate-800 text-black relative shadow-sm font-mono" role="navigation ">
            <div className="pl-16 logo font-bold text-xl text-white flex item-center">
              {/* <img src="/src/assets/favicon.png" alt="" className='h-6'/> */}
              <span className='text-green-700'>&lt;</span>
            Secure
              <span className='text-green-700'>Pass/&gt;</span>
            </div>
            {/* <div className="px-4 cursor-pointer md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
            </div> */}
            <div className="px-4  text-white">
            {/* <Link to="/" className="m-2 p-2">Home</Link>
            <Link to="/" className="m-2 p-2">About</Link>
            <Link to="/" className="m-2 p-2">Services</Link>
            <Link to="/" className="m-2 p-2">Contact</Link> */}
            <div className="github w-fit md:pr-40">
            <Link to='https://github.com/RishiSharmapro/SecurePass' target='_blank'><img src="/github.svg" alt="github" /></Link>
            </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar