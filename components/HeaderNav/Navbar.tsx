import React from 'react'
import { IconBellRinging, IconMessage, IconLogout ,IconMenuDeep} from "@tabler/icons-react";
import Searchbox from './Searchbox';
import NotiIcon from './NotiIcon';
import MobileNav from './MobileNav';

const Navbar = () => {
  return (
    <section className=' flex pl-5 pr-6 lg:pr-14 pt-4 justify-between items-center sticky backdrop-blur-lg top-0 z-30'>
        <h2 className="sm:text-3xl font-bold">Dashboard</h2>
        {/* <Searchbox/> */}
        <div className='flex items-center gap-10'>
        <NotiIcon/>
        <NotiIcon/>
        <MobileNav/>
        </div>
    </section>
  )
}

export default Navbar