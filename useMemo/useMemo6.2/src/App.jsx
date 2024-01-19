// If I ask you to create an app that does two things -
// 1. Increases a counter by 1
// 2. Lets user put a value in an input box (n) and you need
// to show sum from 1 to n (Ex: n=5 means sum from 1 to 5 = 15)

// One restriction - everything needs to be inside App
// ************************************************************************************

import React, {useState, useEffect, useMemo} from 'react'
import './App.css'

export default function App(){
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(0);
  const [countValue, setCountValue] = useState(0);

  //useEffect whenever inputValue will change, perform sum operation
  useEffect(()=>{
    let sum = 0
    for (let i=1; i<=inputValue; i++){
      sum = sum +  i ;
    }
    setCountValue(sum)
    console.log("count value is: "+ countValue)
  },[inputValue])

  //memoisation
  const count = useMemo(()=>{
    let sum = 0;
    for (let i=1; i<=inputValue; i++){
      sum += i;
    }
    console.log("sum is: "+ sum)
    return sum
    
  }, [inputValue])

  //counter function
  const counterFunc = ()=>{
    setCounter(counter + 1);
  }
  return(
    <div>
      <input type="text" placeholder="Enter a number"
        onChange={(e)=>setInputValue(e.target.value)}
      />
      <h5>sum {count}</h5>
      <h5>sum {countValue}</h5>

      <button onClick={counterFunc}>counter {counter}</button>
    </div>
  )
}