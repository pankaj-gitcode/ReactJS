//useEffect cons: let's say 2 exchange investment i've exchange1Data & exchange2Data and one bankData

import React, {useState, useEffect, useMemo} from 'react'
import './App.css'

export default function App(){
  // 2 exchange data & 1 bank data
  const [exchange1Data, setExchange1Data] = useState({});
  const [exchnage2Data, setExchange2Data] = useState({});
  const [bankData, setBankData] = useState({});

  //useEffect for all individuals
  useEffect(()=>{
    setExchange1Data({return: 100});
    console.log('ue-1')
  },[])

  useEffect(()=>{
    setExchange2Data({return: 100});
    console.log('ue-2')
  }, [])

  useEffect(()=>{
    setTimeout(()=>{
      setBankData({return:100})
      console.log('timeout')
    }, 5000)
  }, [])
  console.log("Render-1");
  const totalExchangeData = exchange1Data.return + exchnage2Data.return;
  const tax = (totalExchangeData + bankData.return) * 0.3
  console.log("Render-2");

  return(
    <div>
      <h4>Total tax is: {[tax , totalExchangeData]}</h4>
      <h6> {console.log("hi") }</h6>
    </div>
  )
}



//  OUTPUT:👇
//       Render-1
//       Render-2
//       hi

//       ue-1
//       ue-2
//       Render-1
//       Render-2
//       hi

//       timeout
//       Render-1
//       Render-2
//       hi