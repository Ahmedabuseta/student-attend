"use client"

import { User } from "@prisma/client"
import { ColumnDef } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { ArrowUpDown, MoreHorizontal, Trash } from "lucide-react"

import axios from "axios"
import { useRouter  } from "next/navigation"

const deleteUser = async (nationalId:String) => {
  const router =useRouter()
  await axios.delete(`/api/delete-user/${nationalId}`)
  router.refresh()
}
export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "username",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          user name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "phone",
    header: "phone",
  },
  {
    accessorKey: 'governate',
    header: 'governate'
  },
  {
    accessorKey: "nationalId",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          national id
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },{
    accessorKey: "address",
    header: "Address",
  },
  {
    accessorKey: "garaduateYear",
    header: "graduated year",
  },
  {
    accessorKey: "goal",
    header: "goal",
  },
  {
    id: "actions",
    cell: ({ row }) => {
 
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={()=>deleteUser(row.original.nationalId)}
            >
              <Trash className="text-red-500 mr-2" /> Delete
            </DropdownMenuItem>
            <DropdownMenuSeparator />
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
