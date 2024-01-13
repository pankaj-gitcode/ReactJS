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

            <CardWrapper>
                <h5>This is h5 tag</h5>
                <CardWrapper>
                    <TextComponent />
                </CardWrapper>
            </CardWrapper>
        </div>
    )
}

function TextComponent(){
    return(
        <div>
             This is TextComponent
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