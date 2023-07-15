import React from 'react'
import { CustomerDataTable } from '@/components/TableComponents/CustomerTable/data.table'
import { customerLists } from '@/components/utils/DummyData/data'
import customerListColumns from '@/components/TableComponents/CustomerListsTableComponents/customer.lists.columns'

const CustomerPage = () => {
  return (
    <main className='px-4 pt-6'>
      <CustomerDataTable data={customerLists} columns={customerListColumns}/>
    </main>
  )
}

export default CustomerPage