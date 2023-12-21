import React, { useEffect } from 'react';
import TaskHeader from './TaskHeader';
import Drag from '../../js/drag';
import { isModifier } from 'typescript';

interface TaskListProps {
  experience: any;
  education: any;
  onTaskChange: (tasks: any, type: string) => void;
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: boolean) => void;
  isExperience: boolean;
  setIsExperience: (isExperience: boolean) => void;
}

const TaskList: React.FC = (props: TaskListProps) => {
  useEffect(() => {
    Drag();
  });
  

  const onTaskChange = props.onTaskChange;
  const isExperience = props.isExperience;
  const setIsExperience = props.setIsExperience;

  useEffect(() => {
    console.log(props.experience);
    console.log(props.education);
  },[props.experience, props.education])

  return (
    <>
      <div className="mx-auto max-w-5xl "
        style={{overflow: 'hidden'}}
      >

        {/* <!-- Task Header Start --> */}
        <TaskHeader isModalOpen={props.isModalOpen} setIsModalOpen={props.setIsModalOpen} isExperience={isExperience} setIsExperience={setIsExperience} onTaskChange={onTaskChange} />
        {/* <!-- Task Header End --> */}
        {/* <!-- Task List Wrapper End --> */}
      </div>
    </>
  );
};

export default TaskList;
