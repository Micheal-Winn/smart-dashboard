import Navbar from '@/components/HeaderNav/Navbar'
import React from 'react'

const AccountsPageLayout = ({
    children
}:{
    children:React.ReactNode
}) => {
  return (
    <main className='overflow-y-scroll h-screen'>
        <Navbar/>
        {children}
    </main>
  )
}

export default AccountsPageLayout