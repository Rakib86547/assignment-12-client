import React from 'react';
import { Link } from 'react-router-dom';

const Categories = ({ category }) => {
    const {name, id, about} = category;
    return (
        <div className="card shadow-xl text-center">
            <div className="card-body">
                <h2 className="text-4xl text-primary">{name}</h2>
                <p className='text-secondary'>{about}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary text-white"><Link to={`/category/${id}`}>See All</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Categories;