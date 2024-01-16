import React, {useState, useEffect} from 'react'
import './App.css'

export default function App(){
  const [cnt, setCnt] = useState(1)
  
  function ch1(){
    setCnt(1)
  }
  function ch2(){
    setCnt(2)
  }
  function ch3(){
    setCnt(3)
  }
  function ch4(){
    setCnt(4)
  }

  return(
    <div>
      <button onClick={ch1}>1</button>
      <button onClick={ch2}>2</button>
      <button onClick={ch3}>3</button>
      <button onClick={ch4}>4</button>

      <Todo id={cnt}/>
    </div>
  )
}

function Todo ({id}){
  const [todo, setTodo] = useState([]);

  useEffect(()=>{
    fetch(`https://sum-server.100xdevs.com/todo?id=${id}`)
    .then(async(res)=>{
      const response = await res.json();
      setTodo(response.todo)
    })
  }, [id])

  return(
    <div>
      id:{id}
      <h1>{todo.title}</h1>
      <h5>{todo.description}</h5>
    </div>
  )

}