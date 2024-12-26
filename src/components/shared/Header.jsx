import React from 'react'
import { HiOutlineBell, HiOutlineChatAlt } from 'react-icons/hi'

const Header = () => {
  return (
    <div  className='bg-white h-16  px-4 flex justify-between items-center border-b '>
        <div className='relative'>
        <input type="text" placeholder='search...' className='text-sm focus:outline-none active:outline-none h-10 w-[24rem] border border-gray-300 rounded-sm px-4' />
        </div>
        <div className='flex items-center gap-2 mr-2 ' >
 

            <HiOutlineChatAlt className='cursor-pointer' fontSize={24}/>
             <HiOutlineBell  className='cursor-pointer'fontSize={24}/>
             </div>

    </div>
  )
}

export default Header