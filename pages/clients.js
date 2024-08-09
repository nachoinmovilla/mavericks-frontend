import Layout from '@/components/Layout';
import { DataTable } from '@/components/common/DataTable';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { getContacts } from '@/services/contacts/contacts.service';
import React, { useEffect, useState } from 'react'
import Router from 'next/router';
import { BiChevronDown, BiDotsHorizontalRounded, BiPlus } from 'react-icons/bi';

const Clients = () => {

  const [clientsList, setClientsList] = useState([])

    const columns = [
        // {
        //     accessorKey: "id",
        //     header: ({ column }) => {
        //       return (
        //         <Button
        //           variant="ghost"
        //           onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        //           iconRight={<BiChevronDown className="ml-2 h-4 w-4" />}
        //         >
        //           Id
        //         </Button>
        //       )
        //     },
        // },
        {
            accessorKey: "name",
            header: ({ column }) => {
              return (
                <Button
                  variant="ghost"
                  onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                  iconRight={<BiChevronDown className="ml-2 h-4 w-4" />}
                >
                  Name
                </Button>
              )
            },
            cell: ({ row }) => {
                const data = row.original
            
                return (
                  <div className='flex items-center space-x-3'>
                    <div className='w-12 h-12'>
                      <div className='w-12 h-12 rounded-full relative justify-center flex items-center'>
                        <img 
                          src={data?.photo} 
                          className='rounded-full object-none object-top w-full h-full' 
                        />
                        <span className='absolute font-semibold text-white'>
                          {data?.name?.[0]?.toUpperCase()}
                          {data?.name?.[1]?.toUpperCase()}
                        </span>
                      </div>
                    </div>
                    <div className="text-left">
                        <div className="text-md">
                            {data?.name}
                        </div>
                        <div className='text-gray-500'>
                            {data?.lastName}
                        </div>
                    </div>
                  </div>
                )
            },
        },
        {
          accessorKey: "email",
          header: ({ column }) => {
            return (
              <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                iconRight={<BiChevronDown className="ml-2 h-4 w-4" />}
              >
                Email
              </Button>
            )
          },
        },
        {
            accessorKey: "phone",
            header: ({ column }) => {
              return (
                <Button
                  variant="ghost"
                  onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                  iconRight={<BiChevronDown className="ml-2 h-4 w-4" />}
                >
                  phone
                </Button>
              )
            },
            cell: ({ row }) => {
                const data = row.original
            
                return (
                    <div className="">
                        <div className="text-md">
                            {data?.phone}
                        </div>
                    </div>
                )
            },
        },
        {
            id: "actions",
            cell: ({ row }) => {
              const data = row.original
         
              return (
                <div className="justify-end flex">
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <BiDotsHorizontalRounded className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Profile</DropdownMenuItem>
                            <DropdownMenuItem>Billing</DropdownMenuItem>
                            <DropdownMenuItem>Team</DropdownMenuItem>
                            <DropdownMenuItem>Subscription</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                        
                </div>
              )
            },
          },
    ]


    const handleGetContacts = () =>{
      getContacts({ page: 1}).then(res=>{
        console.log("contactos", res)
        if(res?.data?.data){
          setClientsList(res?.data?.data?.data)
        }
      })
    }

    useEffect(() => {
      handleGetContacts()
    }, [])
    


    return (
        <Layout>
            <div className='space-y-4'>
                <div className='bg-white p-4 rounded'>
                    <DataTable  
                        data={clientsList}
                        columns={columns}
                        contentTopLeft={<h1 className='text-4xl font-semibold'>Clients</h1>}
                        contentTopRight={<Button onClick={()=>Router.push('/clients/create')}><BiPlus />Añadir cliente</Button>}
                    />
                </div>
            </div>
        </Layout>
    );
}

export default Clients;