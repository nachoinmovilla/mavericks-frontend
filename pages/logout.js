import Router from 'next/router';
import React, { useEffect } from 'react'

const Logout = () => {

    useEffect(() => {
        Router.push('/login')
    }, [])
    

    return (
        <div>
            Signing out...
        </div>
    );
}

export default Logout;