import React from 'react';

const JeepsDetails = ({ jeep }) => {
    const { image, name, original_price, posted_in, resell_price, used } = jeep;
    return (
        <div className="card card-compact shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body text-center">
                <h2 className="text-3xl font-semibold text-primary">{name}</h2>
                <p className='text-secondary'>Original Price: <strong>{original_price}</strong></p>
                <p className='text-secondary'>Resell Price: <strong>{resell_price}</strong></p>
                <p className='text-secondary'>Posted in: {posted_in} minutes ago</p>
                <p className='text-secondary'>Used in: {used} years</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary text-white">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default JeepsDetails;