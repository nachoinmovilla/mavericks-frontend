import { useRouter } from 'next/router';
import React from 'react'

const Id = () => {

    const router = useRouter().query

    console.log("router", router)

    return (
        <div>            
            Enter
        </div>
    );
}

export default Id;