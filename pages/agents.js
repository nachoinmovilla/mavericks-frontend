import Layout from '@/components/Layout';
import { DataTable } from '@/components/common/DataTable';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import React from 'react'
import { BiChevronDown, BiDotsHorizontalRounded } from 'react-icons/bi';


const Agents = () => {

    const columns = [
        {
            accessorKey: "id",
            header: ({ column }) => {
              return (
                <Button
                  variant="ghost"
                  onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                  iconRight={<BiChevronDown className="ml-2 h-4 w-4" />}
                >
                  Id
                </Button>
              )
            },
        },
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
            // cell: ({ row }) => {
            //     const data = row.original
            
            //     return (
            //         <div className="text-left">
            //             <div className="text-md">
            //                 {data?.playerId}
            //             </div>
            //             <div className='text-gray-500'>
            //                 {data?.name}
            //             </div>
            //         </div>
            //     )
            // },
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
            accessorKey: "budget",
            header: ({ column }) => {
              return (
                <Button
                  variant="ghost"
                  onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                  iconRight={<BiChevronDown className="ml-2 h-4 w-4" />}
                >
                  Budget
                </Button>
              )
            },
            cell: ({ row }) => {
                const data = row.original
            
                return (
                    <div className="">
                        <div className="text-md">
                            {data?.budget}€
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

    const data = [
        {
          "name": "John Doe",
          "email": "johndoe@example.com",
          "id": "12345678-1234-1234-1234-123456789abc",
          "budget": "100000"
        },
        {
          "name": "Jane Smith",
          "email": "janesmith@example.com",
          "id": "87654321-4321-4321-4321-987654321cba",
          "budget": "150000"
        },
        {
          "name": "Michael Johnson",
          "email": "michaeljohnson@example.com",
          "id": "abcd1234-ab12-ab12-ab12-abcdefghijkl",
          "budget": "200000"
        },
        {
          "name": "Emily Davis",
          "email": "emilydavis@example.com",
          "id": "efgh5678-cd34-cd34-cd34-abcdefghijkl",
          "budget": "120000"
        },
        {
          "name": "Robert Wilson",
          "email": "robertwilson@example.com",
          "id": "ijkl9012-ef56-ef56-ef56-abcdefghijkl",
          "budget": "180000"
        },
        {
          "name": "Jessica Taylor",
          "email": "jessicataylor@example.com",
          "id": "mnop3456-gh78-gh78-gh78-abcdefghijkl",
          "budget": "140000"
        },
        {
          "name": "David Anderson",
          "email": "davidanderson@example.com",
          "id": "qrst7890-ij12-ij12-ij12-abcdefghijkl",
          "budget": "160000"
        },
        {
          "name": "Sarah Martinez",
          "email": "sarahmartinez@example.com",
          "id": "uvwx1234-kl34-kl34-kl34-abcdefghijkl",
          "budget": "130000"
        },
        {
          "name": "Christopher Hernandez",
          "email": "christopherhernandez@example.com",
          "id": "yzab5678-mn56-mn56-mn56-abcdefghijkl",
          "budget": "170000"
        },
        {
          "name": "Amanda Lewis",
          "email": "amandalewis@example.com",
          "id": "cdef9012-op78-op78-op78-abcdefghijkl",
          "budget": "110000"
        },
        {
          "name": "Daniel Clark",
          "email": "danielclark@example.com",
          "id": "ghij3456-qr90-qr90-qr90-abcdefghijkl",
          "budget": "190000"
        },
        {
          "name": "Olivia Walker",
          "email": "oliviawalker@example.com",
          "id": "klmn7890-st12-st12-st12-abcdefghijkl",
          "budget": "135000"
        },
        {
          "name": "Matthew Hall",
          "email": "matthewhall@example.com",
          "id": "opqr1234-uv34-uv34-uv34-abcdefghijkl",
          "budget": "155000"
        },
        {
          "name": "Sophia Young",
          "email": "sophiayoung@example.com",
          "id": "wxyz5678-ab56-ab56-ab56-abcdefghijkl",
          "budget": "145000"
        },
        {
          "name": "Andrew King",
          "email": "andrewking@example.com",
          "id": "cdef9012-cd78-cd78-cd78-abcdefghijkl",
          "budget": "165000"
        },
        {
          "name": "Elizabeth Lee",
          "email": "elizabethlee@example.com",
          "id": "ghij3456-ef90-ef90-ef90-abcdefghijkl",
          "budget": "125000"
        },
        {
          "name": "Joshua Turner",
          "email": "joshuaturner@example.com",
          "id": "klmn7890-ij12-ij12-ij12-abcdefghijkl",
          "budget": "175000"
        },
        {
          "name": "Mia Scott",
          "email": "miascott@example.com",
          "id": "opqr1234-mn34-mn34-mn34-abcdefghijkl",
          "budget": "115000"
        },
        {
          "name": "David Adams",
          "email": "davidadams@example.com",
          "id": "wxyz5678-gh56-gh56-gh56-abcdefghijkl",
          "budget": "195000"
        }
    ]


    return (
        <Layout>
            <div className='space-y-4'>
                <h1 className='text-4xl font-semibold'>Agents</h1>
                <div className='bg-white p-4 rounded-lg'>
                    <DataTable
                        data={data}
                        columns={columns}
                    />
                </div>
            </div>
        </Layout>
    );
}

export default Agents;