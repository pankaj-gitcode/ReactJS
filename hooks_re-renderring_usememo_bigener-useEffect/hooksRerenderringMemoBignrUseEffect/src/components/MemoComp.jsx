import React, {useState, memo} from 'react'

export default function MemoComp(){
    const [content, setContent] = useState('Memo');

    function changeContent(){
        setContent(
            "The new content is: " + Math.random()
        )
    }

    return(
        <div>
            <Header title='Memo-1'/>
            <button onClick={changeContent}>Click Here</button>
            <Header title={content}/>
            <Header title='Memo-2'/>
            <Header title='Memo-3'/>
            <Header title='Memo-4'/>
        </div>
    )
}

//component-Header
const Header = memo(({title})=>{
    return(
        <div>
            {title}
        </div>
    )
})