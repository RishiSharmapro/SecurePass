import React from 'react'

const Footer = () => {
  return (
    <div className='sticky bottom-0 sm:text-sm  bg-slate-800 shadow-sm font-mono w-full flex text-white p-4 sm:py-6 justify-center space-x-2 items-center '>
        <div className="md:px-6 logo font-bold text-xs md:text-xl text-white">
              <span className='text-green-700'>&lt;</span>
            Secure
              <span className='text-green-700'>Pass/&gt;</span>
        </div>
        <span className='text-xs md:text-base'>
            | Created with ❤️ by <a href="" className="text-green-700 text-xs md:text-base">Rishi Sharma</a>
        </span>
          
    </div>
  )
}

export default Footer
