import React, {useState} from 'react'

export default function Wrapper(){
    return(
        <div>
            <CardWrapper>
                Hello World!!
            </CardWrapper>
            <CardWrapper>

                <TextComponent />
            </CardWrapper>
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

function CardWrapper({children}){
    return(
        <div style={{border:'2px solid royalblue', borderRadius:'100px'}}>
            {children}
        </div>
    )
}