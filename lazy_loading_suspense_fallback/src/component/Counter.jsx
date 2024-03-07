import React, {useState} from 'react'
import '../App.css'

export function Counter(){
    const [count, setCount] = useState(0);

    return(
        <div>
            <button onClick={()=>setCount(count=>count+1)}>Counter {count}</button>
            {console.log("COUNTER")}
        </div>
    )
}