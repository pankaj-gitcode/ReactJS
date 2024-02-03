import React, {useState,} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import { Landing } from './components/Landing'
import { Dashboard } from './components/Dashboard'


export default function App(){

  const landingFunc = ()=>{ window.location.href='/' } //one way but not the perfect way
  const dashboardFunc = ()=>{ window.location.href='/dashboard' } //window.location... uses hard reloading

  return(
    <div>
      <div style={{backgroundColor:"#424242", color:"#fff"}}>
        <button style={{marginRight:"100px"}} onClick={landingFunc}>Landing</button>
        <button onClick={dashboardFunc}>Dashboard</button>
      </div>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}