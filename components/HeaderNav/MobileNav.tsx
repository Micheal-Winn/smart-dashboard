import React from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import {IconMenuDeep} from "@tabler/icons-react"
  import { mobileLists } from '../utils/DummyData/data'
import Sidebar from '../Sidebar/Sidebar'
import NavLinkGroup from '../Sidebar/nav.link.group'
import UserProfileButton from '../Sidebar/user.profile.button'

const MobileNav = () => {
  return (
    <Sheet>
        <SheetTrigger>
            <IconMenuDeep size={24} className='md:hidden'/>
        </SheetTrigger>
        <SheetContent side={"left"} className='px-2 flex flex-col justify-between'>
            <section>
            <SheetHeader className='mb-6'>Menu</SheetHeader>
            {
                mobileLists.map((list)=>(
                    <NavLinkGroup key={list.id} data={list} mobile={true}/>
                ))
            }
            </section>
            <UserProfileButton/>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav