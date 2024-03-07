import React, {useMemo, useState} from "react";
import '../App.css'

const LazyComponent = ()=>{
    const [num, setNum] = useState(0);

    const btnFunc = ()=>{
        setNum(num=>num+1)
    }
    const randNum = useMemo(()=>{
       return Math.floor(Math.random()*99); 
    }, [num])
    return(
        <div>
            This is Lazy Page
            <button onClick={btnFunc}>Click to get Random number {randNum}</button>
            {console.log("LAZY-LOADING...")}
        </div>
    )
}

export default LazyComponent;