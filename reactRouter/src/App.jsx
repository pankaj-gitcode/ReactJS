import {Suspense, lazy} from 'react'
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import './App.css'
const Landing = lazy(()=>import('./components/Landing'))
const Dashboard =  lazy(()=>import('./components/Dashboard'))



export default function App(){
  
  return(
    <div>
    <BrowserRouter>
      <div style={{backgroundColor:"#424242", color:"#fff"}}>
        <AppBar />  
      </div>

      <Routes>
        <Route path="/" element={<Suspense fallback={"loading..."}><Landing /></Suspense>}/>
        <Route path="/Dashboard" element={<Suspense fallback={'loading...'}><Dashboard /></Suspense>} />
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