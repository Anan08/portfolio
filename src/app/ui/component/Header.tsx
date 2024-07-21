import React from 'react'
import { poppins } from '../fonts'
import Link from 'next/link'
import { CameraIcon } from '@heroicons/react/24/outline'
import NavLinks from '../nav-links'
import { usePathname } from 'next/navigation'

function Header() {
  return (
    <div className='flex flex-row justify-between  p-4 sticky top-0 bg-white'>
        <div className='flex '>
            <Link
            href='/'
            className='flex flex-row space-x-2 justify-between hover:bg-black hover:text-white rounded-md p-1'>
                <CameraIcon className='h-6 w-6 '/>
                <h1 className={`${(poppins.className)} font-bold`}>Ananda'<span className='text-orange-400'>s</span></h1>
            </Link>
            
        </div>
        <div className='flex flex-row justify-between space-x-4'>
            <NavLinks />
        </div>
        
    </div>
  )
}

export default Header