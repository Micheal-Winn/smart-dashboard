import { Input } from '@/components/ui/input'
import React from 'react'
import { IconSearch } from '@tabler/icons-react'
import ButtonUtil from '@/components/utils/ButtonComponent/Button'
import { CustomerDataTable } from '@/components/TableComponents/CustomerTable/data.table'
import { transactionReportTableRowsData } from '@/components/utils/DummyData/data'
import transactionOverAllColumns from "@/components/TableComponents/TransactionComponents/TransactionAllReport/transaction.overall.columns"

const TransactionPage = () => {
  return (
    <main className="mt-4 px-2  sm:pl-2 xl:pl-8 sm:pr-2 xl:pr-8 pt-1">
      <section  className=" lg:flex justify-between items-center w-full mt-1 mb-4 pl-2 overflow-hidden">
        <h2 className="text-2xl font-semibold  text-gray-800 mb-3">Account Lists</h2>
        <div className=" w-full  md:w-[350px] flex md:gap-x-4 gap-y-3 flex-col md:flex-row px-1">
          <Input placeholder="Search" aria-label='search input' className='rounded-full sm:py-1'/>
          <ButtonUtil name='search' className='sm:px-6 xl:px-6 rounded-full bg-blue-600 hover:bg-blue-700 sm:py-1'/>
        </div>
      </section>
      <CustomerDataTable columns={transactionOverAllColumns} data={transactionReportTableRowsData}/>
    </main>
  )
}

export default TransactionPage