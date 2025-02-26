import React, { useContext, useState } from 'react';
import AutocompleteAddress from './AutocompleteAddress'
import Cars from './Cars'
import Cards from './Cards';
import { useRouter } from 'next/navigation';
import { SelectedCarAmountContext } from '@/context/SelectedCarAmount';

function Booking() {
    const screenHight=window.innerHeight*0.72;
    const {carAmount, setCarAmount}=useContext(SelectedCarAmountContext)
    const router:any= useRouter();
    return (
        <div className=' p-5 h-[90vh]'>
            <h2 className='mb-20  text-[25px] font-semibold'>Booking</h2>
            <div className='w-full max-w-md'>
                <div className='border-[2px] border-red-600 -mt-10'>
                    <AutocompleteAddress />
                    <Cars/>
                    <Cards/>
                    <button className={`w-full
                    bg-yellow-400 p-1 rounded-md mt-4 ${!carAmount?'bg-gray-400':null}`}
                    onClick={()=>router.push('/payment')}
                    >Book</button>
                    
                </div>
            </div>
        </div>
    )
}
export default Booking