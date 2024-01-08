import React, {useState, memo} from 'react'

export default function App(){
  const [title, setTitle] = useState('Raj');

  function clickButton(){
   setTitle("The new content is: " + Math.random());
  }

  return(
    <div>
      <button onClick={clickButton}>Click me</button>
      <Header title={title}/>
      <Header title='John-1'/>
      <Header title='John-2'/>
      <Header title='John-3'/>
    </div>
  )
}

//component-Header:=> It's prop is not changin,but when we click on button in App() it also renders
// function Header({title}){
//   return(
//     <div>{title}</div>
//   )
// }

//to stop we need to use "memo" for the component whose prop doenot changes but it's being re-rendering
const Header = memo(({title})=>{
  return(
    <div>{title}</div>
  )
})