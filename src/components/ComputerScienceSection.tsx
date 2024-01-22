import headshot from '/headshot.jpg'
function ComputerScienceSection() {
  return (
    <section className=" py-10 grid grid-cols-1 items-center align-middle sm:grid-cols-2 sm:gap-8" style={{backgroundColor: "#24BB7F"}}>
        <div>
        <h2 className="mb-6 text-center text-2xl font-medium text-white">
        Developed by students with experience in the tech industry including Amazon and Google
    </h2>
    <p className="mb-6 text-center text-base font-normal text-white">Finetuning your resume generating to get you passed the ATS systems</p>
    <a href="/about" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Learn more about our founder
                <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
     </a>
        </div>
    <div className='flex justify-center '>
    <img
        src={headshot}
        alt="Headshot"
        className="rounded-full h-auto "
        style={{ maxWidth: '100%', maxHeight: '300px' }}
    />
    </div>
   
   
</section>


  );
}   

export default ComputerScienceSection;