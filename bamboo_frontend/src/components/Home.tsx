/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import ResumeForm from './ResumeForm'

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="">
        <ResumeForm/>
      </div>
    </div>
    
  )
}
