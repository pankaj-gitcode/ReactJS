import React, {useState} from 'react'
import './App.css'

export default function App(){
  const [count, setCount] = useState(0);

  return(
    <div>
      {/* setCount taken here for button used inside Count() function */}
      <Count count={count} setCount={setCount}/> 
      
    </div>
  )
}
//COunt compo. will render only the 'count'
const Count=({count, setCount})=>{
  return(
    <div>
      {count}
      {/* basically we are doing 'prop-drilling' here */}
      <Button count={count} setCount={setCount}/> 
    </div>
  )
}
const Button=({count, setCount})=>{
  return(
    <div>
      <button onClick={()=>{setCount(count+1)}}>Increase</button>
      <button onClick={()=>{setCount(count-1)}}>Decrease</button>
    </div>
  )
}