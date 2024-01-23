import React, { useState, ChangeEvent, FormEvent, useEffect, useRef } from 'react';
import axios from 'axios';
import ResumeView from './ResumeView';
import { useLoading } from '../context/LoadingContext';
import {Link} from "react-router-dom";
import BambooLogo from '/bamboologo.jpg';
import BambooSolo from '/bamboo_solo.jpg';
import TaskList from './Tasks/TaskList';
import ComponentLoader from "../common/Loader/ComponentLoader";
import PdfViewer from './PDFViewer'; 
import { GrDocumentPdf } from "react-icons/gr";
import { saveAs } from 'file-saver';

export interface WorkExperience {
  
  job_title: string;
  company_name: string;
  responsibilities: string;
}

export interface EducationInterface {
  school_name: string;
  degree: string;
  field_of_study: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  skills: string[];
  education: EducationInterface[];
  experience: WorkExperience[];
  url: string;
  job_description: string;
}

interface ResumeFormProps {
  setResume: React.Dispatch<React.SetStateAction<any>>;
  scrollRef: any;
}

const ResumeForm: React.FC = (props: ResumeFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    skills: [] as string[],
    education: [],
    experience: [],
    url: '',
    job_description: ''
  });
  const setResume = props.setResume;
  const scrollToRef = props.scrollRef;
 // const { loading, setLoadingState } = useLoading();
  const [loading ,setLoading] = useState<boolean>(false);
  const [currentSkillsInput, setCurrentSkillsInput] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isExperience, setIsExperience] = React.useState<boolean>(false);
  const [tmpResume, setTmpResume] = useState<any>(null);
  const [fileContents, setFileContents] = useState(null);
  const [tabs, setTabs] = useState(1);
  const [uploadedResume, setUploadedResume] = useState(null);
  const [uploadResumeJobDescription, setUploadResumeJobDescription] = useState('');
