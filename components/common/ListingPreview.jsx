"use client"

import React from 'react'
import { BiArea, BiBath, BiBed, BiSolidCarGarage } from 'react-icons/bi';
import { Badge } from '../ui/badge';




const ListingPreview = ({
    data
}) => {
    return (
        <div className='w-full bg-white shadow-sm border rounded-md hover:scale-[0.99] hover:brightness-[0.98] duration-200 transition-all hover:cursor-pointer'>
            <div className='h-52 rounded-t-md relative'>
                <div className='absolute top-2 left-2'>
                    <Badge variant="secondary">
                    {data?.ref}
                    </Badge>
                </div>
                <img src={data?.image} className='object-cover rounded-t-md w-full h-full' />
            </div>
            <div className='p-4 space-y-3'>
                <div className='flex justify-between items-center'>
                    <div>
                        <span className='font-semibold text-xl'>{data?.price}</span>
                        {data?.rentType &&
                        (
                            <span className='text-muted-foreground ml-2'>
                                / {data?.rentType}
                            </span>
                        )
                        }
                    </div>
                    <div className='border rounded-md font-semibold px-3 py-1'>
                        {data?.type}
                    </div>
                </div>
                <div className='truncate w-full text-sm text-muted-foreground'>
                    {data?.address}
                </div>
                <div className='grid grid-cols-2 gap-4 text-muted-foreground text-sm'>
                    <div className='flex items-center space-x-2'>
                        <BiArea />
                        <span>
                            {data?.area} SQFT
                        </span>
                    </div>
                    <div>
                        {data?.garage > 0 && (
                            <div className='flex items-center space-x-2'>
                                <BiSolidCarGarage />
                                <span>
                                    {data?.garage} Garage
                                </span>
                            </div>
                        )}
                    </div>
                    <div className='flex items-center space-x-2'>
                        <BiBath />
                        <span>
                            {data?.bath} Bathroom
                        </span>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <BiBed />
                        <span>
                            {data?.room} Bedroom
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListingPreview;