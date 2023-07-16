
import React from 'react'
import Navbar from '@/components/HeaderNav/Navbar'

const TransactionRootLayout = ({
    children
}:
{
    children: React.ReactNode
}
) => {
  return (
    <main className='overflow-y-scroll h-screen'>
        <Navbar/>
        {children}
    </main>
  )
}

export default TransactionRootLayout