useEffect(() => {
  console.log(uploadedResume);
},[uploadedResume])


  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Now, TypeScript recognizes e as a ChangeEvent related to a file input
    setResume(e.target.files[0]);
  };

  const handleInputChange = (e) => {
    setCurrentSkillsInput(e.target.value);
  };

  // const handleInputKeyDown = (e) => {
  //   e.preventDefault();
  //   setFormData((prevFormData) => {
  //     // Check if the property exists in the formData
  //       // If it's not an array, assume it's a single value, and create an array with both values
  //       return {
  //         ...prevFormData,
  //         [name]: [prevFormData[name], value],
  //       };
      


  //   });
  // };


  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    e.preventDefault();
    const { name, value } = e.target;
    console.log(name, value);
    
    setFormData((prevFormData) => {
      // Check if the property exists in the formData
        // If it's an array, append the new value
        // if (Array.isArray(prevFormData[name])) {
        //   return {
        //     ...prevFormData,
        //     [name]: [...prevFormData[name], value],
        //   };
        // }
        // If it's not an array, assume it's a single value, and create an array with both values
        if (Array.isArray(prevFormData[name]) && currentSkillsInput !== "") {
          setCurrentSkillsInput("");
          return {
            ...prevFormData,
            [name]: [...prevFormData[name], value],
          
          };

          
        } 
        return {
          ...prevFormData,
          [name]: value,
        };
      
    });
  };

  const handleUploadResume = (e): void => {
    e.preventDefault();
    console.log(e.target.files[0])
    setUploadedResume(e.target.files[0]);
  }

  const handleSectionChange = (sectionData, sectionKey: string) => {
    console.log(sectionData, sectionKey);
    if(sectionKey === "experDelete"){
      setFormData((prevFormData) => {
        // Assuming you have an array property named with the provided 'sectionKey' in your form data
        return {
          ...prevFormData,
          ['experience']: prevFormData['experience'].filter((_, i) => i !== sectionData),
        };
      });
      return;
    }

    if(sectionKey === "eduDelete"){
      setFormData((prevFormData) => {
        // Assuming you have an array property named with the provided 'sectionKey' in your form data
        return {
          ...prevFormData,
          ['education']: prevFormData['education'].filter((_, i) => i !== sectionData),
        };
      });
      return;
    }
    
      setFormData((prevFormData) => {
        // Assuming you have an array property named with the provided 'sectionKey' in your form data
        return {
          ...prevFormData,
          [sectionKey]: [...prevFormData[sectionKey], sectionData],
        };
      });
  };
  

  useEffect(() => {
    console.log(uploadedResume);
  },[uploadedResume])



  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    if(tabs ==1) {
      if(!uploadedResume){
        alert("Please upload a resume");
        return;
      } else {
        handleresumeSubmit();
        return;
    } 
  } else {
    if(!formData){
      alert("Please fill out the form");
      return;
    } else {
      handleformSubmit();
      return;
    }
  }
}

  async function handleresumeSubmit(){
    const API_ENDPOINT: string = "https://bamboo-backend-apeg6iz56q-uk.a.run.app/upload";

  try {
    // You can use the formData object to generate a resume or send the data to an API.
    // For this example, we will just log the data.
    

    // Make an API call to send the data to your server

    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    const formData = new FormData();
    formData.append('file', uploadedResume);
    formData.append('fileName', uploadedResume.name);
    formData.append('job_description', uploadResumeJobDescription);
    setLoading(true);
    await axios.post(API_ENDPOINT, formData, config)
      .then((response) => {
        //setFileContents(response.data);
        handleOpenPdf(response.data);
      })
      .catch((error) => {
        console.log(error);
      }).finally(() => {
        setLoading(false);
      })


    // You can also redirect the user or perform other actions based on the response.

  } catch (error) {
    console.error('API Error:', error);
    // Handle the error (e.g., show an error message to the user).
    }
  }

  async function handleformSubmit() {
    const API_ENDPOINT: string = "https://bamboo-backend-apeg6iz56q-uk.a.run.app/";

  try {
    // You can use the formData object to generate a resume or send the data to an API.
    // For this example, we will just log the data.
    

    // Make an API call to send the data to your server
    setLoading(true);
    await axios.post(API_ENDPOINT, formData)
      .then((response) => {
        
        handleOpenPdf(response.data);
      })
      .catch((error) => {
        console.log(error);
      }).finally(() => {
        setLoading(false);
      })


    // You can also redirect the user or perform other actions based on the response.

  } catch (error) {
    console.error('API Error:', error);
    // Handle the error (e.g., show an error message to the user).
    }
  }

  useEffect(() => {
    console.log(fileContents)
  })

  const handleOpenPdf = (pdfContent) => {
    // Create a Blob from the PDF content
    
    const pdfBlob = new Blob([pdfContent], { type: 'application/pdf' });
    // Create a URL for the Blob
    const blobUrl = URL.createObjectURL(pdfBlob);
    // Set the Blob URL in the state
    setFileContents(blobUrl);

    // Open the PDF in a new tab
    window.open(blobUrl, '_blank');
  };

  return (
    
  <div className="rounded-sm min-h-screen border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark " style={{margin: 'auto', width:"40%", justifyContent:"center"}} ref={scrollToRef}>
  { loading ? <div className='flex' style={{alignItems:"center", margin:"auto", justifyContent:"center"}}>
  <ComponentLoader is_uploading={true} />
</div>
 :
  (!tmpResume &&
    <div className="items-center" >
  {/* Right side */}
  <div className="w-full border-stroke dark:border-strokedark  xl:border-l-2" >
    <div className=" p-4 sm:p-12.5 xl:p-17.5">
    <div className="p-8">
        <div className="max-w-md mx-auto">
            <div className="mb-4 flex space-x-4 p-2 bg-white rounded-lg shadow-md">
                <button onClick={() => setTabs(1)} className={tabs == 1 ?"bg-green-600 text-white" : "flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue  duration-300"} style={{width:"50%"}}>Upload Resume</button>
                <button onClick={() => setTabs(2)} className={tabs == 2 ?"bg-green-600 text-white" : "flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue  duration-300"} style={{width:"50%"}}>Form</button>
            </div>
        </div>
    </div>
      <div>
     {tabs == 1 &&
     <div>
      <div>
      <div class="border-b border-gray-900/10 pb-12 h-[50vh]" >
       
      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 h-full ">
        <div class="col-span-full h-full">
          <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 h-full">
            <div class="flex text-center items-center ">
              <div className='flex-col '>
              <svg class="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clip-rule="evenodd" />
              </svg>
              <div class="mt-4 flex text-sm leading-6 text-gray-600">
                 <label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-semibold text-green-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                  <span>Upload a file</span>
                  <input 
                  id="file-upload" 
                  name="file-upload" 
                  type="file" 
                  class="sr-only"
                  onChange={handleUploadResume}
                  />
                </label>
                <p class="pl-1">or drag and drop</p> 
              </div>
              <p class="text-xs leading-5 text-gray-600">PDF only up to 10MB</p>
              </div>
            </div>
          
          </div>
          

        </div>
     
      </div>
    </div>
    {uploadedResume && (
      <div className="mt-4 flex items-center text-sm leading-6 text-black bg-gray-300 rounded-lg overflow-hidden">
        <p className="flex-grow px-4 py-2">{uploadedResume.name}</p>
        <button className="text-black bg-gray-300 hover:text-green-700 " onClick={() => setUploadedResume(null)}>
          Delete
        </button>
      </div>
)}
    </div> 
</div>
    }
    {tabs == 2 &&
    
    <div>
        <div className=" mb-4 text-left"   >
          <label className="mb-2.5 block text-left font-medium text-black dark:text-white">
            Name (firstname lastname)
          </label>
          
            <input
                type="text"
                placeholder="Enter your name"
                className="rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                name="name" 
                style={{width: "80%"}}
                value={formData && formData.name}
                onChange={handleChange}
                required={true}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    // Handle any custom logic you want when Enter is pressed
                  }
                }}
            />
          
     
        </div>

        <div className="mb-4 text-left">
          <label className="mb-2.5 block font-medium text-black dark:text-white">
            Email
          </label>
          <div className="relative">
            <input
                type="email"
                placeholder="Enter your email"
                className=" rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                name="email"
                style={{width: "80%"}} 
                value={formData && formData.email}
                onChange={handleChange}
                required={true}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    // Handle any custom logic you want when Enter is pressed
                  }
                }}
            />
          </div>
        </div>

        <div className="mb-4 text-left">
          <label className="mb-2.5 block font-medium text-black dark:text-white">
            Phone
          </label>
          <div className="relative">
            <input
                type="phone"
                placeholder="Enter your number"
                className="rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                name="phone" 
                style={{width: "80%"}}
                value={formData && formData.phone}
                onChange={handleChange}
                required={true}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    // Handle any custom logic you want when Enter is pressed
                  }
                }}
            />
          </div>
        </div>

        <div className="mb-4 z-1 text-left">
          <label className="mb-2.5 block font-medium text-black dark:text-white">
            Skills
          </label>
                    <div className="relative z-1 bg-white dark:bg-form-input">
                      <div className='flex'>
                      <input
                            type="text"
                            placeholder="Enter your skills"
                            className=" rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                            name="skills" 
                            style={{width: "80%"}}
                            value={currentSkillsInput}
                            onChange={handleInputChange}
                            onKeyPress={(e) => {
                              if (e.key === 'Enter') {
                                e.preventDefault();
                                // Handle any custom logic you want when Enter is pressed
                                handleChange(e);
                              }
                            }}
                        />
                      
                      </div>
                       
                    
                  {formData.skills && formData.skills.map((skill, index) => (
                      <div className="flex items-center gap-2.5 mt-2.5" key={index}>
                        <p className="text-sm text-black dark:text-white">{skill}</p>
                        <button
                            className="text-primary text-sm font-medium"
                            onClick={() => {
                              setFormData((prevFormData) => {
                                return {
                                  ...prevFormData,
                                  skills: prevFormData.skills.filter((_, i) => i !== index),
                                };
                              });
                            }}
                        >
                          Remove
                        </button>
                        </div>
                        ))}
                </div>
                
        </div>
        <div className="mb-4 text-left">
          <label className="mb-2.5 block font-medium text-black dark:text-white">
            Education/Experience
          </label>
          <div className="relative ">
            <TaskList isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} education={formData && formData.education} experience={formData && formData.experience} onTaskChange={handleSectionChange}  isExperience={isExperience} setIsExperience={setIsExperience}/>
          </div>
        </div>
        { formData.education && formData.education.map((task: any) => {

          return (
            <div
              draggable="true"
              className="task relative flex cursor-move justify-between rounded-sm border border-stroke bg-white p-7 shadow-default dark:border-strokedark dark:bg-boxdark"
              style={{display: isModalOpen ? 'none': 'block', marginBottom: '0.5rem'}}
            >
              <div className="relative flex items-center justify-between">
                {task.job_title ? <p>{task.job_title}</p> : <p>{task.school_name}</p>}
                {/* <button
                  className="text-primary text-sm font-medium"
                  onClick={() => {
                    if(isExperience){
                      onTaskChange(task, "experDelete");
                    } else {
                      onTaskChange(task, "eduDelete");
                    }
                  }}
                >
                  Remove
                </button> */}
              </div>
                
              </div>
          );
          })}

          { formData.experience && formData.experience.map((task: any) => {
            return (
              <div
                draggable="true"
                className="task relative flex cursor-move justify-between rounded-sm border border-stroke bg-white p-7 shadow-default dark:border-strokedark dark:bg-boxdark"
                style={{display: isModalOpen ? 'none': 'block', marginBottom: '0.5rem'}}
              >
                <div className="relative flex items-center justify-between">
                {task.job_title ? <p>{task.job_title}</p> : <p>{task.school_name}</p>}
                  {/* <button
                    className="text-primary text-sm font-medium"
                    onClick={() => {
                      if(isExperience){
                        onTaskChange(task, "experDelete");
                      } else {
                        onTaskChange(task, "eduDelete");
                      }
                    }}
                  >
                    Remove
                  </button> */}
                </div>
                  
                </div>
            );
            })} 
            <div className="mb-4 text-left">
            <label className="mb-2.5 block font-medium text-black dark:text-white">
              URL
            </label>
            <div className="relative">
              <input
                  type="text"
                  placeholder="Enter your URL"
                  className=" rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  name="url"
                  style={{width: "80%", display: isModalOpen ? "none" : "block"}} 
                  value={formData && formData.url}
                  onChange={handleChange}
                  required={true}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      // Handle any custom logic you want when Enter is pressed
                    }
                  }}
              />
            </div>
          </div>
          {/* <div className="mb-4 text-left">
            <label className="mb-2.5 block font-medium text-black dark:text-white">
              Job description
            </label>
            <div className="relative">
              <input
                  type="text"
                  placeholder="Enter your job description"
                  className=" rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  name="job_description"
                  style={{width: "80%", display: isModalOpen ? "none" : "block"}} 
                  value={formData && formData.job_description}
                  onChange={handleChange}
                  required={true}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      // Handle any custom logic you want when Enter is pressed
                    }
                  }}
              />
            </div>
          </div> */}
      </div>
    }
   <div>
     <div className="mb-4 text-left">
            <label className="mb-2.5 block font-medium text-black dark:text-white">
              Job description
            </label>
            <div className="relative">
              <input
                  type="text"
                  placeholder="Enter your job description"
                  className=" rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  name="job_description"
                  style={{width: "80%", display: isModalOpen ? "none" : "block"}} 
                  value={tabs==2? formData && formData.job_description : uploadResumeJobDescription}
                  onChange={tabs==2 ? handleChange : (e) => setUploadResumeJobDescription(e.target.value)}
                  required={true}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      // Handle any custom logic you want when Enter is pressed
                    }
                  }}
              />
            </div>
          </div>
        <div className="flex mb-5 ">
          <input
              type="submit"
              value="Generate your new resume"
              style={{ color: 'white' }}  
              className="w-full bg-green-600 cursor-pointer rounded-lg border border-primary p-4 text-white  font-medium transition hover:bg-opacity-90"
              onClick={handleSubmit}

          />
         
        </div>
         </div> 
         
      </div>
    </div>
  </div>

</div>
  )
}
{fileContents &&
      <PdfViewer pdfData={fileContents} />
  }
</div>
  );
};

export default ResumeForm;
