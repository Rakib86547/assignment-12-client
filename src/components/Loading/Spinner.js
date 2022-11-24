import React from 'react';

const Spinner = () => {
    return (
        <div>
            <div class="flex items-center justify-center space-x-2 animate-spin">
                <div class="w-6 h-6 border-dotted border-2 border-primary rounded-full"></div>
            </div>
        </div>
    );
};

export default Spinner;