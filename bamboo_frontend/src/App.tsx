//import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import NavBar from './components/NavBar'
import MainRouter from './router/MainRouter'
import './App.css'




function App() {
  // const [count, setCount] = useState(0)

  return (
    <div style={{  
      backgroundImage: `url('${"background.png"}')`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
     
    }}>
      {/* <NavBar/> */}
      <MainRouter/>
    </div>
  )
}

export default App
