import Header from './Header';
import code_editor_illustration from '/coderpad-code-editor-with-playback-illustration.png';
import custom_screen from '/coderpad-screen-create-technical-tests-quickly-even-if-youre-not-techy.png';
import comparison from '/coderpad-screen-spot-high-performing-candidates-to-move-to-the-next-round-of-interviews.png';

const Work = () => {
    return (
        <div className=" w-full flex items-center justify-center ">
            <div className="w-full justify-center" >
                <section className="hero-block p-6">
                    <div className="text-black text-center items-center justify-center">
                        <h1 className="font-extrabold tracking-tight text-black">
                            Startup Hiring Begins Here
                        </h1>
                        <p className="m-8">
                            Bamboo is your go-to tool to assess your candidates in a practical setting. <br /> 
                            See how they perform on real-world tasks that go beyond their resume! <br />
                            Custom-made screening tests for your tech stack and codebase.
                        </p>
                        <button className="bg-green-500 hover:bg-green-300 focus:shadow-outline">
                            <a className="text-black text-xl font-bold " target="_blank" href="https://forms.gle/FPEEkBwUbeQmtmBA6">Sign Up</a>
                        </button>
                    </div>
                    <div className="flex justify-center items-center my-4">
                        <img
                            src={code_editor_illustration}
                            alt="code-editor-illustration"
                            style={{ maxWidth: '35%', maxHeight: '35%' }}
                        />
                    </div>
                </section>

                <section className="bg-slate-200 m-4 p-6">
                    <div className="text-black text-center items-center justify-center ">
                        <h2 className="font-extrabold tracking-tight text-black text-3xl m-4">
                            Screening and vetting candidates is easy with Bamboo
                        </h2>
                        <p>
                            Tell us your tech stack and codebase, and we'll create a custom screening test for you. <br />
                            We make it easy for you to create your own tests, even if you're not techy! <br />
                        </p>
                        
                    </div>
                    <div className="flex justify-center items-center my-4">
                        <img
                            src={custom_screen}
                            alt="custom-screening-tests"
                            style={{ maxWidth: '50%', maxHeight: '50%' }}
                        />
                    </div>
                </section>

                <section className="bg-white m-4 p-6">
                    <div className="text-black text-center items-center justify-center ">
                        <h2 className="font-extrabold tracking-tight text-black text-3xl m-4">
                            See how candidates stack up against each other
                        </h2>
                        <p>
                            We offer data-driven insights to help you pinpoint the most skilled candidates. <br />
                        </p>
                        
                    </div>
                    <div className="flex justify-center items-center my-4">
                        <img
                            src={comparison}
                            alt="comparison-candidates"
                            style={{ maxWidth: '50%', maxHeight: '50%' }}
                        />
                    </div>
                </section>

                <section className="flex items-center justify-center gap-6 p-8">
                    <h1 className="font-bold text-4xl">
                        Hire talent, not resumes 
                    </h1>
                    <button className="bg-green-500 hover:bg-green-300 focus:shadow-outline">
                            <a className="text-black text-xl font-bold " target="_blank" href="https://forms.gle/FPEEkBwUbeQmtmBA6">Sign Up Today</a>
                    </button>
                </section>

            </div>
        </div>
    )

}

export default Work;