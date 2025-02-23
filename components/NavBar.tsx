import React from 'react'
import Image from "next/image";
import { UserButton } from '@clerk/nextjs';
function NavBar() {
  return (
    <div className='flex justify-between p-0 px-10 border-b-[1px] shadow-sm'>
        <div className='flex gap-10 items-center'>
           <Image src='/logo.png' 
           alt='logo'
           width={120}
           height={80}
           />
           <div className='hidden md:flex gap-6 text-[18px] text-black font-semibold'>
            <h2 className='hover:bg-gray-300 p-2 rounded-md cursor-pointer transition-all'>Home</h2>
            <h2 className='hover:bg-gray-300 p-2 rounded-md cursor-pointer transition-all'>History</h2>
            <h2 className='hover:bg-gray-300 p-2 rounded-md cursor-pointer transition-all'>Help</h2>
        </div>
        </div>
        <UserButton afterSignOutUrl="/"/>
    </div>
  )
}

export default NavBar