import inkswipe from '/frontfacebg.png'
import arrow from '/transition_arrow.jpg'

interface FrontFaceProps {
    scrollTo: () => void;
    }


function FrontFace(props: FrontFaceProps) {
    const { scrollTo } = props;

  return (
    <section class="justify-center align-middle" >
    <div class="px-4 mx-auto max-w-screen-l  text-center py-24 lg:py-56  " style={{backgroundImage: `url('${"frontfacebg.png"}')`,
backgroundPosition: 'center',
backgroundSize: 'cover',}}>
        <h1  class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Master your job seeking journey</h1>
        <p class="mb-8 text-lg font-normal text-white lg:text-xl sm:px-16 lg:px-48">Here at Bamboo we tailor your resumes to the job description, saving you time on each application</p>
        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <button onClick={scrollTo} class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Get started
                <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
        </div>
    </div>
 
</section>
  );
}

export default FrontFace;