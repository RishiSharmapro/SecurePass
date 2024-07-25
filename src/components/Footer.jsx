import React from 'react'

const Footer = () => {
  return (
    <div className='sticky bottom-0 inset-0 bg-slate-800 shadow-sm font-mono w-full flex text-white p-4 justify-center space-x-2 items-center '>
        <div className="px-6 logo font-bold text-xl text-white">
              <span className='text-green-700'>&lt;</span>
            Secure
              <span className='text-green-700'>Pass/&gt;</span>
        </div>
        | Created with ❤️ by <a href="" className="text-green-700">Rishi Sharma</a>
    </div>
  )
}

export default Footer
