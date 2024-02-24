import React from 'react'
import './App.css'
import { RecoilRoot, atom, useRecoilValue } from 'recoil'
import { todoAtom } from './Atoms'
export default function App(){
  return(
    <div>
     <RecoilRoot>
      <Todo id={1}/>
      <Todo id={2}/>
      <Todo id={3}/>
     </RecoilRoot>
      
    </div>
  )
}

const Todo = ({id})=>{
  const todoAtomNew = atom({
    key: 'todoAtomNew',
    default: {
      id: 3 ,
      title: 'Go to Park',
      description: 'Go to park @7AM'
    }
  })
  const todoCount2 = useRecoilValue(todoAtomNew);
  const todoCount1 = useRecoilValue(todoAtom);
  
  return(
    <div>
      <ul>
        <li>id: {todoCount1.id}</li>
        <li>Title: {todoCount1.title}</li>
        <li>Description: {todoCount1.description}</li>
        <li>Completed: {todoCount1.completed}</li>
            <br/>
        <li>id: {todoCount2.id}</li>
        <li>Title: {todoCount2.title}</li>
        <li>Description: {todoCount2.description}</li>
        <li>Completed: {todoCount2.completed}</li>
      </ul>
    </div>
  )
}
