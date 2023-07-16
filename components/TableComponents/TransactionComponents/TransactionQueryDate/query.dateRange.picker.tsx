"use client"
import React from 'react'
import { ColumnDef } from '@tanstack/react-table'
import { DatePickerTableProps } from '@/Type'
import { DataTableRowActions } from '@/components/utils/TableUtilties/data-table-row-actions'


const columnsForDateRangePicker:ColumnDef<DatePickerTableProps>[] = [
    {
        accessorKey:"senderNo",
        header:"Sender Account Number"
    },
    {
        accessorKey:"receiverNo",
        header:"Receiver Account Number"
    },
    {
        accessorKey:"amount",
        header:"Amount"
    },
    {
        accessorKey:"date",
        header:"Transaction Date"
    },
    {
        id:"action",
        cell:"..."
        // cell:({row})=> <DataTableRowActions row={row}/>
    }
]

export default columnsForDateRangePicker