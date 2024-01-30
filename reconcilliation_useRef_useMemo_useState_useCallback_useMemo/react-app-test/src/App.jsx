import React, {useEffect, useRef, useState} from 'react'

export default function App(){
  const [name, setName] = useState('Raj');

  useEffect(()=>{
    setTimeout(()=>{document.getElementById('ref').innerHTML = "Hello! this is John..."}, 3000);
    console.log(document.getElementById('ref'))
  }, []);

  return(
    <div>
      <h1 id="ref">Hi there, this is {name}</h1>
    </div>
  )
}