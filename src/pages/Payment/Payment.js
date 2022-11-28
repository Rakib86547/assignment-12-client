import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutForm from './CheckoutForm/CheckoutForm';
import { useLoaderData } from 'react-router-dom';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
const Payment = () => {
    const bookings = useLoaderData();
    return (
        <div className='w-[400px] mx-auto mt-10 text-secondary'>
            <h1 className='text-secondary text-3xl font-semibold mb-5'>Payment for {bookings.itemName}</h1>
            <p className='mb-5'>Price:<strong>$ {bookings.price}</strong></p>
            <Elements stripe={stripePromise}>
                <CheckoutForm bookings={bookings} />
            </Elements>
        </div>
    );
};

export default Payment;