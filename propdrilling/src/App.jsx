import React, {useState} from 'react'
import { CountProvider, useCount } from './component/Context'
import Display from './component/Display';

export default function App(){
  const [count, setCount] = useState(0);

  return(
    <CountProvider value={{count, setCount}}>
      <Count />
      <Display />
    </CountProvider>
  )
}

//Count Component
const Count = ()=>{
  const {count} = useCount()
  return(<div>
    <p>Current Count is: {count}</p>
    <CountRender />
    <Button />

  </div>)
}

//CountRender component
const CountRender = ()=>{
  const {count} = useCount();
  return(<div>
    <b>{count}</b>
  </div>)
}

//Button Component
const Button = ()=>{
  const {count, setCount} = useCount();
  return(
    <div>
      <button onClick={()=>{setCount(count=>count+1)}}>Increase</button>
      <button onClick={()=>{setCount(count=>count-1)}}>Decrease</button>
    </div>
  )
}