import React, { useEffect } from 'react'
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Router from 'next/router';

const Layout = ({ children, noPadding = false }) => {

    useEffect(() => {
        if(!localStorage.getItem('token')){
            Router.push('/login')
        }
    }, [])
    

    return (
        <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr] bg-muted">
            <Sidebar />
            <div className="flex flex-col h-screen overflow-auto">
                <main className="flex-1" >
                    <Navbar />
                    <div className={!noPadding && 'p-8'}>
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Layout;