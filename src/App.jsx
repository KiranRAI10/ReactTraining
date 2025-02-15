import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import Form from './Component/Form/Form'
// import Home from './Component/Home/Home'
// import Register from './Component/Register/Register'
// import Login from './Component/Login/Login'
import { LearningComponent } from './LearningComponent'
import Card from './Component/Card/Card'
// import HeadingComponent from './HeadingComponent'



function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      {/* <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/form' element={<Form/>}/> */}
      <Route path = '/learningComponent' element = {<LearningComponent/>}/>
      {/* <Rouer path = '/headingComponent' element = {<HeadingComponent/>}/> */}
      <Route path ='card' element={<Card/>}/>
    </Routes> 
    </BrowserRouter>
  )
}

export default App
