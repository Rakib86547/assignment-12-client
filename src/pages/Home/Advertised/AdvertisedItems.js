import React from 'react';
import { FaMapMarkerAlt, FaRoad, FaDollyFlatbed, FaRegCalendarAlt, FaChargingStation, FaSun } from "react-icons/fa";

const AdvertisedItems = ({ details }) => {
    const { name, img, location, feature, price } = details;
    return (
        <div className="card  shadow-xl relative">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body sm:mx-auto w-full">
                <h2 className="card-title text-primary text-3xl">
                    {name}
                </h2>
                <h1 className='absolute right-2 bottom-[206px] text-3xl text-white'>{price}</h1>
                <p className='flex items-center text-secondary'><FaMapMarkerAlt className='text-primary'/>{location}</p>
                <div className="">
                    <p className='flex items-center text-secondary'> <FaRoad className='mr-2 ml-2 text-primary'/> {feature.speed} <FaDollyFlatbed className='mr-2 ml-2 text-primary'/> {feature.control} <FaRegCalendarAlt className='ml-2 mr-1 text-primary'/> {feature.date} </p>
                </div>

                <div className="">
                    <p className='flex items-center text-secondary'> <FaChargingStation className='mr-2 ml-2 text-primary' /> {feature.petrol} <FaSun  className='mr-2 ml-2 text-primary'/> {feature.color}</p>
                </div>

            </div>
        </div>
    );
};

export default AdvertisedItems;