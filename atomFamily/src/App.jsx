import React from 'react'
import './App.css'
import { RecoilRoot, useRecoilValue } from 'recoil'
import { todo1Atom, todo2Atom } from './Atoms'

export default function App(){
  return(
    <div><RecoilRoot>
      <TodoApp id={2}/>
    
    </RecoilRoot></div>
  )
}

//Component: TodoApp

const TodoApp = ({id})=>{
  const todo1 = useRecoilValue(todo1Atom);
  const todo2 = useRecoilValue(todo2Atom);

  return(
    <div>
      <ul>
        <li>ID: {todo1.id}</li>
        <li>Title: {todo1.title}</li>
        <li>Description: {todo1.description}</li>
      </ul>
      <ul>
        <li>ID: {todo2.id}</li>
        <li>Title: {todo2.title}</li>
        <li>Description: {todo2.description}</li>
      </ul>
    </div>
  )
}