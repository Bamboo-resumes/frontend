/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import ResumeForm from './ResumeForm'
import ResumeView from './ResumeView'
import ComponentLoader from '../common/Loader/ComponentLoader';
import { useLoading } from "../context/LoadingContext";
import React, { useEffect, useState } from 'react';
export default function Home() {
  const [resume, setResume] = useState(null);
  const handleResumeChange = (resume) => {
    // Update the parent's variable
    setResume(resume);
  };

  useEffect(() => {
    console.log(resume);
  },[resume])
  
  return (

    
    <div className="min-h-screen flex items-center justify-center">
      <div className="">
        {!resume && <ResumeForm setResume={handleResumeChange}/>}
        {resume && <ResumeView viewResume={resume}/>}
      </div>
    </div>
    
  )
}
