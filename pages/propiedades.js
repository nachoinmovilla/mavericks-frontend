import React from 'react'

const Propiedades = () => {

    const PROPIEDADES_LISTA = [
        'Propiedad 1',
        'Propiedad 2', 
        'Propiedad 3'
    ]

    return (
        <div className='h-screen w-full bg-blue-100'>
            <div className='bg-red-400'>
                {PROPIEDADES_LISTA?.map((propiedad, index)=>(
                    <div key={index}>
                        {propiedad}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Propiedades;