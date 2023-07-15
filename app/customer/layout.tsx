import React from 'react'
import Navbar from '@/components/HeaderNav/Navbar'

const CustomerListsRootLayout = ({
    children
}:{
    children:React.ReactNode;
}) => {
  return (
   <main className='overflow-y-scroll mb-1 h-screen'>
    <Navbar/>
    {children}
   </main>
  )
}

export default CustomerListsRootLayout