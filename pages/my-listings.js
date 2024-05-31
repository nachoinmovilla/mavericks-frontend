"use client";

import Layout from '@/components/Layout';
import ListingPreview from '@/components/common/ListingPreview';
import { Button } from '@/components/ui/button';
import React, { useRef, useState } from 'react'
import { BiFilter, BiGrid, BiGridAlt, BiListOl } from 'react-icons/bi';
import ReactMapGL, {Marker} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Input } from '@/components/ui/input';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

const MyListings = () => {

    const mapRef = useRef();

    const [markedListing, setMarkedListing] = useState(null)

    const [latitudeMap, setLatitudeMap] = useState(38.266566)
    const [longitudeMap, setLongitudeMap] = useState(-0.698154)

    const mapboxToken = "pk.eyJ1IjoibmFjaG9pbm1vdmlsbGEiLCJhIjoiY2x3YWY5Y3Z0MGJ1cDJqczJ4OXRmaXFocCJ9.PrCOUO8q3n6eQxzkeCbSKg"


    const handleSetLatitudeLongitude = (listing) =>{
        if(latitudeMap === listing?.latitude && longitudeMap === listing?.longitude){
            alert('Has clikado 2 veces, ejecutas la vista')
            return
        }
        setLatitudeMap(listing?.latitude)
        setLongitudeMap(listing?.longitude)
        mapRef.current.flyTo({center: [listing?.longitude, listing?.latitude]});
    }

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
        {
            type: "For Sell",
            rentType: null,
            image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            price: "76.278€",
            address: "3201 23rd St, San Francisco, CA 94110, USA",
            area: 250,
            bath: 2,
            garage: 2,
            room: 5,
            longitude: -0.689928,
            latitude: 38.264223
        },
        {
            type: "For Sell",
            rentType: null,
            image: "https://images.unsplash.com/photo-1510009489794-352fba39a0b8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            price: "64.289€",
            address: "3201 23rd St, San Francisco, CA 94110, USA",
            area: 250,
            bath: 2,
            garage: 2,
            room: 5,
            longitude: -0.692581,
            latitude: 38.270834
        },
        {
            type: "For Sell",
            rentType: null,
            image: "https://plus.unsplash.com/premium_photo-1661883964999-c1bcb57a7357?q=80&w=2028&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            price: "126.338€",
            address: "3201 23rd St, San Francisco, CA 94110, USA",
            area: 250,
            bath: 2,
            garage: 2,
            room: 5,
            longitude: -0.694468,
            latitude: 38.276564
        },
        {
            type: "For Sell",
            rentType: null,
            image: "https://images.unsplash.com/photo-1628012209120-d9db7abf7eab?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            price: "112.848€",
            address: "3201 23rd St, San Francisco, CA 94110, USA",
            area: 250,
            bath: 2,
            garage: 2,
            room: 5,
            longitude: -0.706871,
            latitude: 38.273639
        },
        {
            type: "For Sell",
            rentType: null,
            image: "https://images.unsplash.com/photo-1598737652403-6e0ee5bf5cf2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            price: "367.848€",
            address: "3201 23rd St, San Francisco, CA 94110, USA",
            area: 250,
            bath: 2,
            garage: 2,
            room: 5,
            longitude: -0.518501,
            latitude: 38.249485
        }
    ]

    return (
        <Layout noPadding>
            <div className='h-[calc(100vh-60px)] w-full flex'>
                <div className='w-7/12 h-full overflow-auto p-8 space-y-8'>
                    <div className='justify-between flex items-center'>
                        <div>
                            <span className='font-semibold text-lg'>My Listings (400 Units)</span>
                        </div>
                        <div className='flex items-center space-x-3'>
                            <Input 
                                placeholder="Search reference..."
                            />
                            <Button variant="outline" className="space-x-2">
                                <BiFilter />
                                <span>
                                    Filter
                                </span>
                            </Button>
                            <Button variant="outline" className="space-x-2">
                                <BiGridAlt />
                            </Button>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6'>
                        {LISTINGS?.map((listing, index)=>(
                            <div onClick={()=>handleSetLatitudeLongitude(listing)} onMouseEnter={()=>setMarkedListing(index)} onMouseLeave={()=>setMarkedListing(null)} key={index}>
                                <ListingPreview 
                                    data={listing}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className='w-5/12 h-full p-2 bg-white relative'>
                    <ReactMapGL
                        mapLib={import('mapbox-gl')}
                        ref={mapRef}
                        mapboxAccessToken={mapboxToken}
                        initialViewState={{
                            longitude: longitudeMap,
                            latitude: latitudeMap,
                            zoom: 14
                        }}
                        width="100%"
                        height="100%"
                        mapStyle="mapbox://styles/mapbox/light-v11"
                    >
                        {LISTINGS?.map((listing, index)=>(
                            <Marker key={index} longitude={listing?.longitude} latitude={listing?.latitude} anchor="bottom" >
                                <div className='relative justify-center flex'>
                                    <Popover>
                                        <PopoverTrigger className='absolute flex justify-center'>
                                            <div className={`absolute -top-9 font-semibold flex items-center space-x-1 text-lg px-4 border rounded-full hover:brightness-95 cursor-pointer ${markedListing === index ? 'bg-primary text-white' : 'bg-white'}`}>
                                                <span>{listing?.price}</span>
                                                {listing?.rentType && (
                                                    <span className={`text-sm ${markedListing === index ? 'text-white/80' : ' text-muted-foreground'}`}>
                                                        /{listing?.rentType}
                                                    </span>
                                                )}
                                            </div>
                                        </PopoverTrigger>
                                        <PopoverContent side="top" className="-translate-y-6 bg-transparent border-none shadow-none">
                                            <ListingPreview 
                                                data={listing}
                                            />
                                        </PopoverContent>
                                    </Popover>
                                    <div className='w-4 rounded-[50%] h-2 bg-black' />
                                </div>
                            </Marker>
                        ))}
                    </ReactMapGL>
                </div>
            </div>
        </Layout>
    );
}

export default MyListings;