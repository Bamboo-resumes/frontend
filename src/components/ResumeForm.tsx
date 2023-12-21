import React, { useState, ChangeEvent, FormEvent, useEffect, useRef } from 'react';
import axios from 'axios';
import ResumeView from './ResumeView';
import { useLoading } from '../context/LoadingContext';
import {Link} from "react-router-dom";
import BambooLogo from '/bamboologo.jpg';
import BambooSolo from '/bamboo_solo.jpg';
import TaskList from './Tasks/TaskList';
import ComponentLoader from "../common/Loader/ComponentLoader";
import PdfViewer from './PdfViewer'; 

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
 // const { loading, setLoadingState } = useLoading();
  const [loading ,setLoading] = useState<boolean>(false);
  const [currentSkillsInput, setCurrentSkillsInput] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isExperience, setIsExperience] = React.useState<boolean>(false);
  const [tmpResume, setTmpResume] = useState<any>(null);
  const [fileContents, setFileContents] = useState(null);
useEffect(() => {
  console.log(tmpResume);
},[tmpResume])

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
  




  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();


  const API_ENDPOINT: string = "https://bamboo-django-a637ab9dea2b.herokuapp.com/";

  try {
    // You can use the formData object to generate a resume or send the data to an API.
    // For this example, we will just log the data.
    

    // Make an API call to send the data to your server
    setLoading(true);
    await axios.post(API_ENDPOINT, formData)
      .then((response) => {
     //   console.log(response.data);
       // const le = response.data;
      //  teresume.current = le;
      //  console.log(teresume.current);
        
      //  setResume(response.data);
      //  handlePDF(response.data);
        handleOpenPdf(response.data);
       // setTmpResume(response.data);
      //  setLoadingState(false);
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
  };

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
    
  <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark " style={{margin: "10%"}}>
  { loading ? <ComponentLoader /> :
  (!tmpResume &&
    <div className="flex flex-wrap items-center">
  <div className="hidden w-full xl:block xl:w-1/2"> 
    <div className="py-17.5 px-26 text-center">
            <Link  className="mb-5.5 inline-block" style={{display: "flex", justifyContent: "center", alignItems: "center"}} to="/">
                {/* <img className="hidden dark:block" src={BambooLogo} alt="Logo"/> */}
                <img className="dark:hidden"   width={"50%"} height={"50%"}  src={BambooLogo} alt="Logo"/>
            </Link>
      <p className="2xl:px-20">
          Tailor your technical resume to any job description in seconds
      </p>
    <div className={"flex "} style={{justifyContent:"center"}}>
        <img className="dark:hidden"   width={"75%"} height={"75%"}  src={BambooSolo} alt="Logo"/>
    </div>

    </div>
   </div>
  {/* Right side */}
  <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
    <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
      <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
        Tailor your technical resume to any job description in seconds
      </h2>
      <div>
        <div className="mb-4">
          <label className="mb-2.5 block font-medium text-black dark:text-white">
            Name
          </label>
          <div className="relative">
            <input
                type="text"
                placeholder="Enter your name"
                className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                name="name" 
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
        </div>

        <div className="mb-4">
          <label className="mb-2.5 block font-medium text-black dark:text-white">
            Email
          </label>
          <div className="relative">
            <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                name="email" 
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

        <div className="mb-4">
          <label className="mb-2.5 block font-medium text-black dark:text-white">
            Phone
          </label>
          <div className="relative">
            <input
                type="phone"
                placeholder="Enter your number"
                className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                name="phone" 
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

        <div className="mb-4 z-1">
          <label className="mb-2.5 block font-medium text-black dark:text-white">
            Skills
          </label>
                    <div className="relative z-1 bg-white dark:bg-form-input">
                      <div className='flex'>
                      <input
                            type="text"
                            placeholder="Enter your skills"
                            className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                            name="skills" 
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
        <div className="mb-4">
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
        <div className="mb-4">
          <label className="mb-2.5 block font-medium text-black dark:text-white">
            URL
          </label>
          <div className="relative">
            <input
                type="text"
                placeholder="Enter the job url"
                className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                name="url" 
                value={formData && formData.url}
                onChange={handleChange}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    // Handle any custom logic you want when Enter is pressed
                  }
                }}
                style={{display: isModalOpen ? "none" : "block"}}
            />
          </div>
        </div>
        <div className="mb-4 z-1">
          <label className="mb-2.5 block font-medium text-black dark:text-white">
            Job Description
          </label>
          <div className="relative">
            <input
                type="text"
                placeholder="Enter your email"
                className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                name="job_description" 
                value={formData && formData.job_description}
                onChange={handleChange}
                required={true}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    // Handle any custom logic you want when Enter is pressed
                  }
                }}
                disabled={isModalOpen}
                style={{display: isModalOpen ? "none" : "block"}}
            />
          </div>
        </div>

        <div className="mb-5 ">
          <input
              type="submit"
              value="Generate your new resume"
              style={{ backgroundColor: 'green', color: 'white' }}  
              className="w-full cursor-pointer rounded-lg border border-primary bg-black p-4 text-white  font-medium transition hover:bg-opacity-90"
              onClick={handleSubmit}

          />
         
        </div>
      </div>
    </div>
  </div>

</div>
  )
}
{!loading  && fileContents &&
       <div style={{ textAlign: 'center', marginTop: '20px' }}>
         <PdfViewer pdfData={tmpResume} />
        </div>
  }
</div>
  );
};

export default ResumeForm;
