import React, {useState, useMemo} from 'react'
import {useRecoilValue, useRecoilState, RecoilRoot, useSetRecoilState} from 'recoil'
import { EvenSelector, countAtom } from './store/atoms/Count';

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
    console.log("COUNTER")
    return(
      <div>
        <CountRender />
        <Buttons />
        <CountEvenOdd />
      </div>
    )
}

//compoent-2: CountRender
const CountRender = ()=>{
  const count = useRecoilValue(countAtom);
  console.log("RenderCount")
  return(
    <div>
      <b>Current Count is: {count}</b>
    </div>
  )
}

//compoent-3: Buttons
const Buttons = ()=>{
  console.log("BUTTONS")
  const setCount = useSetRecoilState(countAtom);
  return(
    <div>
      <button onClick={()=>{setCount(count=>count+1)}}>Increase Count</button>
      <button onClick={()=>{setCount(count=>count-1)}}>Decrease Count</button>
    </div>
  )
}

//component-4: even/odd component w.r.t count value
const CountEvenOdd = ()=>{
  const isEven = useRecoilValue(EvenSelector);
  
console.log("EVEn OR ODD")
  return(
    <div>
      
      {
          isEven? "not Even" : null
      }
      {isEven}
    </div>
  )
}