import React, {useState} from 'react'

export default function Wrapper(){
    return(
        <div>
            <CardWrapper innerComponent={<TextComponent />}/>
            <CardWrapper innerComponent={<TextComponent />}/>
            <CardWrapper innerComponent={<TextComponent />}/>
        </div>
    )
}

function TextComponent(){
    return(
        <div>
             hi there
        </div>
    )
}

function CardWrapper({innerComponent}){
    return(
        <div style={{border:'2px solid royalblue', borderRadius:'100px'}}>
            {innerComponent}
        </div>
    )
}