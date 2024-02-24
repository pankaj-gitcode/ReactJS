import React from 'react'
import './App.css'
import { RecoilRoot, useRecoilValue } from 'recoil'
import { todoFamily } from './Atoms'

export default function App(){
  return(
    <div>
      <RecoilRoot>
        <Todo id={5}/>
        <Todo id={1}/>
        <Todo id={2}/>
        <Todo id={8}/>
        <Todo id={10}/>
        <Todo id={3}/>
      </RecoilRoot>
    </div>
  )
}

//Todo Component
const Todo = ({id})=>{
  const todoItem = useRecoilValue(todoFamily(id));
  return(
    <div>
      <ul>
        <li>Id: {todoItem.id}</li>
        <li>Title: {todoItem.title}</li>
        <li>Description: {todoItem.description}</li>
      </ul>
    </div>
  )
}