import React, { useState, ChangeEvent, FormEvent } from 'react';

interface WorkExperience {
  company: string;
  jobTitle: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface FormData {
  firstName: string;
  lastName: string;
  degree: string;
  email: string;
  summary: string;
  university: string;
  universityStartDate: string;
  universityEndDate: string;
  workExperience: WorkExperience[];
  skills: string;
}

const ResumeForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: 'Spencer',
    lastName: 'Huang',
    degree: 'B.S. Computer Science, Applied Math & Statistics',
    email: 'shuan126@jhu.edu',
    summary: 'looking for summer 2024 internship in software engineering',
    university: 'Johns Hopkins University',
    universityStartDate: 'Aug. 2022',
    universityEndDate: 'May 2026',
    workExperience: [],
    skills: 'Javascript, Minecraft Command Block',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleWorkExperienceChange = (index: number, field: keyof WorkExperience, value: string): void => {
    const updatedWorkExperience = [...formData.workExperience];
    updatedWorkExperience[index][field] = value;
    setFormData({
      ...formData,
      workExperience: updatedWorkExperience,
    });
  };
  

  const handleAddWorkExperience = (): void => {
    setFormData({
      ...formData,
      workExperience: [...formData.workExperience, { company: '', jobTitle: '', startDate: '', endDate: '', description: '' }],
    });
  };

  const handleRemoveWorkExperience = (index: number): void => {
    const updatedWorkExperience = [...formData.workExperience];
    updatedWorkExperience.splice(index, 1);
    setFormData({
      ...formData,
      workExperience: updatedWorkExperience,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    // You can use the formData object to generate a resume or send the data to an API.
    // For this example, we will just log the data.
    console.log(formData);
  };

  return (
    <form className="mt-16 border-4 rounded-md bg-light-green" onSubmit={handleSubmit}>
      <div className="space-y-12">
        

        <div className="border-b border-gray-900/10 pb-5">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>

          <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="firstName"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="lastName"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-2 border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Education</h2>
          <div className="mt-3">
  
            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
              University
            </label>
            <div className="mt-2 pb-5">
              <input
                type="text"
                name="university"
                id="university"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={formData.university}
                onChange={handleChange}
              />
            </div>

            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
              Degree + Major
            </label>
            <div className="mt-2 pb-5">
              <input
                type="text"
                name="degree"
                id="degree"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={formData.degree}
                onChange={handleChange}
              />
            </div>

            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
              Starting Month + Year
            </label>
            <div className="mt-2 pb-5">
              <input
                type="text"
                name="university-start-month"
                id="university-start-month"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={formData.universityStartDate}
                onChange={handleChange}
              />
            </div>

            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
              Graduating Month + Year
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="university-end-month"
                id="university-end-month"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={formData.universityEndDate}
                onChange={handleChange}
              />
            </div>


          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-5">
        <h2 className="text-base font-semibold leading-7 text-gray-900">Work Experience</h2>
        <div className="flex flex-col mt-1">
          {formData.workExperience.map((experience, index) => (
            <div key={index} className="mt-5 flex flex-col">
              <input
                type="text"
                name="company"
                placeholder="Company"
                className="mt-2"
                value={experience.company}
                onChange={(e) => handleWorkExperienceChange(index, 'company', e.target.value)}
              />
              <input
                type="text"
                name="jobTitle"
                placeholder="Job Title"
                className="mt-2"
                value={experience.jobTitle}
                onChange={(e) => handleWorkExperienceChange(index, 'jobTitle', e.target.value)}
              />
              <input
                type="text"
                name="startDate"
                placeholder="Start Date"
                className="mt-2"
                value={experience.startDate}
                onChange={(e) => handleWorkExperienceChange(index, 'startDate', e.target.value)}
              />
              <input
                type="text"
                name="endDate"
                placeholder="End Date"
                className="mt-2"
                value={experience.endDate}
                onChange={(e) => handleWorkExperienceChange(index, 'endDate', e.target.value)}
              />
              <input
                type="text"
                name="description"
                placeholder="Description"
                className="mt-2"
                value={experience.description}
                onChange={(e) => handleWorkExperienceChange(index, 'description', e.target.value)}
              />
              <button type="button" onClick={() => handleRemoveWorkExperience(index)}>Remove</button>
            </div>
          ))}
          <button type="button" onClick={handleAddWorkExperience}>Add Work Experience</button>
        </div>
      </div>

        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="col-span-full">
              <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                Skills (separated by comma)
              </label>
              <div className="mt-2">
                <textarea
                  id="skills"
                  name="skills"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={formData.skills}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="col-span-full">
              <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                Work Objective
              </label>
              <div className="mt-2">
                <textarea
                  id="summary"
                  name="summary"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={formData.summary}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="px-4 py-2 bg-gray-900 rounded-md text-white font-medium hover:bg-gray-700"
          >
            Generate Resume
          </button>
        </div>
      </div>
    </form>
  );
};

export default ResumeForm;
