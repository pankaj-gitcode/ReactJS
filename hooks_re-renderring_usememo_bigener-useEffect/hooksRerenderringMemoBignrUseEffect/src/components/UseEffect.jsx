import React, {useEffect, useState} from 'react'

export default function UseEffect(){
    const [todos, setTodos] = useState([]);

    useEffect(()=>{
        
            fetch("https://sum-server.100xdevs.com/todos")
            .then(async(val)=>{
                const response = await val.json();
                setTodos(response.todos);
            })
        
    } ,[])

    return(
        <div>
            {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description}/>)}
        </div>
    )
}

function Todo({title, description}){
    return(
        <div>
            <h1>{title}</h1>
            <h5>{description}</h5>
        </div>
    )
}