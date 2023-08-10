//import hooks: {useState}
import React, {useState} from 'react';

export default function Textbox(props){
    //create state
    const [text, setText] = useState();
    //create onclickFunc() to change lower to Upper case tageted to value in <textarea>
    let onClickFunc = ()=>{
        // console.log(text);
        //update the entry using setText()
        setText(text.toUpperCase());
    }
    return(
        //paste the bootstrap 'form' component
        <>

            <div className="mb-3">
                <h2>{props.title}</h2>
                {/* <label forHTML="myTextBox" className="form-label">{prompt.title}</label> */}
                {/*create value to take user text & onChange to make entry dynamic & writable*/}
                <textarea className="form-control" value={text} onChange={(e)=>setText(e.target.value)} id="myTextBox" rows="3"></textarea>
            </div>
            <div>
                <button className="btn btn-primary" onClick={onClickFunc}>Click me</button>
            </div>
            {/*count the length of words & characters from <textarea>*/}  
            <p>Number of Character(s):{text.split("").length} </p> 
             
        </>

            
    )
}

