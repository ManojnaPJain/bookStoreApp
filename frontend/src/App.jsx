import React, { Component } from 'react'
import Home from './home/Home'
import Courses from './courses/Courses'
import {Route,Routes} from "react-router-dom"
import Signup from './components/Signup'
import Login from './components/Login'
import Contacts from './contact/Contacts'
function App() {
   
    return (
      <>
      
      <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Courses" element={<Courses/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/Contacts" element={<Contacts/>}/>
      </Routes>
      </div>
      
      </>
    )
  
}

export default App
