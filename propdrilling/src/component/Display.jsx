//display the name from the array, make sure if count value is even then name that has index value even shoud display and if odd then name on 
//index value odd should display

import React, {useMemo} from 'react'
import { useCount } from './Context'

export default function Display(){
    const {count, setCount} = useCount();

    const uName = ['Arjun', 'Bhim', 'Yudhisthir', 'Nakul', 'Sahdev'];
    const countName = useMemo(()=>{
        const num = Math.floor(Math.random()*uName.length)
        if(num %2 == count%2){
            console.log(`EVEN-[${num}]`)
            return uName[num];
        }
        else{console.log(`ODD-[${num}]`); return uName[num]}
        
    }, [count])

    return(
        <div>
            <p>This is Display Component: {countName} </p>
        </div>
    )
}