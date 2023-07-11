import React from 'react'
import { Separator } from "@/components/ui/separator"
import NavLinkGroup from './nav.link.group'
import { SibebarLists } from "@/components/utils/DummyData/data";
import UserProfileButton from './user.profile.button';

const Sidebar = () => {
  return (
    <nav className='h-screen sm:w-[250px] md:w-[230px] xl:w-[300px] 2xl:w-[330px] flex justify-between flex-col p-3 border-r-gray-300 border-r-[1px] overflow-hidden'>
        <div>
        <h1  className='md:text-xl lg:text-3xl font-bold text-blue-700 mb-2'>Smart Save</h1>
        <Separator className='my-4'/>
        <div className='flex flex-col gap-2 w-full'>
        {SibebarLists.map((list)=>(
            <NavLinkGroup key={list.id} data={list}/>
        ))}
        </div>
        </div>
        <UserProfileButton/>
    </nav>
  )
}

export default Sidebar