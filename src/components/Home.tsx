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
import React, { useEffect, useReducer, useRef, useState } from 'react';
import FrontFace from './FrontFace';
import ComputerScienceSection from './ComputerScienceSection';
import StudentReferenceSection from './StudentReferenceSection';
export default function Home() {
  const [resume, setResume] = useState(null);
  const handleResumeChange = (resume) => {
    // Update the parent's variable
    setResume(resume);
  };
  const scrollToRef = useRef(null);
  const scrollToForm = () => {
    // Scroll to the custom child component
    if (scrollToRef.current) {
      scrollToRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (

    
    <div className=" w-full flex items-center justify-center ">
      <div className="w-full justify-center" >
        <div style={{backgroundColor:"#88DFA0"}}>
        <FrontFace scrollTo={scrollToForm}/>
        </div>
        <hr/>
        <StudentReferenceSection/>
       
        <div className='w-full min-h-screen ' style={{backgroundImage: `url('${"background.jpg"}')`,
backgroundPosition: 'center',
backgroundSize: 'cover'}}>
        <ResumeForm setResume={handleResumeChange} scrollRef={scrollToRef}/> 
          </div>
          <ComputerScienceSection/>
        
    
      </div>
    </div>
    
  )
}
