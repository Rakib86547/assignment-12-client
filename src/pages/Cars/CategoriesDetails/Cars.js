import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../../../components/BookingModal/BookingModal';
import CarDetails from './CarDetails';

const Cars = () => {
    const [bookingCar, setBookingCar] = useState(null);
    
    const cars = useLoaderData()
    return (
        <div>
            <div className='my-10'>
                <h1 className='text-4xl text-center text-secondary font-bold'>All Used <span className='text-primary'>Cars</span></h1>
            </div>
            <div className='grid gap-5 lg:grid-cols-3 md:grid-cols-2'>
                {
                    cars.map(car => <CarDetails
                    key={car._id}
                    car={car}
                    setBookingCar={setBookingCar}
                    ></CarDetails>)
                }
            </div> 
           
                {
                    bookingCar && <BookingModal
                    bookingCar={bookingCar}
                    ></BookingModal>
                }
            
           
        </div>
    );
};

export default Cars;