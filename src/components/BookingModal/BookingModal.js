import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider';

const BookingModal = ({ bookingCar, setBookingCar }) => {
    
    const {name: bookingName, name, resell_price, image} = bookingCar;
    
    const { user } = useContext(AuthContext);

    const handleBookings = event => {
        event.preventDefault();
        const form = event.target;
        const name= form.name.value;
        const email= form.email.value;
        const price= form.price.value;
        const phone= form.number.value;
        const location= form.location.value;
        const booking = {
            name,
            itemName: bookingName,
            email,
            price,
            meeting_location: location,
            phone,
            image
        };
        fetch('https://the-car-masters-server.vercel.app/bookings', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged) {
                toast.success('your booking is confirmed');
                setBookingCar(null)
            }
        })
        
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <form onSubmit={handleBookings} className="modal-box">
                    <h3 className="font-bold text-2xl text-center text-secondary">{bookingName}</h3>
                    <div className='my-5'>
                        <input type="text" name='name' defaultValue={user?.displayName} disabled className="bg-slate-300 mb-3 border-primary input input-bordered w-full" />
                        <input type="text" name='email' defaultValue={user?.email} disabled className=" mb-3 border-primary input input-bordered w-full" />
                        <input type="text" name='item' defaultValue={name} disabled className=" mb-3 border-primary input input-bordered w-full" />
                        <input type="text" name='price' defaultValue={resell_price} disabled className=" mb-3 border-primary input input-bordered w-full" />
                        <input type="text" name='number' placeholder="phone number" className="text-secondary mb-3 border-primary input input-bordered w-full" />
                        <input type="text" name='location' placeholder="meeting location" className="text-secondary mb-3 border-primary input input-bordered w-full" />
                    </div>
                    <input type="submit" className='w-full bg-primary text-white py-3 rounded-md font-semibold cursor-pointer' value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default BookingModal;