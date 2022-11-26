import React from 'react';
import BookingModal from '../../../components/BookingModal/BookingModal';

const CarDetails = ({ car, setBookingCar }) => {
    const { image, seller_name, original_price, resell_price, posted_in, name, used } = car;
    return (
        <div>

            <div className="card card-compact shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body text-center">
                    <h4 className='text-secondary text-2xl '>Seller: {seller_name}</h4>
                    <h2 className="text-3xl font-semibold text-primary">{name}</h2>
                    <p className='text-secondary'>Original Price: <strong>{original_price}</strong></p>
                    <p className='text-secondary'>Resell Price: <strong>{resell_price}</strong></p>
                    <p className='text-secondary'>Posted in: {posted_in} minutes ago</p>
                    <p className='text-secondary'>Used in: {used} years</p>
                    <div className="card-actions justify-center">
                        <label
                            onClick={() => setBookingCar(car)}
                            htmlFor="booking-modal"
                            className="btn btn-primary text-white">Book Now</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarDetails;