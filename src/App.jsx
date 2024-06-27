import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<div id='home'>
        <div id='main'>
        <div class='nav'> 
          <ul>
            <li>Home</li>
            <li><Link to="/Register">Register</Link></li>
            <li>Login</li>
          </ul>
        </div>
        <div class='mid'>This is middle section</div>
        <div class='foot'>Footer</div>
        </div>
        </div>}/>
      <Route path='/about' element={<h1> This is about page </h1>}/>
      <Route path='/Register' element={<form action="" >
      Username <input type="text" /> <br /> <br />
      Email   <input type="text" name="" id="" /> <br /> <br />
      Password <input type="text" /> <br /> <br />
      <button> Sign in</button> 
      </form>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
