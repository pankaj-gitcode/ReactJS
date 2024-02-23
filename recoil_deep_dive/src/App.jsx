import React, { useMemo } from 'react'

import './App.css'
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'
import { countAtom, countSelector } from './atoms'

export default function App(){
  return(
    <div>
    <RecoilRoot>
      <Count/>
    </RecoilRoot>
    </div>
  )
}

const Count = ()=>{
  return(
    <div>
      <CountRender />
      <Buttons />
    </div> 
  )
}

const CountRender = ()=>{
  const count = useRecoilValue(countAtom);
  const selectCount = useRecoilValue(countSelector);
  const EvenOdd = useMemo(()=>{
    return count%2==0?'Even':'Odd'
  }, [count])
  return(
    <div>
      <b>Counter Value is: {count}</b>  
      <b> 👉🏽 Used UseMemo: {EvenOdd} &nbsp;|&nbsp; Used Selector: {selectCount}</b>
    </div>
  )
}

const Buttons = ()=>{
  const count = useRecoilValue(countAtom);
  const setCounter = useSetRecoilState(countAtom);

  return(
    <div>
      <button onClick={()=>setCounter(coun=>coun+1)}>Increase</button>
      <button onClick={()=>setCounter(coun=>coun-1)}>Decrease</button>
    </div>
  )
}