import React from 'react'

function Navbar() {
  return (
    <nav className='bg-white borfer-gray-200 dark-bg-gray-900'>
      <div className="max-w-screen-xl flex  flex-wrap items-center justify-between mx-auto p-4 ">
         {/* Logo */}
         <div className="flex-shrink-0">
          <h1 className="text-xl font-bold text-gray-900  no-underline ">Logo</h1>
        </div>
        <div className="flex-grow items-center justify-center ">
          <ul className='flex items-center justify-center space-x-4 w-full text-black no-underline'>
            <li className='no-underline'>
            <a href="#" className="no-underline  font-semibold">
                movie list
              </a>
            </li>
            <li className='no-underline'>
            <a href="#" className="no-underline hover:underline font-semibold">
                movie vibe
              </a>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  )
}

export default Navbar