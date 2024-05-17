"use client"

import React, { useEffect, useState } from "react"
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  VisibilityState,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { DropdownMenu as DropdownMenuComponent, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { useTranslation } from 'next-i18next';
import { CalendarIcon } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { format } from "date-fns"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Calendar } from "../ui/calendar"

export function DataTable({
  columns,
  data,
  contentTopLeft,
  contentTopRight,
  dateProp = '',
  filterSearch = 'email'
}) {

    const { t } = useTranslation()

    const [sorting, setSorting] = useState([])
    const [columnFilters, setColumnFilters] = useState([])
    const [columnVisibility, setColumnVisibility] = useState({})

    const [coinsSelected, setCoinsSelected] = useState([0, 60000]);
    const [coinsMax, setCoinsMax] = useState(60000)

    const [dateSelected, setDateSelected] = useState({})
    


    const table = useReactTable({
        data: data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        getSortedRowModel: getSortedRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
        },
        initialState: {
            pagination: {
                pageSize: 8,
            },
        },
    })


    return (
        <div>
            <div className="justify-between flex items-center py-4 space-x-4">
                <div>
                    {contentTopLeft}
                </div>
                <div className="flex items-center space-x-4">
                    <Input
                        placeholder={`filter ${filterSearch}...`}
                        value={(table.getColumn(filterSearch)?.getFilterValue()) ?? ""}
                        onChange={(event) =>
                            table.getColumn(filterSearch)?.setFilterValue(event.target.value)
                        }
                        className="max-w-sm"
                    />
                    <DropdownMenuComponent>
                        <DropdownMenuTrigger>
                            <Button variant="outline" className="ml-auto capitalize">
                                columns
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            {table
                            .getAllColumns()
                            .filter(
                                (column) => column.getCanHide()
                            )
                            .map((column) => {
                                return (
                                <DropdownMenuCheckboxItem
                                    key={column.id}
                                    className="capitalize"
                                    checked={column.getIsVisible()}
                                    onCheckedChange={(value) =>
                                    column.toggleVisibility(!!value)
                                    }
                                >
                                    {column.id}
                                </DropdownMenuCheckboxItem>
                                )
                            })}
                        </DropdownMenuContent>
                    </DropdownMenuComponent>
                    {dateProp &&
                        <Popover>
                            <PopoverTrigger>
                                <Button
                                    id="date"
                                    iconLeft={<CalendarIcon className="mr-2 h-4 w-4" />}
                                    variant={"outline"}
                                    className={`w-[300px] ${!dateSelected && "text-muted-foreground"} `}
                                >
                                    <span>
                                        {dateSelected?.from ? (
                                        dateSelected.to ? (
                                            <>
                                            {format(dateSelected.from, "LLL dd, y")} -{" "}
                                            {format(dateSelected.to, "LLL dd, y")}
                                            </>
                                        ) : (
                                            format(dateSelected.from, "LLL dd, y")
                                        )
                                        ) : (
                                        <span>pick_date</span>
                                        )}
                                    </span>
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                    initialFocus
                                    mode="range"
                                    defaultMonth={dateSelected?.from}
                                    selected={dateSelected}
                                    onSelect={handleFilterDate}
                                    numberOfMonths={2}
                                />
                            </PopoverContent>
                        </Popover>
                    }
                    {contentTopRight}
                </div>
            </div>
            <div className="rounded-t-md border">
                <Table>
                    <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                        {headerGroup.headers.map((header) => {
                            return (
                            <TableHead key={header.id}>
                                {header.isPlaceholder
                                ? null
                                : flexRender(
                                    header.column.columnDef.header,
                                    header.getContext()
                                    )}
                            </TableHead>
                            )
                        })}
                        </TableRow>
                    ))}
                    </TableHeader>
                    <TableBody>
                    {table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map((row) => (
                        <TableRow
                            key={row.id}
                            data-state={row.getIsSelected() && "selected"}
                        >
                            {row.getVisibleCells().map((cell) => (
                            <TableCell key={cell.id}>
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </TableCell>
                            ))}
                        </TableRow>
                        ))
                    ) : (
                        <TableRow>
                        <TableCell colSpan={columns.length} className="h-24 text-center">
                            No Results
                        </TableCell>
                        </TableRow>
                    )}
                    </TableBody>
                </Table>
            </div>
            <div className="flex items-center justify-between space-x-2 py-4 w-full px-6 border-b border-x rounded-b-md shadow-sm">
                <div className="text-sm text-muted-foreground">
                    {data?.length} results
                </div>
                <div className="flex items-center space-x-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        previous
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        next
                    </Button>
                </div>
                <div className="text-sm text-muted-foreground">
                    page{" "}{data?.length > 0 ? table?.getState()?.pagination?.pageIndex + 1 : 0} of{" "}
                    {table?.getState()?.pagination?.pageSize}
                </div>
            </div>
        </div>
    )
}
