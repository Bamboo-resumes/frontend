import headshot from '/headshot.jpg'

function About() {
  return (
    <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
      <div class="max-w-2xl">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
        <p class="mt-6 text-lg leading-8 text-gray-600">The team are all college students who want to gain experience in the industry. From our previous experiences in industry, we know how difficult it can be to get internships. Submitting your resume into the void can make it feel like no one is listening. We want to help you by making you a strong applicant. Most students do not have time to tailor each resume to the job descripton, so by using Bamboo, you can stand out by catering to what recruiters are actually looking for. Show off your skills with a fresh, new resume. Be proud of the experience that you have, and continue to refine with Bamboo today</p>
      </div>
      {/* <ul role="list" class="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
        <li>
          <div class="flex items-center gap-x-6">
            <img class="h-16 w-16 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
            <div>
              <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">Andreas Jaramillo</h3>
              <p class="text-sm font-semibold leading-6 text-indigo-600">Co-Founder / CEO</p>
            </div>
          </div>
        </li>
  
    
      </ul> */
      }
      <div className='flex flex-col justify-center  '>
        <div className='flex justify-center'>
        <img
        src={headshot}
        alt="Headshot"
        className="rounded-full h-auto"
        style={{ maxWidth: '50%', maxHeight: '300px' }}
    />
        </div>
    

    <h3 class="text-base font-semibold leading-7 text-center tracking-tight text-gray-900">Andreas Jaramillo</h3>
              <p class="text-sm font-semibold text-center leading-6 text-indigo-600">Co-Founder / CEO</p>
   
 
      </div>
      
    </div>
  </div>
  );
}

export default About;