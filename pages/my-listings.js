"use client";

import Layout from '@/components/Layout';
import ListingPreview from '@/components/common/ListingPreview';
import { Button } from '@/components/ui/button';
import React from 'react'
import { BiFilter } from 'react-icons/bi';
import ReactMapGL from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const MyListings = () => {

    const mapboxToken = "pk.eyJ1IjoibmFjaG9pbm1vdmlsbGEiLCJhIjoiY2x3YWY5Y3Z0MGJ1cDJqczJ4OXRmaXFocCJ9.PrCOUO8q3n6eQxzkeCbSKg"

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
            room: 5
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
            room: 5
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
            room: 5
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
            room: 5
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
            room: 5
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
            room: 5
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
            room: 5
        },
    ]

    return (
        <Layout noPadding>
            <div className='h-[calc(100vh-60px)] w-full flex'>
                <div className='w-7/12 h-full overflow-auto p-8 space-y-8'>
                    <div className='justify-between flex items-center'>
                        <span className='font-semibold text-lg'>My Listings (400 Units)</span>
                        <Button variant="outline" className="space-x-2">
                            <BiFilter />
                            <span>
                                Filter
                            </span>
                        </Button>
                    </div>
                    <div className='grid grid-cols-2 gap-6'>
                        {LISTINGS?.map((listing, index)=>(
                            <React.Fragment key={index}>
                                <ListingPreview 
                                    data={listing}
                                />
                            </React.Fragment>
                        ))}
                    </div>
                </div>
                <div className='w-5/12 h-full p-2 bg-white'>
                    <ReactMapGL
                        mapLib={import('mapbox-gl')}
                        mapboxAccessToken={mapboxToken}
                        initialViewState={{
                            longitude: -0.70107,
                            latitude: 38.26218,
                            zoom: 13
                        }}
                        width="100%"
                        height="100%"
                        mapStyle="mapbox://styles/mapbox/light-v11"
                    />
                </div>
            </div>
        </Layout>
    );
}

export default MyListings;