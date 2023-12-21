import React from 'react';
import { PropagateLoader } from 'react-spinners'; // Import the spinner of your choice

const ComponentLoader = () => {
    return (
        <div className="loading">
            <PropagateLoader color={'#36D7B7'} size={15} /> {/* Customize the color and size */}

        </div>
    );
};

export default ComponentLoader;