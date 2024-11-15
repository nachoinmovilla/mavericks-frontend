"use client"

import Layout from '@/components/Layout';
import React from 'react'
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from '@/components/ui/button';
import { BiCircle, BiDotsHorizontalRounded, BiLowVision, BiMoney, BiSolidCircle } from 'react-icons/bi';
import ListingPreview from '@/components/common/ListingPreview';
import { Progress } from "@/components/ui/progress"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), {
    ssr: false,
})



export default function Home() {

    const AGENTS = [
        {
            image: "https://media.licdn.com/dms/image/D4D12AQGsWiQQo-hEew/article-cover_image-shrink_720_1280/0/1705940048112?e=2147483647&v=beta&t=Dm3TYa8aaImrrYHEksUYyCuPe0mRjKNlrKcNMnKjlXc",
            name: "Jenny Fransisco",
            sold: 21,
            rent: 32,
            budget: "17.738€"
        },
        {
            image: "https://assets-global.website-files.com/639ff8596ae419fae300b099/641017314cc67fbb88c517a7_good-linkedin-profile-photo-right-expression-1000x1000.jpeg",
            name: "Jenny Fransisco",
            sold: 21,
            rent: 32,
            budget: "17.738€"
        },
        {
            image: "https://i.pinimg.com/736x/f8/66/8e/f8668e5328cfb4938903406948383cf6.jpg",
            name: "Jenny Fransisco",
            sold: 21,
            rent: 32,
            budget: "17.738€"
        },
        {
            image: "https://i.pinimg.com/736x/07/33/ba/0733ba760b29378474dea0fdbcb97107.jpg",
            name: "Jenny Fransisco",
            sold: 21,
            rent: 32,
            budget: "17.738€"
        },
    ]

    const LISTINGS = [
        {
            ref: "REF123456",
            type: "For Rent",
            rentType: "year",
            price: "3.375€",
            image: "https://images.unsplash.com/photo-1537726235470-8504e3beef77?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            address: "3201 23rd St, San Francisco, CA 94110, USA",
            area: 250,
            bath: 2,
            garage: 0,
            room: 5,
            longitude: -0.70107,
            latitude: 38.26218
        },
        {
            ref: "REF654321",
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
            ref: "REF789012",
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
    

    const gh1Options = {
        colors: ['#373ef6', "#34d399"],
        chart: {
          id: 'apexchart-example'
        },
        stroke: {
            curve: 'smooth',
        },
        grid: {
            borderColor: '#e2e8f0',
            xaxis: {
                lines: {
                    show: true
                }
            },   
            yaxis: {
                lines: {
                    show: true
                }
            }, 
        },
        markers:{
            size: 0,
        },
        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
            axisTicks: {
                show: false
            },
            labels: {
                style: {
                    colors: "#94a3b8",
                },
            }
        },
        legend: {
            show: false
        },
        yaxis: {
            show: false,
        }
    }

    const gh1Series = [{
        name: 'Total House Sold',
        data: [57, 61, 67, 59, 43, 37, 35]
    },{
        name: 'Total House Rented',
        data: [50, 52, 55, 53, 40, 48, 58]
    }]

    const gh2Series = [{
        name: 'Deal clients',
        data: [100, 37, 120]
      }, {
        name: 'Cancel clients',
        data: [140, 67, 139]
    }]

    const gh2Options = {
        colors: ['#34d399', '#fb923c'],
        markers:{
            size: 0,
        },
        grid: {
            borderColor: '#f1f5f9',
            strokeDashArray: 1,
        },
        legend: {
            show: false,
        },
        plotOptions: {
            bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: false,
            width: 2,
            colors: ['transparent']
        },
        xaxis: {
            categories: ['October', 'November', 'December'],
            axisTicks: {
                show: false
            },
            labels: {
                style: {
                    colors: "#94a3b8",
                },
            }
        },
        yaxis: {
            labels: {
                style: {
                    colors: "#94a3b8",
                },
            },
            tickAmount: 2
        },
        fill: {
            opacity: 1
        },
    }

    return (
        <Layout>
            <div className='lg:flex lg:items-start gap-4 space-y-4 lg:space-y-0'>
                <div className='w-full lg:w-4/6 grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <div className='col-span-1'>
                        <div className='rounded-xl bg-white shadow-sm p-6 space-y-6'>
                            <div className='justify-between flex items-center'>
                                <div className='w-full'>
                                    <div className='text-lg font-semibold'>
                                        Unit Analytics
                                    </div>
                                    <div className='text-muted-foreground'>
                                        This is your unit analytics
                                    </div>
                                </div>
                                <Button variant="outline">
                                    <BiDotsHorizontalRounded />
                                </Button>
                            </div>
                            <div className='justify-between flex items-center'>
                                <div className='w-full space-y-1'>
                                    <div className='border-l-2 pl-3 text-muted-foreground border-primary'>
                                        Total house sold
                                    </div>
                                    <div className='flex items-center space-x-2 text-2xl'>
                                        <span className='font-bold'>
                                            80
                                        </span>
                                        <span className='text-muted-foreground'>
                                            / 350
                                        </span>
                                    </div>
                                </div>
                                <div className='w-full space-y-1'>
                                    <div className='border-l-2 pl-3 text-muted-foreground border-emerald-400'>
                                        Total house rented
                                    </div>
                                    <div className='flex items-center space-x-2 text-2xl'>
                                        <span className='font-bold'>
                                            24
                                        </span>
                                        <span className='text-muted-foreground'>
                                            / 50
                                        </span>
                                    </div>
                                </div>
                            </div> 
                            <div className=''>
                                <Chart options={gh1Options} series={gh1Series} type="line" width={"100%"} height={320} /> 
                            </div>
                        </div>
                    </div>
                    <div className='col-span-1'>
                        <div className='rounded-xl bg-white shadow-sm p-6 space-y-6'>
                            <div className='justify-between flex items-center'>
                                <div className='w-full'>
                                    <div className='text-lg font-semibold'>
                                        Clients Overview
                                    </div>
                                    <div className='text-muted-foreground'>
                                        Analysis of your client data
                                    </div>
                                </div>
                                <Button variant="outline">
                                    <BiDotsHorizontalRounded />
                                </Button>
                            </div> 
                            <div className='bg-slate-100 rounded-xl p-4'>
                                <div className='border-l-2 pl-3 text-muted-foreground border-primary'>
                                    This client will increase when the clients deal with agent. So Agent can register the client data.
                                </div>
                            </div>
                            <div className='justify-between flex items-center'>
                                <div className='w-full space-y-1'>
                                    <div className='border-l-2 pl-3 text-muted-foreground border-primary'>
                                        Total clients
                                    </div>
                                    <div className='flex items-center space-x-2 text-2xl'>
                                        <span className='font-bold'>
                                            840
                                        </span>
                                    </div>
                                </div>
                                <div className='w-full space-y-1'>
                                    <div className='border-l-2 pl-3 text-muted-foreground border-emerald-400'>
                                        Deal clients
                                    </div>
                                    <div className='flex items-center space-x-2 text-2xl'>
                                        <span className='font-bold'>
                                            340
                                        </span>
                                    </div>
                                </div>
                                <div className='w-full space-y-1'>
                                    <div className='border-l-2 pl-3 text-muted-foreground border-orange-400'>
                                        Cancel clients
                                    </div>
                                    <div className='flex items-center space-x-2 text-2xl'>
                                        <span className='font-bold'>
                                            500
                                        </span>
                                    </div>
                                </div>
                            </div> 
                            <div className=''>
                                <Chart options={gh2Options} series={gh2Series} type="bar" width={"100%"} height={216} /> 
                            </div> 
                        </div>
                    </div>
                    <div className='col-span-1 lg:col-span-2'>
                        <div className='rounded-xl bg-white shadow-sm p-6 space-y-6'>
                            <div className='justify-between flex items-center'>
                                <div className='w-full'>
                                    <div className='text-lg font-semibold'>
                                        Listing
                                    </div>
                                    <div className='text-muted-foreground'>
                                        A list or catalog of units
                                    </div>
                                </div>
                                <div className='flex justify-center w-full'>
                                    <Tabs defaultValue="account" className="w-auto">
                                        <TabsList>
                                            <TabsTrigger value="account">For Rent</TabsTrigger>
                                            <TabsTrigger value="password">For Sale</TabsTrigger>
                                        </TabsList>
                                    </Tabs>
                                </div>
                                <div className='w-full hidden lg:flex justify-end'>
                                    <Button variant="outline">
                                        <BiDotsHorizontalRounded />
                                    </Button>
                                </div>
                            </div>  
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
                <div className='w-full lg:w-2/6 grid grid-cols-1 gap-4 '>
                    <div className='rounded-xl bg-white shadow-sm p-6 space-y-6'>
                        <div className='justify-between flex items-center'>
                            <div>
                                <div className='text-lg font-semibold'>
                                    Sales Data
                                </div>
                                <div className='text-muted-foreground'>
                                    This your sales analytic
                                </div>
                            </div>
                            <Button variant="outline">
                                Manage
                            </Button>
                        </div> 
                        <div className='bg-slate-100 rounded-lg p-4 space-y-1'>
                            <div className='text-muted-foreground flex items-center space-x-2'>
                                <BiMoney />
                                <span>
                                    Total Balance
                                </span>
                            </div>
                            <div className='flex items-center space-x-4'>
                                <span className='font-bold text-3xl'>
                                    337.614,28€
                                </span>
                                <BiLowVision className='text-xl text-muted-foreground cursor-pointer' />
                            </div>
                        </div> 
                        <div className='space-y-4'>
                            <div className='justify-between flex items-center text-lg'>
                                <span className='font-semibold w-20'>
                                    Active
                                </span>
                                <span className='font-semibold text-center'>
                                    60%
                                </span>
                                <Progress value={60} className="w-36 rounded h-6" />
                            </div>
                            <div className='justify-between flex items-center text-lg'>
                                <span className='font-semibold w-20'>
                                    Spending
                                </span>
                                <span className='font-semibold text-center'>
                                    15%
                                </span>
                                <Progress value={15} classNameBackground="bg-orange-400" className="w-36 rounded h-6" />
                            </div>
                            <div className='justify-between flex items-center text-lg'>
                                <span className='font-semibold w-20'>
                                    Savings
                                </span>
                                <span className='font-semibold'>
                                    25%
                                </span>
                                <Progress value={25} classNameBackground="bg-emerald-400" className="w-36 rounded h-6" />
                            </div>
                        </div>
                    </div>
                    <div className='rounded-xl bg-white shadow-sm p-6 space-y-4'>
                        <div className='justify-between flex items-center'>
                            <div>
                                <div className='text-lg font-semibold'>
                                    Sales Target
                                </div>
                                <div className='text-muted-foreground'>
                                    This your sales analytic
                                </div>
                            </div>
                            <Select>
                                <SelectTrigger className="w-24">
                                    <SelectValue placeholder="Year" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="year">Year</SelectItem>
                                    <SelectItem value="month">Month</SelectItem>
                                    <SelectItem value="week">Week</SelectItem>
                                    <SelectItem value="day">Day</SelectItem>
                                </SelectContent>
                            </Select>
                        </div> 
                        <div className='justify-between flex items-center'>
                            <div className='w-full'>
                                <div className='flex items-end space-x-1'>
                                    <span className='text-4xl font-bold'>340</span>
                                    <span className='text-muted-foreground text-xl'> / 400 Units</span>
                                </div>
                                <span className='text-muted-foreground'>
                                    Made this year
                                </span>
                            </div>
                            <div className='w-44 justify-end flex items-center'>
                                <div style={{ width: 100, height: 100 }}>
                                    <CircularProgressbar 
                                        value={67} 
                                        strokeWidth={25}
                                        styles={buildStyles({
                                            // Rotation of path and trail, in number of turns (0-1)
                                            rotation: 0,
                                        
                                            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                            strokeLinecap: 'butt',
                                        
                                            // Text size
                                            textSize: '16px',
                                        
                                            // How long animation takes to go from one percentage to another, in seconds
                                            pathTransitionDuration: 0.5,
                                        
                                            // Can specify path transition in more detail, or remove it entirely
                                            // pathTransition: 'none',
                                        
                                            // Colors
                                            pathColor: `#373ef6`,
                                            textColor: '#373ef6',
                                            trailColor: '#f1f5f9',
                                            backgroundColor: '#fff',
                                        })}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='rounded-xl bg-white shadow-sm p-6 space-y-4'>
                        <div className='justify-between flex items-center'>
                            <div>
                                <div className='text-lg font-semibold'>
                                    Agent List
                                </div>
                                <div className='text-muted-foreground'>
                                    Team that sells the unit
                                </div>
                            </div>
                            <Button variant="outline">
                                Details
                            </Button>
                        </div> 
                        <div>
                            {AGENTS?.map((agent, index)=>(
                                <div key={index} className={`py-4 flex items-center space-x-2 justify-between ${index !== 0 && 'border-t border-muted'}`}>
                                    <div className='flex items-center space-x-4'>
                                        <div className='w-14 h-14 rounded-full'>
                                            <div className='rounded-full w-14 h-14 relative'>
                                                <img src={agent?.image} className='object-cover w-full h-full rounded-full' />
                                            </div>
                                        </div>
                                        <div>
                                            <div className='font-semibold'>
                                                {agent?.name}
                                            </div>
                                            <div className='text-muted-foreground flex items-center space-x-2'>
                                                <span>
                                                    {agent?.sold} Sold
                                                </span>
                                                <BiSolidCircle className='text-[6px]' />
                                                <span>
                                                    {agent?.rent} Rent
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <span className='font-bold text-xl'>
                                        {agent?.budget}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
