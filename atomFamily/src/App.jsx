import React from 'react'
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilStateLoadable, useRecoilValue } from 'recoil'
import { todoAtom } from './Atoms'

export default function App(){
  return(
    <div>
      <RecoilRoot>
        <TodoApp id={1}/>
        <TodoApp id={2}/>
        <TodoApp id={3}/>
        <TodoApp id={4}/>
        <TodoApp id={5}/>
      </RecoilRoot>
    </div>
  )
}

//component: TodoApp
const TodoApp = ({id})=>{
  const [todo, setTodo ] = useRecoilStateLoadable(todoAtom(id));
  console.log(todo.state)
  if(todo.state==='loading'){return <div>Loading....</div>}
  else if(todo.state==='hasValue'){
  return(
    <div>
      <ul>
        <li>ID: {todo.id}</li>
        <li>Title: {todo.title}</li>
        <li>Discription: {todo.description}</li>
        <input type="checkbox" checked={todo.completed}/>
      </ul>
    </div>
  )}
}