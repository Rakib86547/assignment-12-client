import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const BookingModal = ({ bookingCar }) => {
    
    const {name: bookingName} = bookingCar;
    const { user } = useContext(AuthContext);
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{bookingName}</h3>
                    <form className='my-5'>
                        <input type="text" placeholder="Type here" className=" mb-3 border-primary input input-bordered w-full" />
                        <input type="text" placeholder="Type here" className=" mb-3 border-primary input input-bordered w-full" />
                        <input type="text" placeholder="Type here" className=" mb-3 border-primary input input-bordered w-full" />
                        <input type="text" placeholder="Type here" className=" mb-3 border-primary input input-bordered w-full" />
                        <input type="text" placeholder="Type here" className=" mb-3 border-primary input input-bordered w-full" />
                    </form>
                    <div className="modal-action">
                        <label htmlFor="booking-modal" className="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;