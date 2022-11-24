import React from 'react';
import car1 from '../../../assestes/advertised/car-1.jpg';
import car2 from '../../../assestes/advertised/car-2.jpg';
import car3 from '../../../assestes/advertised/car-3.jpg';
import car4 from '../../../assestes/advertised/car-4.jpg';
import car5 from '../../../assestes/advertised/car-5.jpg';
import car6 from '../../../assestes/advertised/car-6.jpg';
import AdvertisedItems from './AdvertisedItems';

const Advertised = () => {
    const features = [
        {
            name: "Hyundai Santa",
            location: "123 Kathal St. california City,",
            feature: {
                speed: "4000 km",
                control: 'Manual',
                date: '2021',
                petrol: "Petrol",
                color: 'Gray'
            },
            img: car1,
            price: '$1000'
        },
        {
            name: "Toyota Prius",
            location: "123 Kathal St. california City,",
            feature: {
                speed: "4000 km",
                control: 'Manual',
                date: '2021',
                petrol: "Petrol",
                color: 'Blue'
            },
            img: car2,
            price: '$2000'
        },
        {
            name: "Toyota Prius specs",
            location: "123 Kathal St. california City,",
            feature: {
                speed: "4000 km",
                control: 'Manual',
                date: '2021',
                petrol: "Petrol",
                color: 'Red'
            },
            img: car3,
            price: '$1500'
        },
        {
            name: "Lexus GS F",
            location: "123 Kathal St. california City,",
            feature: {
                speed: "4000 km",
                control: 'Manual',
                date: '2021',
                petrol: "Petrol",
                color: 'Gray'
            },
            img: car4,
            price: '$1100'
        },
        {
            name: "Audi Q7 2018",
            location: "123 Kathal St. california City,",
            feature: {
                speed: "4000 km",
                control: 'Manual',
                date: '2021',
                petrol: "Petrol",
                color: 'Sky-Blue'
            },
            img: car5,
            price: '$800'
        },
        {
            name: "2020 Ford Mustang",
            location: "123 Kathal St. california City,",
            feature: {
                speed: "4000 km",
                control: 'Manual',
                date: '2021',
                petrol: "Petrol",
                color: 'Red'
            },
            img: car6,
            price: '$980'
        },
    ]
    return (
        <div className='my-16'>
            <div className='my-5'>
                <h1 className='text-secondary font-bold text-center text-4xl'>FEATURED CARS</h1>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5'>
                {
                    features.map((details, i) => <AdvertisedItems
                    key={i}
                    details={details}
                    ></AdvertisedItems>)
                }
            </div>
        </div>
    );
};

export default Advertised;