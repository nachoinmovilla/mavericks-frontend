import { useRouter } from 'next/router';
import React from 'react'

const UserId = () => {

    const router = useRouter().query

    console.log("router", router)

    return (
        <div>
            Enter
        </div>
    );
}

export default UserId;