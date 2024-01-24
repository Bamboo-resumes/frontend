import React, { useEffect } from 'react';
import TaskHeader from './TaskHeader';
import Drag from '../../js/drag';
import { isModifier } from 'typescript';

interface TaskListProps {
  experience?: any;
  education?: any;
  onTaskChange: (tasks: any, type: string) => void;
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: boolean) => void;
  isExperience: boolean;
}

const TaskList: React.FC = (props: TaskListProps) => {
  useEffect(() => {
    Drag();
  });
  

  const onTaskChange = props.onTaskChange;
  const isExperience = props.isExperience;



  return (
    <>
      <div className="mx-auto max-w-5xl z-99999 "
        style={{overflow: 'hidden'}}
      >

        {/* <!-- Task Header Start --> */}
        {!isExperience && <TaskHeader isModalOpen={props.isModalOpen} setIsModalOpen={props.setIsModalOpen} isExperience={false}onTaskChange={onTaskChange} />}
        {isExperience && <TaskHeader isModalOpen={props.isModalOpen} setIsModalOpen={props.setIsModalOpen} isExperience={true} onTaskChange={onTaskChange} />}
        {/* <TaskHeader isModalOpen={props.isModalOpen} setIsModalOpen={props.setIsModalOpen} isExperience={isExperience} setIsExperience={setIsExperience} onTaskChange={onTaskChange} /> */}
        {/* <!-- Task Header End --> */}
        {/* <!-- Task List Wrapper End --> */}
      </div>
    </>
  );
};

export default TaskList;
