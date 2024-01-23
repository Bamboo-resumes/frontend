import { Link } from 'react-router-dom';
import DarkModeSwitcher from './DarkModeSwitcher';
import bamboosolo from '/bamboo_solo.png';
import BambooLogo from '/bamboo_logo.png';
const Header = () => {
  

  return (
  //   <header className="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
  //   <div className="flex flex-grow items-center justify-between py-4 px-4 shadow-2 md:px-6 2xl:px-11">
  //     <div className="flex justify-center gap-2 sm:gap-4">
  //       <Link className="" to="/">
  //         <img src={BambooLogo} width="32" height="32" alt="Logo" />
  //       </Link>
  //     </div>
  
  //     {/* <div className="flex items-center gap-3 2xsm:gap-7">
  //       <ul className="flex items-center gap-2 2xsm:gap-4">
  //         {/* <!-- Dark Mode Toggler --> */}
  //         {/* <DarkModeSwitcher /> */}
  //       {/* </ul> */}
  //     {/* </div> */}
  
  //     {/* Add an empty div to push content to the right and make the header longer */}
  //     <div className="flex-grow"></div>
  //   </div>
  // </header>
  <div class="">
  <div class="antialiased dark-mode:bg-gray-900" style={{backgroundColor: "#EEEEEE"}}>
  <div class="w-full text-gray-700  dark-mode:text-gray-200 dark-mode:bg-gray-800">
    <div x-data="{ open: true }" class="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
      <div class="flex flex-row items-center justify-between">
        <div className='flex' style={{alignItems: 'center'}}>
          
        <a href="#" class="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline">
        <img src={BambooLogo} height={'200'} width={'200'} alt="Logo" /></a>
        </div>
       
        <button class="rounded-lg md:hidden focus:outline-none focus:shadow-outline" >
          <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
            <path x-show="!open" fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd"></path>
            <path x-show="open" fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
          </svg>
        </button>
      </div>
      <nav class="{'flex': open, 'hidden': !open}" class="flex-col flex-grow hidden pb-4 md:pb-0 md:flex md:justify-end md:flex-row">
        <a class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="/">Home</a>
        {/**
         * 
         * We will have a blog here. It is added once we have more users
         * 
         */}
        {/* <a class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">Blog</a> */}
        
        {/* <a class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="/about">About</a>
        <a class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="/contact">Contact</a> */}
      </nav>
    </div>
  </div>
</div>
  </div>
  
  );
};

export default Header;
