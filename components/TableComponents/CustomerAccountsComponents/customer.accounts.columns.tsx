"use client"
import React from 'react'
import { ColumnDef } from '@tanstack/react-table'
import { TableData } from '@/Type'
import DepositeModal from './deposite.modal'

export const customerAccountsColumns:ColumnDef<TableData>[] = [
    {
        accessorKey:"name",
        header:"Customer Name"
    },
    {
        accessorKey:"nrc",
        header:"NRC"
    },
    {
        accessorKey:"phone",
        header:"Phone Number"
    },
    {
        accessorKey:"accountNo",
        header:"Account NO"
    },
    {
        accessorKey:"amount",
        header:"Amount"
    },
    {
        accessorKey:"accountType",
        header:"Account Type"
    },
    {
        accessorKey:"createdDate",
        header:"Created Date"
    },
    {
        accessorKey:"status",
        header:"Account Status",
        cell:({row})=><DepositeModal accountNum={`${row.original.accountNo}`}/>
    },
    {
        accessorKey:"action",
        cell:"...   "
    },
]

