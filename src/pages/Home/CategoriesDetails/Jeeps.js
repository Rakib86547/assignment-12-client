import React from 'react';
import { useLoaderData } from 'react-router-dom';
import JeepsDetails from './JeepsDetails';

const Jeeps = () => {
    const jeeps = useLoaderData();

    return (
        <div>
            <div className='my-10'>
                <h1 className='text-4xl text-center text-secondary font-bold'>All Used <span className='text-primary'>Cars</span></h1>
            </div>
            <div className='grid gap-5 lg:grid-cols-3 md:grid-cols-2'>
                {
                    jeeps.map(jeep => <JeepsDetails
                        key={jeep._id}
                        jeep={jeep}
                    ></JeepsDetails>)
                }
            </div>
        </div>
    );
};

export default Jeeps;