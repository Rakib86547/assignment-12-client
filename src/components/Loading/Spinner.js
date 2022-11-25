import React from 'react';

const Spinner = () => {
    return (
        <div>
            <div className="flex items-center justify-center space-x-2 animate-spin">
                <div className="w-6 h-6 border-dotted border-2 border-white rounded-full"></div>
            </div>
        </div>
    );
};

export default Spinner;