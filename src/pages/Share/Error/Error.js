import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../../assestes/error/error.png';

const Error = () => {
    return (
        <section className="flex items-center h-full p-16 bg-white text-gray-100">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div className="max-w-md text-center">
                    <h2 className="mb-8 font-extrabold text-9xl text-gray-600">
                        {/* <span className="sr-only">Error</span>404 */}
                        <img src={error} alt="" />
                    </h2>
                    <p className="text-2xl text-secondary font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
                    <br />
                    <Link to="/" className="px-8 py-3 font-semibold rounded bg-primary text-white">Back to homepage</Link>
                </div>
            </div>
        </section>
    );
};

export default Error;