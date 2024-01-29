import React, {useState, useEffect, useMemo} from 'react'
import './App.css'

export default function App(){
  const [exchange1Data, setExchange1Data] = useState({});
  const [exchange2Data, setExchange2Data] = useState({});
  const [bankData, setBankData] = useState({});

  useEffect(()=>{
    setExchange1Data({return:100});
    console.log('UE-1')
  }, [])

  useEffect(()=>{
    setExchange2Data({return: 100});
    console.log("UE-2")
  }, [])

  useEffect(()=>{
    setTimeout(()=>{
      setBankData({return:100});
      console.log("UE-3 | Timeout")
    }, 5000);
  }, [])

  //useMemo
  const exchangeData = useMemo(()=>{
    console.log("useMemo...")
    const totalExchangeData = exchange1Data.return + exchange2Data.return;
    return totalExchangeData;
  }, [exchange1Data, exchange2Data]);

  const tax = exchangeData + bankData.return * 0.3 ; 
  console.log("Expensive Calculation");

  return(
    <div>
      <h1>Total Tax: {tax}</h1>
      {console.log("CS")}
    </div>
  )
}