import { Link } from 'react-router-dom';
import DarkModeSwitcher from './DarkModeSwitcher';
import BambooLogo from '/bamboologo.jpg';

const Header = () => {
  

  return (
    <header className="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
    <div className="flex flex-grow items-center justify-between py-4 px-4 shadow-2 md:px-6 2xl:px-11">
      <div className="flex justify-center gap-2 sm:gap-4">
        <Link className="" to="/">
          <img src={BambooLogo} width="32" height="32" alt="Logo" />
        </Link>
      </div>
  
      {/* <div className="flex items-center gap-3 2xsm:gap-7">
        <ul className="flex items-center gap-2 2xsm:gap-4">
          {/* <!-- Dark Mode Toggler --> */}
          {/* <DarkModeSwitcher /> */}
        {/* </ul> */}
      {/* </div> */}
  
      {/* Add an empty div to push content to the right and make the header longer */}
      <div className="flex-grow"></div>
    </div>
  </header>
  
  );
};

export default Header;
