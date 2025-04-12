import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router,Routes,Route } from "react-router";
import Home from './components/Home';
import User from './components/User';
function App() {

  
  const [count, setCount] = useState(0)

  return (
    <>
     <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/users/:id' element={<User/>}/>
      </Routes>
     </Router>
    </>
  )
}

export default App
