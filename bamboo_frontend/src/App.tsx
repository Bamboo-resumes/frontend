//import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import NavBar from './components/NavBar'
import MainRouter from './router/MainRouter'
import './App.css'




function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className = "bg-dark-gray">
      <NavBar/>
      <MainRouter/>
    </div>
  )
}

export default App
