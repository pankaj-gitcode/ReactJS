import React from 'react'
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import './App.css'
import { Landing } from './components/Landing'
import { Dashboard } from './components/Dashboard'


export default function App(){
  
  return(
    <div>
    <BrowserRouter>
      <div style={{backgroundColor:"#424242", color:"#fff"}}>
        <AppBar />  
      </div>

      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

//Appbar component
const AppBar = ()=>{
  //initialise the navigate hook
  const navigate = useNavigate();
  return(
    <div>
      <button style={{margin:'100px'}} onClick={()=>{navigate('/')}}>Landing</button>
      <button onClick={()=>{navigate('/dashboard')}}>Dashboard</button>
    </div>
  )

}