import React, {useState, useEffect} from 'react'
import './App.css'

export default function App(){
  const [todoList, setTodoList] = useState([]);

  useEffect(()=>{
    fetch("https://sum-server.100xdevs.com/todos")
    .then(async (res)=>{
      const response = await res.json();
      setTodoList(response.todos);
      console.log("Render-1")
    })
    .catch((err)=>console.error(`ERROR: ${err}`))
  }, [])

   useEffect(()=>{
     setTimeout(()=>{
       console.log("Render-2")
     });
   }, [])

  return(
    <div>

     {
      todoList.length>0? (
        todoList.map((todo)=>(
          <h5 key={todo.id}> {todo.title} {todo.description}</h5>
        ))
      ):(
        <p>Loading...</p>
      )
     }       
      
    </div>
  )
}