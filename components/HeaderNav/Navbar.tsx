import React from 'react'
import { IconBellRinging, IconMessage, IconLogout } from "@tabler/icons-react";
import Searchbox from './Searchbox';
import NotiIcon from './NotiIcon';

const Navbar = () => {
  return (
    <section className=' flex pl-5 pr-14 pt-4 justify-between items-center sticky backdrop-blur-lg top-0 z-30'>
        <h2 className="sm:text-3xl font-bold">Dashboard</h2>
        <Searchbox/>
        <div className='flex items-center gap-10'>
        <NotiIcon/>
        <NotiIcon/>
        </div>
    </section>
  )
}

export default Navbar