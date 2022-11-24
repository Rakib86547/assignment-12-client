import React from 'react';


const Banner = () => {
    return (
        <div className="hero min-h-screen rounded-md" style={{ backgroundImage: `url("https://i.ibb.co/sbMWj31/banner.jpg")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-white">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Welcome to The Car <span className='text-primary font-bold'>Masters</span></h1>
                    <p className="mb-5">Assertively pursue multimedia based web-readiness without real-time supply chains. Holisticly provide access to team driven action items rather than distributed niche markets. Collaboratively grow enabled.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;