//useEffect cons: let's say 2 exchange investment i've exchange1Data & exchange2Data and one bankData

import React, {useState, useEffect, useMemo} from 'react'
import './App.css'

export default function App(){
  // 2 exchange data & 1 bank data
  const [exchange1Data, setExchange1Data] = useState({});
  const [exchange2Data, setExchange2Data] = useState({});
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

//useMemo for complex calculation
  const exchangeData = useMemo(()=>{
    console.log("usememo")
    const totalExchange = exchange1Data.return + exchange2Data.return;
    return totalExchange;
  }, [exchange1Data, exchange2Data])

  // const exchangeData = exchange1Data.return + exchange2Data.return;
  const tax = (exchangeData + bankData.return) * 0.3
  console.log("Render-2");

  return(
    <div>
      <h4>Total tax is: {[tax]}</h4>
      <h6> {console.log("hi") }</h6>
    </div>
  )
}

