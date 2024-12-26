import React from 'react'
import {FcBullish} from 'react-icons/fc'
import { DASHBOARD_SIDEBAR_LINKS ,DASHBOARD_SIDEBAR_BUTTONS_LINKS} from '../Assets/navigation'
import { Link } from 'react-router-dom'

 const LinkClasses = 'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-undrline active:bg-neutral-600 rounded-sm text-base'
const Sidebar = () => {
  return (
    <div className='bg-neutral-900 w-60 p-3 flex flex-col text-white'>
        <div className='flex items-center gap-2 px-1 py-3' >
            <FcBullish fontSize={30}/>
            <span className='text-neutral-100 text-xl'>OpenShop</span>
        </div>
        <div className='flex-1 '>
            {DASHBOARD_SIDEBAR_LINKS.map((item)=>(
                <SidebarLinks key={item.key}  item={item}/>
            ))}
        </div>
        <div><hr className='gap-2 px-3 my-2' />
        {DASHBOARD_SIDEBAR_BUTTONS_LINKS.map((item)=>(
                <SidebarLinks key={item.key}  item={item}/>
            ))}
        </div>
    </div>
  )
}

export default Sidebar

function SidebarLinks({item}) {
    return(
<Link to={item.path} className={LinkClasses}>
<span className='text-xl'>{item.icon}</span> 
{item.label}
</Link>
    ) 
}