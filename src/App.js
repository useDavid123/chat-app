import React from 'react'
import "./App.scss"
import {  Route  , Routes , useNavigate}  from "react-router-dom"
import Sidebar from './components/Sidebar'
import Chat from './components/Chat'
import Home from './components/Home'
const App = () => {
  return (
    <div class="container">
  	<div class="row no-gutters">
      <Sidebar/>
      <Routes>
      <Route exact path="/" element={<Home/>} />
        <Route exact path="/chat/:id" element={<Chat/>} />
      </Routes>
    </div>
  </div>
  )
}

export default App