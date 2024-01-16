import React, {useEffect, useState} from 'react'
import './App.css'

export default function App(){

  return(
    <div>
      <Todo id={2}/>
    </div>
  )
}

//Todo component
function Todo({id}){
  const [todo, setTodo] = useState([]);

  useEffect(()=>{
    fetch(`https://sum-server.100xdevs.com/todo?id=${id}`)
    .then(async(res)=>{
      const response = await res.json();
      setTodo(response.todo)
    })
  }, [])

  return(
    <div>
      <h1>{todo.title}</h1>
      <h5>{todo.description}</h5>
    </div>
  )
}