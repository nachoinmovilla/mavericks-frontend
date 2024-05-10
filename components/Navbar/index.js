import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { BiChevronDown, BiSolidBell } from 'react-icons/bi';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

const Navbar = () => {
    return (
        <div className='bg-white h-[60px] border-b px-8 py-6 items-center flex justify-between sticky top-0'>
            <div>

            </div>
            <div className='flex justify-end items-center space-x-4'>
                <Popover>
                    <PopoverTrigger>
                        <div className='relative hover:bg-muted rounded-lg w-[38px] h-[38px] flex items-center justify-center'>
                            <BiSolidBell className='text-muted-foreground text-xl' />
                            <div className='absolute top-0 right-0 rounded-full bg-destructive text-white text-xs w-4 h-4 flex items-center justify-center '>
                                8
                            </div>
                        </div>
                    </PopoverTrigger>
                    <PopoverContent>
                        <div>
                            <div className='border-b font-semibold pb-2'>
                                Notifications
                            </div>
                            <div className='h-20'>

                            </div>
                        </div>
                    </PopoverContent>
                </Popover>
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <div className='flex items-center space-x-3 hover:bg-muted px-2 py-1 rounded-lg duration-200 transition-all'>
                            <div className='w-[38px] h-[38px] rounded-md bg-muted relative'>
                                <img src="https://source.boringavatars.com/beam/120/Stefan?colors=264653,f4a261,e76f51&square=true" className='w-full h-full object-cover rounded-md' />
                            </div>
                            <div className='text-left'>
                                <div className='font-semibold'>
                                    Micha Orpands
                                </div>
                                <div className='text-muted-foreground text-xs'>
                                    Administrator
                                </div>
                            </div>
                            <BiChevronDown />
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-[200px]">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>Billing</DropdownMenuItem>
                        <DropdownMenuItem>Team</DropdownMenuItem>
                        <DropdownMenuItem>Subscription</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
}

export default Navbar;