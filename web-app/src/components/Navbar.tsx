import React , {useState} from 'react'
function Navbar() {
  const [isLoggedIn, setIsLoggedIn] =useState(false);
  const [isMenuClicked , setIsMenuClicked] = useState(false);

  const handleClick=()=>{
    setIsMenuClicked(!isMenuClicked);
  }

  const handlelogin=()=>{
    setIsLoggedIn(true);
  }
  return (
    <nav className='bg-slate-800 ondary borfer-gray-200 dark-bg-gray-900 '>
      <div className="max-w-screen-xl flex  flex-wrap items-center justify-between mx-auto p-4 ">
         {/* Logo */}
         <div className="flex-shrink-0">
          <h1 className="text-2xl font-bold  no-underline ">Movie Hub</h1>
        </div>
        {/* Navigation link*/}
        <div className="hidden sm:flex flex-grow items-center justify-center bg-secondary">
          <ul className='flex items-center justify-center space-x-4 w-full  no-underline'>
            <li className='no-underline'>
            <a href="/MovieHub" className="text-base no-underline text-gray-300 hover:text-white transition-all duration-300 font-medium">
            Movie Hub
              </a>
            </li>
            <li className='no-underline'>
            <a href="/MoodMovie" className="text-base no-underline text-gray-300 hover:text-white transition-all duration-300 font-medium">
            Mood Movies
              </a>
            </li>
          </ul>
         </div>

         {/* Mobile Menu Button */}
         <div className="sm:hidden flex items-center">
          <button
            className="text-gray-300 hover:text-white focus:outline-none"
            aria-label="Toggle Menu"
            onClick={handleClick}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>

          </button>

    
      </div>
      </div>
         {/* for dropdown menu on mobile*/}
         {
          !isMenuClicked ? (
                    <div className="sm:hidden bg-gray-800 text-gray-300">

              <ul className=' w-full flex space-y-4 items-center flex-col'>
              <li className='no-underline shadow-md hover:border-b-2 transition-all duration-100 border-white'>
            <a href="/MovieHub" className=" text-xl no-underline text-gray-300 hover:text-white transition-all duration-300 font-medium">
            Movie Hub
              </a>
            </li>
            <li className='no-underline'>
            <a href="/MoodMovie" className="hover:border-b-2 transition-all duration-100 border-white text-xl no-underline text-gray-300 hover:text-white transition-all duration-300 font-medium">
            Mood Movies
              </a>
            </li>
              </ul>
            </div>
          ) :(
            <></>
          )
         }
    </nav>
  )
}

export default Navbar