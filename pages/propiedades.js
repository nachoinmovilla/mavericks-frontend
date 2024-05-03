import React from 'react'
import { useTranslation } from 'next-i18next'

const Propiedades = () => {

    const { t } = useTranslation('footer')

    return (
        <div className='h-screen w-full bg-blue-100'>
            <div className='bg-red-400'>
                {t('hello')}
            </div>
        </div>
    );
}

export default Propiedades;