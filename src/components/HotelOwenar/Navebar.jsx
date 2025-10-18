import { UserButton } from '@clerk/clerk-react'
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white transition-all duration-300'>

        <Link to='/'>
         <img src="https://static.vecteezy.com/system/resources/thumbnails/047/247/050/small_2x/hotel-3d-illustration-png.png" alt="logo" 
         className='h-9 invert opacity-80'
         />
        </Link>
        <UserButton></UserButton>
      
    </div>
  )
}

export default Navbar
