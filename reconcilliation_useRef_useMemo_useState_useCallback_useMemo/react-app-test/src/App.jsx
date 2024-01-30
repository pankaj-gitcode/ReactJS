import React, {useState, memo, useCallback} from 'react'

export default function App(){
  const [counter, setCounter] = useState(0);

  const click = ()=>{
    setCounter(counter+1);
  }
  const value = 100;
  const value1 = 200;

  const func1 = useCallback(()=>{
    const a = 100;
    return a;
  }, [])
  return(
    <div>
      <button onClick={click}>Counter: {counter}</button>
      <Display title={value}/>
      <Display title={value1}/>
      <Display1 val={func1} />
      
    </div>
  )
}

const Display =memo(({title})=>{
  console.log("This is re-rendered!!")
  return(
    <div>display: {title}</div>
  )
})

const Display1 = memo(({val})=>{
  console.log("function re-renders")
  return(
    <div>Value: {val()}</div>
  )
})