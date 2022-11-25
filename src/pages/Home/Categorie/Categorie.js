import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Categories from './Categories';

const Categorie = () => {
    // const categoriesCar = [
    //     {
    //         "car_id": "01",
    //         "name": "Jeep Cars",
    //         "about": "We sell used Jeeps cars at affordable prices. We have difference types of cars."
    //     },
    //     {
    //         "car_id": "02",
    //         "name": "Luxury Cars",
    //         "about": "We sell used Luxury cars at affordable prices. We have difference types of cars."
    //     },
    //     {
    //         "car_id": "03",
    //         "name": "Electrical Cars",
    //         "about": "We sell used electrical cars at affordable prices. We have difference types of cars."
    //     }
    // ]
    const { data: categoriesCar = [] } = useQuery({
        queryKey: ["categoriesCar"],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/category')
            const data = await res.json()
            return data
        }
    })
    return (
        <div>
            <div className='my-16'>
                <h1 className='text-4xl text-center font-bold text-secondary'>Categories</h1>
                <div className='grid gap-5 lg:grid-cols-3 md:grid-cols-2'>
                    {
                        categoriesCar.map(category => <Categories
                            key={category.id}
                            category={category}
                        ></Categories>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Categorie;