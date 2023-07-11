import React from 'react'
import { Input } from "@/components/ui/input"

const Searchbox = () => {
  return (
    <div className='flex items-center w-[350px]'>
        <Input type="text" placeholder="Search" className='rounded-full pl-5' />
    </div>
  )
}

export default Searchbox