"use client"
import DateRangePicker from '@/components/TableComponents/TransactionComponents/TransactionQueryDate/DateRangePicker'
import React from 'react'
import columnsForDateRangePicker from "@/components/TableComponents/TransactionComponents/TransactionQueryDate/query.dateRange.picker"
import { datePickerTableRowsData } from '@/components/utils/DummyData/data'
import { CustomerDataTable } from '@/components/TableComponents/CustomerTable/data.table'

const TransactionQueryByDateRange = () => {
  return (
    <main className="mt-4 px-2 sm:pl-2 xl:pl-8 sm:pr-2 xl:pr-8 pt-1 !overflow-hidden">
        <section className="sm:inline-block lg:flex justify-between items-center w-full my-3 pl-2 overflow-hidden">
            <h2 className='mb-3  font-semibold  text-gray-800 text-md md:text-sm lg:text-base'>Transaction History Between Desired Date</h2>
            <DateRangePicker/>
        </section>
        <CustomerDataTable columns={columnsForDateRangePicker} data={datePickerTableRowsData}/>
    </main>
  )
}

export default TransactionQueryByDateRange