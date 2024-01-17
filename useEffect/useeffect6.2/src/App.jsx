import React, {useState, useEffect} from 'react'
import './App.css'

export default function App(){
  const [todoId, setTodoId] = useState(1);

  const changeId1 = ()=>{ setTodoId(1) }
  const changeId2 = ()=>{ setTodoId(2) }
  const changeId3 = ()=>{ setTodoId(3) }
  const changeId4 = ()=>{ setTodoId(4) }

  return(
    <div>
      <button onClick={changeId1}>1</button>
      <button onClick={changeId2}>2</button>
      <button onClick={changeId3}>3</button>
      <button onClick={changeId4}>4</button>

      <Todo id={todoId}/>
    </div>
  )
}

//Todo component
const Todo = ({id})=>{
  const [todo, setTodo] = useState([]);

  useEffect(()=>{
    fetch(`https://sum-server.100xdevs.com/todo?id=${id}`)
    .then(async(res)=>{
      const response = await res.json();
      setTodo(response.todo);
    })
    .catch((err)=>console.log(err))
  },[id])

  return(
    <div>
      id:{id}
      <h1>{todo.title}</h1>
      <h5>{todo.description}</h5>
    </div>
  )
}