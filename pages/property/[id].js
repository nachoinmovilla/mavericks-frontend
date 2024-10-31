import ListingPreview from '@/components/common/ListingPreview';
import Layout from '@/components/Layout';
import ReactMapGL, {Marker} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import React, { useRef, useState } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

const PropertyId = () => {

    const mapRef = useRef();

    const [markedListing, setMarkedListing] = useState(null)

    const [latitudeMap, setLatitudeMap] = useState(38.266566)
    const [longitudeMap, setLongitudeMap] = useState(-0.698154)

    const mapboxToken = "pk.eyJ1IjoibmFjaG9pbm1vdmlsbGEiLCJhIjoiY2x3YWY5Y3Z0MGJ1cDJqczJ4OXRmaXFocCJ9.PrCOUO8q3n6eQxzkeCbSKg"

    const listing = {
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
    }


    return (
        <Layout>
            <div className='grid grid-cols-3 gap-12'>
                <div className='col-span-1 space-y-4'>
                    <ListingPreview
                        data={listing}
                    />
                    <div className='w-full h-96 p-2 bg-white relative rounded-xl'>
                        <ReactMapGL
                            mapLib={import('mapbox-gl')}
                            ref={mapRef}
                            mapboxAccessToken={mapboxToken}
                            initialViewState={{
                                longitude: listing?.longitude,
                                latitude: listing?.latitude,
                                zoom: 14
                            }}
                            width="100%"
                            height="100%"
                            mapStyle="mapbox://styles/mapbox/light-v11"
                        >
                            <Marker longitude={listing?.longitude} latitude={listing?.latitude} anchor="bottom" >
                                <div className='relative justify-center flex'>
                                    <Popover>
                                        <PopoverTrigger className='absolute flex justify-center'>
                                            <div className={`absolute -top-9 font-semibold flex items-center space-x-1 text-lg px-4 border rounded-full hover:brightness-95 cursor-pointer bg-primary text-white`}>
                                                <span>{listing?.price}</span>
                                                {listing?.rentType && (
                                                    <span className={`text-sm text-white/80`}>
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
                        </ReactMapGL>
                    </div>
                </div>
                <div className='col-span-2 rounded-xl bg-white shadow-sm p-6 space-y-4'>
                </div>
            </div>
        </Layout>
    );
}

export default PropertyId;