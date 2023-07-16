import React from 'react'
import { accountList } from '@/components/utils/DummyData/data'
import { CustomerDataTable } from '@/components/TableComponents/CustomerTable/data.table'
import {customerAccountsColumns} from '@/components/TableComponents/CustomerAccountsComponents/customer.accounts.columns'
import CreateBankAccountModal from '@/components/TableComponents/CustomerAccountsComponents/create.bank.account.modal'

const CustomerAccountsPage = () => {
  return (
    <main className="mt-4 px-4">
      <section className="flex flex-col md:flex-row justify-between  w-full pl-2 overflow-hidden">
        <h2 className="lg:text-base xl:text-2xl font-semibold my-3 text-gray-800">Account Lists</h2>
        <CreateBankAccountModal/>
      </section>
      <CustomerDataTable columns={customerAccountsColumns} data={accountList} />
    </main>
  )
}

export default CustomerAccountsPage