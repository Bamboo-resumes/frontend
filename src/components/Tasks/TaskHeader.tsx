import { useEffect, useRef, useState } from 'react';
import TaskPopup from './TaskPopup';


interface TaskHeaderProps {
    isExperience: boolean;
    onTaskChange: (tasks: any,type: string) => void;
    setIsExperience: (isExperience: boolean) => void;
    isModalOpen: boolean;
    setIsModalOpen: (isModalOpen: boolean) => void;
    }

const TaskHeader = (props: TaskHeaderProps) => {
  const [currentTask, setCurrentTask] = useState<any>(null);
  const trigger = useRef<any>(null);
  const popup = useRef<any>(null);

  const isExperience = props.isExperience;
  const onTaskChange = props.onTaskChange;
  const setIsExperience = props.setIsExperience;

  // close on click outside
//   useEffect(() => {
//     const clickHandler = ({ target }: MouseEvent) => {
//       if (!popup.current) return;
//       if (
//         !popupOpen ||
//         popup.current.contains(target) ||
//         trigger.current.contains(target)
//       )
//         return;
//       setPopupOpen(false);
//     };
//     document.addEventListener('click', clickHandler);
//     return () => document.removeEventListener('click', clickHandler);
//   });

  // close if the esc key is pressed
//   useEffect(() => {
//     const keyHandler = ({ keyCode }: KeyboardEvent) => {
//       if (!popupOpen || keyCode !== 27) return;
//       setPopupOpen(false);
//     };
//     document.addEventListener('keydown', keyHandler);
//     return () => document.removeEventListener('keydown', keyHandler);
//   });

  const handlePopup = (e) =>{
    e.preventDefault();
    props.setIsModalOpen(!props.isModalOpen);
  }

  return (
    <div className="flex flex-col  gap-y-4 rounded-sm border border-stroke  p-3 shadow-default dark:border-strokedark dark:bg-boxdark sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-col gap-4 2xsm:flex-row 2xsm:items-center">
        <div>
          <button
            ref={trigger}
            onClick={handlePopup}
            style={{ backgroundColor: 'green'}}  
            className="flex items-center gap-2 rounded bg-primary py-2 px-4.5 font-medium text-white hover:bg-opacity-80  "
          >
            <svg
              className="fill-current"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 7H9V1C9 0.4 8.6 0 8 0C7.4 0 7 0.4 7 1V7H1C0.4 7 0 7.4 0 8C0 8.6 0.4 9 1 9H7V15C7 15.6 7.4 16 8 16C8.6 16 9 15.6 9 15V9H15C15.6 9 16 8.6 16 8C16 7.4 15.6 7 15 7Z"
                fill=""
              />
            </svg>
            <span>Add {isExperience ? 'Experience' : 'Education'}</span>
          </button>

          {/* <!-- ===== Task Popup Start ===== --> */}
          <TaskPopup
            popupOpen={props.isModalOpen}
            setPopupOpen={props.setIsModalOpen}
            isExperience={isExperience}
            onTaskChange={onTaskChange}
            setIsExperience={setIsExperience}
          />
          {/* <!-- ===== Task Popup End ===== --> */}
        </div>
      </div>
    </div>
  );
};

export default TaskHeader;
