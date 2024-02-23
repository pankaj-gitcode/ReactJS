import React, { useEffect, useMemo } from 'react'

import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { countAtom, countSelector, dataAtom } from './atoms'

export default function App(){
  return(
    <div>
    <RecoilRoot>
      <Count/>
    </RecoilRoot>
    </div>
  )
}
//Component-1: Count
const Count = ()=>{
  return(
    <div>
      <CountRender />
      <Buttons />
      {console.log("wont re-render")}
    </div> 
  )
}

//Component-2: CountRender
const CountRender = ()=>{
  const count = useRecoilValue(countAtom);
  const selectCount = useRecoilValue(countSelector);
  
  const [datas, setDatas] = useRecoilState(dataAtom);

  useEffect(()=>{
    const fetchData = async()=>{
      try{
        const response = await fetch("https://sum-server.100xdevs.com/notifications");
        const res = await response.json();
        setDatas(res);
      }
      catch(err){console.log(`ERROR:=> ${err}`)}
    }
    fetchData();
  }, [count])

  const EvenOdd = useMemo(()=>{
    return count%2==0?'Even':'Odd'
  }, [count])
  console.log("it'll re-render => Comp.:CountRender")
  return(
    <div>
      <b>Counter Value is: {count}</b>  
      <b> 👉🏽 Used UseMemo: {EvenOdd} &nbsp;|&nbsp; Used Selector: {selectCount}</b>

      <ul> LinkedIn Services:
        <li>Network: {datas.network}</li>
        <li>Jobs: {datas.jobs}</li>
        <li>Messaging: {datas.messaging}</li>
        <li>Notifications: {datas.notifications}</li>
      </ul>
      {console.log(`all ${datas.network}`)}
    </div>
  )
}

//component-3: Buttons
const Buttons = ()=>{
  const count = useRecoilValue(countAtom);
  const setCounter = useSetRecoilState(countAtom);

  return(
    <div>
      <button onClick={()=>setCounter(coun=>coun+1)}>Increase</button>
      <button onClick={()=>setCounter(coun=>coun-1)}>Decrease</button>
      {console.log("It'll Re-render=>BUTTON Comp.")}
    </div>
  )
}