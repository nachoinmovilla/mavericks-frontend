import Layout from '@/components/Layout';
import React from 'react'

export default function Home() {
    return (
        <Layout>
            <div className='flex items-start gap-4'>
                <div className='w-4/6 grid grid-cols-2 gap-4'>
                    <div className='col-span-1'>
                        <div className='rounded-xl bg-white shadow-sm h-96'>

                        </div>
                    </div>
                    <div className='col-span-1'>
                        <div className='rounded-xl bg-white shadow-sm h-96'>

                        </div>
                    </div>
                    <div className='col-span-2'>
                        <div className='rounded-xl bg-white shadow-sm h-96'>

                        </div>
                    </div>
                </div>
                <div className='w-2/6 grid grid-cols-1 gap-4 '>
                    <div className='rounded-xl bg-white shadow-sm h-80'>

                    </div>
                    <div className='rounded-xl bg-white shadow-sm h-40'>

                    </div>
                    <div className='rounded-xl bg-white shadow-sm h-96'>

                    </div>
                </div>
            </div>
        </Layout>
    );
}
