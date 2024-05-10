import React from 'react'
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const Layout = ({ children }) => {
    return (
        <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr] bg-muted">
            <Sidebar />
            <div className="flex flex-col h-screen overflow-auto">
                <main className="flex-1" >
                    <Navbar />
                    <div className='p-8'>
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Layout;