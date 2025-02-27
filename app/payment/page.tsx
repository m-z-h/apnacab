"use client"
import CheckOutForm from '@/components/Payment/CheckOutForm';
import { SelectedCarAmountContext } from '@/context/SelectedCarAmount'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useContext } from 'react'

function Payment() {
  // const {carAmount, setCarAmount}=useContext(SelectedCarAmountContext)
    

    const stripePromise=loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as any)

    const options:any={
        mode:'payment',
        amount:50,
        currency:'usd'
    };
  return (
    <Elements stripe={stripePromise} options={options}>
        <CheckOutForm/>
    </Elements>
  )
}

export default Payment