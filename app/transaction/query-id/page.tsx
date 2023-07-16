import React from 'react'
import { Input } from '@/components/ui/input'
import ButtonUtil from '@/components/utils/ButtonComponent/Button'

import columnsForDateRangePicker from "@/components/TableComponents/TransactionComponents/TransactionQueryDate/query.dateRange.picker"
import { datePickerTableRowsData } from '@/components/utils/DummyData/data'
import { CustomerDataTable } from '@/components/TableComponents/CustomerTable/data.table'

const CustomerTransactionByIdPage = () => {
  return (
    <main className="mt-4 sm:pl-2 xl:pl-8 sm:pr-2 xl:pr-8 pt-1 px-2">
      <section className="lg:flex justify-between items-center w-full my-3  pl-2 overflow-hidden">
        <h2 className='mb-4 lg:mb-0  font-semibold  text-gray-800'>Transaction History Filter By Customer ID</h2>
        <div className=" md:w-[350px] flex gap-x-4">
          <Input placeholder="Enter customer Id" aria-label='search input' className='rounded-full py-1 sm:py-1'/>
          <ButtonUtil name='search' className='text-xs px-8 sm:px-6 py-1 xl:px-6 rounded-full bg-blue-600 hover:bg-blue-700 sm:py-1'/>
        </div>
      </section>
      <CustomerDataTable columns={columnsForDateRangePicker} data={datePickerTableRowsData}/>
    </main>
  )
}

export default CustomerTransactionByIdPage