import React, { useState} from 'react';
import '../ResumeForm.css';
interface TaskPopupProps {
  popupOpen: boolean;
  setPopupOpen: (open: boolean) => void;
  isExperience: boolean;
  onTaskChange: (task: any, type: string) => void;
}

const TaskPopup: React.FC<TaskPopupProps> = (props) => {

  const isExperience = props.isExperience;


  const [currentExperienceForm, setCurrentExperienceForm] = useState<any>({
    job_title: '',
    company_name: '',
    responsibilities: '',
  });

  const [currentEducationForm, setCurrentEducationForm] = useState<any>({
    school_name: '',
    degree: '',
    field_of_study: '',
  });

  const handleExperienceChange = (e) => {
    const { name, value } = e.target;
    setCurrentExperienceForm({
      ...currentExperienceForm,
      [name]: value,
    });
  };

  const handleEducationChange = (e) => {
    const { name, value } = e.target;
    setCurrentEducationForm({
      ...currentEducationForm,
      [name]: value,
    });
  };


  function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
   // console.log(event.target.value, event.target.name);
    if(isExperience){
        props.onTaskChange(currentExperienceForm, "experience");
        setCurrentExperienceForm({
            job_title: '',
            company_name: '',
            responsibilities: '',
            });
    }
    else{
        props.onTaskChange(currentEducationForm, "education");
        setCurrentEducationForm({
            school_name: '',
            degree: '',
            field_of_study: '',
            });
    }
    
    props.setPopupOpen(false)
  }



  return (
    <dialog
      className={`fixed top-0 left-0 z-99999 flex h-screen w-full justify-center overflow-y-scroll bg-black/80 py-5 px-4 ${props.popupOpen === true ? 'block' : 'hidden'}`}
    >
      <div  className="relative m-auto w-full max-w-180 rounded-sm border border-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-meta-4 sm:p-8 xl:p-10">
      <div className="flex justify-end mb-4">

      {/* <button onClick={handleToggle} className={`toggle-switch ${isChecked ? 'checked' : ''}`}>
        <span className="slider round"></span>
      </button> */}
      <button
        onClick={() => props.setPopupOpen(false)}
        className="ml-4"
      >
        <svg
          className="fill-current"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.8913 9.99599L19.5043 2.38635C20.032 1.85888 20.032 1.02306 19.5043 0.495589C18.9768 -0.0317329 18.141 -0.0317329 17.6135 0.495589L10.0001 8.10559L2.38673 0.495589C1.85917 -0.0317329 1.02343 -0.0317329 0.495873 0.495589C-0.0318274 1.02306 -0.0318274 1.85888 0.495873 2.38635L8.10887 9.99599L0.495873 17.6056C-0.0318274 18.1331 -0.0318274 18.9689 0.495873 19.4964C0.717307 19.7177 1.05898 19.9001 1.4413 19.9001C1.75372 19.9001 2.13282 19.7971 2.40606 19.4771L10.0001 11.8864L17.6135 19.4964C17.8349 19.7177 18.1766 19.9001 18.5589 19.9001C18.8724 19.9001 19.2531 19.7964 19.5265 19.4737C20.0319 18.9452 20.0245 18.1256 19.5043 17.6056L11.8913 9.99599Z"
            fill=""
          />
        </svg>
      </button>
    </div>

    <div className="flex items-center justify-center mb-4">
      <h2 className="text-xl font-bold text-black dark:text-white">
        {isExperience ? "Add Experience" : "Add Education"}
      </h2>
    </div>


        <div>
          <div className="mb-5">
            <label
              htmlFor="taskTitle"
              className="mb-2.5 block font-medium text-black dark:text-white"
            >
              {isExperience ? "job title" : "school name"}
            </label>
            <input
              type="text"
              placeholder="Enter task title"
              className="w-full rounded-sm border border-stroke bg-white py-3 px-4.5 focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-boxdark dark:focus:border-primary"
              name={isExperience ? "job_title" : "school_name"}
              value={isExperience ? currentExperienceForm.job_title : currentEducationForm.school_name}
              onChange={isExperience ? handleExperienceChange : handleEducationChange}
            
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="taskTitle"
              className="mb-2.5 block font-medium text-black dark:text-white"
            >
              {isExperience ? "company name" : "degree"}
            </label>
            <input
              type="text"
              placeholder="Enter task title"
              className="w-full rounded-sm border border-stroke bg-white py-3 px-4.5 focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-boxdark dark:focus:border-primary"
              name={isExperience ? "company_name" : "degree"}
              value={isExperience ? currentExperienceForm.company_name : currentEducationForm.degree}
              onChange={isExperience ? handleExperienceChange : handleEducationChange}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="taskTitle"
              className="mb-2.5 block font-medium text-black dark:text-white"
            >
              {isExperience ? "responsibilities" : "field of study"}
            </label>
            <input
              type="text"
              placeholder="Enter task title"
              className="w-full rounded-sm border border-stroke bg-white py-3 px-4.5 focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-boxdark dark:focus:border-primary"
                name={isExperience ? "responsibilities" : "field_of_study"}
                value={isExperience ? currentExperienceForm.responsibilities : currentEducationForm.field_of_study}
                onChange={isExperience ? handleExperienceChange : handleEducationChange}
            />
          </div>

          <button 
            className="flex w-full items-center justify-center gap-2 rounded py-2.5 px-4.5 font-medium text-white"
            type="submit"
            style={{ backgroundColor: 'green'}}
            onClick={handleFormSubmit}
            >
                {isExperience ? "Add Experience" : "Add Education"}
                </button>
           
        </div>
      </div>
    </dialog>
  );
};

export default TaskPopup;
