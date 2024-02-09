import React, {useState} from 'react'
import {useRecoilValue, useRecoilState, RecoilRoot} from 'recoil'
import { countAtom } from './store/atoms/Count';

export default function App(){
  // const [count, setCount] = useState(0);

  return(
    <RecoilRoot>
      <div>
        <Count />
      </div>
    </RecoilRoot>
    
  )
}

//compoent-1: Count
const Count = ()=>{

    return(
      <div>
        <CountRender />
        <Buttons />
      </div>
    )
}

//compoent-2: CountRender
const CountRender = ()=>{
  const count = useRecoilValue(countAtom);
  return(
    <div>
      <b>Current Count is: {count}</b>
    </div>
  )
}

//compoent-3: Buttons
const Buttons = ()=>{
  const [count, setCount] = useRecoilState(countAtom);
  return(
    <div>
      <button onClick={()=>{setCount(count=>count+1)}}>Increase Count</button>
      <button onClick={()=>{setCount(count=>count-1)}}>Decrease Count</button>
    </div>
  )
}