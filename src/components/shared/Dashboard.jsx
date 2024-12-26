import React from 'react'
import {IoBagHandle} from 'react-icons/io5'

export const Dashboard = () => {
  return (
  
    <div className='flex mt-4   '  >
    <DashnoardStatsGrid/>
    </div>
    
  )
}


function DashnoardStatsGrid() {
  return(
    
   <div className='flex gap-4  w-full'>
    <BoxWrapper >
      <div className='rounded-full  h-12 w-12  flex items-center justify-center  bg-sky-500'>
        <IoBagHandle className=' text-2xl  text-white'/>
        
        </div>
        <div className='p-2'>
          <span className=' text-sm text-gray-500 font-light'>Total Sales</span>
          <div className=' items-center '>
            <strong className='text-sm text-gray-700 font-semibold'>$777.34</strong>
            <span className='text-sm text-green-500 p-2'>+232</span>
          </div>
        </div>
        
    </BoxWrapper>
    <BoxWrapper>   <div className='rounded-full  h-12 w-12  flex items-center justify-center  bg-orange-500'>
        <IoBagHandle className=' text-2xl  text-white'/>
        
        </div>
        <div className='p-2'>
          <span className=' text-sm text-gray-500 font-light'>Total Sales</span>
          <div className=' items-center '>
            <strong className='text-sm text-gray-700 font-semibold'>$777.34</strong>
            <span className='text-sm text-green-500 p-2'>+232</span>
          </div>
        </div></BoxWrapper>
    <BoxWrapper>   <div className='rounded-full  h-12 w-12  flex items-center justify-center  bg-yellow-500'>
        <IoBagHandle className=' text-2xl  text-white'/>
        
        </div>
        <div className='p-2'>
          <span className=' text-sm text-gray-500 font-light'>Total Sales</span>
          <div className=' items-center '>
            <strong className='text-sm text-gray-700 font-semibold'>$777.34</strong>
            <span className='text-sm text-green-500 p-2'>+232</span>
          </div>
        </div></BoxWrapper>
    <BoxWrapper>   <div className='rounded-full  h-12 w-12  flex items-center justify-center  bg-green-500'>
        <IoBagHandle className=' text-2xl  text-white'/>
        
        </div>
        <div className='p-2'>
          <span className=' text-sm text-gray-500 font-light'>Total Sales</span>
          <div className=' items-center '>
            <strong className='text-sm text-gray-700 font-semibold'>$777.34</strong>
            <span className='text-sm text-green-500 p-2'>+232</span>
          </div>
        </div></BoxWrapper>
  
    </div>
 
  )
  
}

function BoxWrapper({children}) {
  return(
<div className='bg-white flex-1 rounded-sm  p-1  border border-gray-200  flex items-center '>{children}</div>
  )
}

