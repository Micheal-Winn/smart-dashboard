import React from 'react'
import Navbar from '@/components/HeaderNav/Navbar'

const layout = (
    {children}:{children:React.ReactNode}
) => {
  return (
    <section className='h-screen overflow-y-scroll'>
        <Navbar/>
        {children}
    </section>
  )
}

export default layout