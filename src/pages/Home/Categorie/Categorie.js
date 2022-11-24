import React from 'react';
import Categories from './Categories';

const Categorie = () => {
    const categoriesCar = [
        {
            "id": "01",
            "name": "Jeep Cars"
        },
        {
            "id": "02",
            "name": "Luxury Cars"
        },
        {
            "id": "03",
            "name": "Electrical Cars"
        }
    ]
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