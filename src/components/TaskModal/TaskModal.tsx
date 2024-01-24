import React, { useState } from 'react';

interface TaskModalProps {
    experience?: any;
    education?: any;
    onTaskChange: (tasks: any, type: string) => void;
    isModalOpen: boolean;
    setIsModalOpen: (isModalOpen: boolean) => void;
    isExperience: boolean;
}

function TaskModal(props: TaskModalProps){
    const isExperience = props.isExperience;
    const isModalOpen = props.isModalOpen;
    const [responsibility, setResponsibility] = useState<string>("");
    const [currentExperienceForm, setCurrentExperienceForm] = useState<any>({
        job_title: '',
        company_name: '',
        responsibilities: [],
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

      function handleAddingResponsibility(){
        setCurrentExperienceForm({
            ...currentExperienceForm,
            responsibilities: [...currentExperienceForm.responsibilities, responsibility],
          });
          setResponsibility("");
      }

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
        
        props.setIsModalOpen(false)
      }

      function closeModal(){
        setCurrentEducationForm({
                    
                        school_name: '',
                        degree: '',
                        field_of_study: '',
                        });
        setCurrentExperienceForm({
                        job_title: '',
                        company_name: '',
                        responsibilities: '',
                        });
        props.setIsModalOpen(false);
    }
    



    return (
        <div class={`relative z-10 `} aria-labelledby="modal-title" role="dialog" aria-modal="true">
  <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

  <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
      <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
        <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start">
            <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
              <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">{props.isExperience ? "Experience" : "Education"}</h3>
              <div class="mt-2">
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
              className="w-full text-black rounded-sm border border-stroke bg-white py-3 px-4.5 focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-boxdark dark:focus:border-primary"
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
              className="w-full text-black rounded-sm border border-stroke bg-white py-3 px-4.5 focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-boxdark dark:focus:border-primary"
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
            {
                !isExperience && <input
                type="text"
                placeholder="Enter task title"
                className="w-full text-black rounded-sm border border-stroke bg-white py-3 px-4.5 focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-boxdark dark:focus:border-primary"
                  name={isExperience ? "responsibilities" : "field_of_study"}
                  value={isExperience ? currentExperienceForm.responsibilities : currentEducationForm.field_of_study}
                  onChange={isExperience ? handleExperienceChange : handleEducationChange}
              />
            }
            {
                isExperience &&  
                <div className='flex-col'>
                     <button type="button" disabled={responsibility === ""}  onClick={handleAddingResponsibility} style={{marginBottom: '10px'}}
                     className={`${responsibility === "" ? "bg-slate-400" : 'bg-green-400'} ${responsibility === "" ? "text-black" : 'text-white'} `}>
                        Add
                    </button>
                     <input
                                type="text"
                                placeholder="Enter task title"
                                className="w-full rounded-sm border border-stroke bg-white py-3 px-4.5 focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-boxdark dark:focus:border-primary"
                                name="responsibilities"
                                value={responsibility}
                                onChange={(e) => setResponsibility(e.target.value)}
                                />
                     {currentExperienceForm.responsibilities.map((response, index) => {
                    return (
                        <div className="flex items-center gap-2">
                            <div className="border rounded-lg p-2 bg-gray-200">
                                <p className="text-sm text-black dark:text-white">{response}</p>
                            </div>
                         </div>

                            
                        )})
                    }
                </div>
            }
            
          </div>
           
        </div>
            
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <button type="button" onClick={handleFormSubmit} class="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">Add</button>
          <button type="button" onClick={closeModal} class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</div>
    )
}

export default TaskModal