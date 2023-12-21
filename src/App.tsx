//import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import NavBar from './components/NavBar'
import MainRouter from './router/MainRouter'
import './App.css'
import { Worker } from '@react-pdf-viewer/core';




function App() {
  // const [count, setCount] = useState(0)

  return (
    <div style={{  
      backgroundImage: `url('${"background.png"}')`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
     
    }}>
       <Worker workerUrl={`https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js`}>
       <MainRouter/>
       </Worker>




      
    </div>
  )
}

export default App
