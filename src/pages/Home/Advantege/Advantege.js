import React from 'react';
import Advantages from './Advantages';

const Advantege = () => {
    const advantages = [
        {
            name: "Highly Secured",
            description: "We provide strong security for our all customers. We take various measures to ensure that customers get the right product"
        },
        {
            name: "Get an Offer",
            description: "We arrange special discounts on various occasions. We take steps so that customers can buy their favorite products at low prices"
        },
        {
            name: "Free Support",
            description: "We take necessary measures to solve various customer problems"
        }
    ]
    return (
        <div className='my-16'>
            <h1 className='text-4xl font-bold text-center text-secondary'>Our <span className='text-primary'>Advantages</span></h1>
            <div className='grid gap-5 lg:grid-cols-3 md:grid-cols-2'>
                {
                    advantages.map((advantage, i) => <Advantages
                        key={i}
                        advantage={advantage}
                    ></Advantages>)
                }
            </div>
        </div>
    );
};

export default Advantege;