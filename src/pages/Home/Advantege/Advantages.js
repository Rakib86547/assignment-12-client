import React from 'react';

const Advantages = ({ advantage }) => {
    const { name, description } = advantage;
    return (
        <div className="card shadow-xl text-center">
            <div className="card-body">
                <h2 className="text-4xl text-primary">{name}</h2>
                <p className='text-secondary'>{description}</p>
            </div>
        </div>
    );
};

export default Advantages;