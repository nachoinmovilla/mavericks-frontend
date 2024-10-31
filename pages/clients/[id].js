import ListingPreview from '@/components/common/ListingPreview';
import Layout from '@/components/Layout';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import React from 'react'
import { BiBuilding, BiDotsHorizontalRounded, BiEnvelope, BiHomeAlt, BiPhone, BiPlus } from 'react-icons/bi';
import { LiaLanguageSolid } from "react-icons/lia";

const idClients = () => {

    const LISTINGS = [
        {
            type: "For Rent",
            rentType: "year",
            price: "3.375€",
            image: "https://images.unsplash.com/photo-1537726235470-8504e3beef77?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            address: "3201 23rd St, San Francisco, CA 94110, USA",
            area: 250,
            bath: 2,
            garage: 2,
            room: 5,
            longitude: -0.70107,
            latitude: 38.26218
        },
        {
            type: "For Rent",
            rentType: "year",
            image: "https://plus.unsplash.com/premium_photo-1674480165860-f60bcf6aa2f7?q=80&w=2026&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            price: "5.823€",
            address: "3201 23rd St, San Francisco, CA 94110, USA",
            area: 250,
            bath: 2,
            garage: 2,
            room: 5,
            longitude: -0.700593,
            latitude: 38.264584
        },
        {
            type: "For Sell",
            rentType: null,
            price: "97.778€",
            image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            address: "3201 23rd St, San Francisco, CA 94110, USA",
            area: 250,
            bath: 2,
            garage: 2,
            room: 5,
            longitude: -0.695082,
            latitude: 38.259255
        },
    ]

    return (
        <Layout>
            <div className='grid grid-cols-5 gap-16'>
                <div className='col-span-2'>
                    <div className='rounded-xl bg-white shadow-sm p-6 space-y-4'>
                        <div className='justify-between flex items-center'>
                            <span className='space-x-2 text-sm'>
                                <span className='text-gray-500'>ID Cliente</span>
                                <span>444526352</span>
                            </span>
                            <Badge variant="secondary">
                                RGPD Parcial
                            </Badge>
                        </div>
                        <div className='flex items-center space-x-6'>
                            <div className='w-20'>
                                <div className='w-20 h-20 rounded-full relative border'>
                                    <img src="https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg" className='object-cover w-full h-full rounded-full' />
                                </div>
                            </div>
                            <div className='space-y-1'>
                                <div className='font-semibold'>
                                    Carlos Sanchez
                                </div>
                                <div className='space-x-2 flex items-center text-sm text-gray-600'>
                                    <BiBuilding />
                                    <span>Valencia, España</span>
                                </div>
                                <div className='space-x-2 flex items-center text-sm text-gray-600'>
                                    <LiaLanguageSolid />
                                    <span>Castellano</span>
                                </div>
                            </div>
                        </div>
                        <div className='space-y-2'>
                            <div className='flex items-center space-x-2 text-sm '>
                                <BiEnvelope />
                                <span>
                                    carlossanchez@gmail.com
                                </span>
                            </div>
                            <div className='flex items-center space-x-2 text-sm '>
                                <BiPhone />
                                <span>
                                    +34 678 374 374
                                </span>
                            </div>
                        </div>
                        <div className='justify-between flex items-center'>
                            <div>
                                <div className='text-sm text-gray-500'>
                                    Gestionado por
                                </div>
                                <div className='flex items-center space-x-2 text-sm'>
                                    <div className='w-4'>
                                        <div className='w-4 h-4 rounded-full relative border'>
                                            <img src="https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg" className='object-cover w-full h-full rounded-full' />
                                        </div>
                                    </div>
                                    <span>
                                        Fernando Picado
                                    </span>
                                </div>
                            </div>
                            <div>
                                <div className='text-sm text-gray-500'>
                                    Última actualización
                                </div>
                                <div className='flex items-center space-x-2 text-sm'>
                                    <span>
                                        Hace 23 horas
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-span-3 space-y-4'>
                    <div className='font-semibold text-xl'>
                        Propiedades (0)
                    </div>
                    <div className='border-2 rounded-xl border-dashed p-8 justify-center flex items-center'>
                        <div className='text-center space-y-2'>
                            <div className='justify-center flex'>
                                <BiHomeAlt />
                            </div>
                            <div className='font-semibold text-lg justify-center flex'>
                                Sin Propiedades
                            </div>
                            <div className='text-gray-500 justify-center flex'>
                                Este contacto no tiene propiedades asignadas
                            </div>
                            <Button variant="outline" className="space-x-1">
                                <BiPlus />
                                <span>
                                    Nueva propiedad
                                </span>
                            </Button>
                        </div>
                    </div>


                    <div className='font-semibold text-xl pt-8'>
                        Propiedades (3)
                    </div>
                    <div className='rounded-xl bg-white shadow-sm p-6 space-y-6'>
                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                            {LISTINGS?.map((listing, index)=>(
                                <div key={index}>
                                    <ListingPreview
                                        data={listing}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default idClients;