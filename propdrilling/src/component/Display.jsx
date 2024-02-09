import React from 'react'
import { UseCount } from './Context'

export default function Display(){
    const {Uname, count} = UseCount();
    return(
        <div>
            <h1>This is {Uname[Math.floor(Math.random()*Uname.length)]} {count}</h1>
        </div>
    )
}