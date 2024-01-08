import React, {useState} from 'react'
export default function App(){
  return(
    <div>
      <Header title="Header1"/>
      <HeaderWithButton/>
      <Header title="Header2"/>
      <Header title="Header3"/>
      <Header title="Header4"/>
    </div>
  )
}
//separate button with Header to change content
function HeaderWithButton(){
  const [content, setContent] = useState('Raj');
  function contentChange(){
    setContent(Math.floor(Math.random()*100));
  }
  return(
    <div>
      <button onClick={contentChange}>Click here to change the content</button>
      <Header title={content}/>
    </div>
  )
}
//Header function
function Header({title}){
  return(
    <div>{title}</div>
  )
}