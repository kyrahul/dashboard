import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'
import { ChartBar } from './ChartBar'
import { Dashboard } from './Dashboard'
import {DataTable} from '../Assets/DataTable'


export const Layout = () => {
  return (
    <div className=' flex flex-row h-screen w-screen overflow-hidden'>
        <Sidebar/>
        <div  className='flex-1 p-4  '> 

        <div className='bg-teal-200'><Header/></div>
       <Dashboard/>
       <ChartBar/>
    <DataTable/>
        <div>{<Outlet/>}</div>

        </div>
       
       
    </div>
  )
}




