import React from 'react';
import { PropagateLoader } from 'react-spinners'; // Import the spinner of your choice
import './ComponentLoader.css';
interface ComponentLoaderProps {
    is_uploading: boolean;
}
const ComponentLoader = (props: ComponentLoaderProps) => {
    return (
        <div className="loading-spinner-container">
        <div className="loading-spinner"></div>
        {props.is_uploading && <p>Generating your resume...</p>}
      </div>
    );
};

export default ComponentLoader;