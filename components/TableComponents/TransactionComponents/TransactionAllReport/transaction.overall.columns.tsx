"use client"

import React from 'react'
import { ColumnDef } from '@tanstack/react-table'
import { TransactionTableProps } from '@/Type'


const transactionOverAllColumns:ColumnDef<TransactionTableProps>[] = [
    {
        accessorKey:"accountNo",
        header:"Account No"
    },
    {
        accessorKey:"amount",
        header:"Amount"
    },
    {
        accessorKey:"flash",
        header:"Flash"
    },
    {
        accessorKey:"type",
        header:"Type"
    },
    {
        accessorKey:"date",
        header:"Date"
    },
    {
        id:"action",
        cell:()=><p>...</p>
    }
]

export default transactionOverAllColumns