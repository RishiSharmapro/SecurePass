/* eslint-disable no-unused-vars */
import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="bg-[#1a2235] text-white py-8 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center justify-center md:justify-start">
              <span className="text-white text-xl font-semibold">&lt;Secure</span>
              <span className="text-[#4CAF50] text-xl font-semibold">Pass/&gt;</span>
            </div>
          </div>
        <div className="text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} SecurePass. All rights reserved.</p>
        </div>
        <span className='text-xs md:text-base'>
            Created with ❤️ by <a href="https://github.com/RishiSharmapro" target="_blank" rel="noopener noreferrer" className="text-green-700 text-xs md:text-base">Rishi Sharma</a>
        </span>
        </div>
      </div>
    </footer>
  </>
  )
}

export default Footer
