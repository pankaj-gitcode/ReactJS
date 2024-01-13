import React, {useState} from 'react'

let globalId = 4;

export default function Todo1(){
    //state array with 3 todos
    const [todos, setTodos] = useState([{
        id:1,
        title: 'sports',
        description: 'Learn Martial Arts'
    },{
        id:2,
        title: 'certifications',
        description: 'Javascript certifications'
    },{
        id: 3,
        title: 'food',
        description: 'Paneer kurma'
    }])

    function addTodo(){
        setTodos([...todos, {
            id: globalId++, 
            title: Math.floor(Math.random() * 10), 
            description: Math.floor(Math.random() * 10)}])
    }
    
    return(
        <div>
            {/* button in top level App coomponent to add new TODO */}
            <button onClick={addTodo}>Add Todos</button>
            {/* Iterate over the array and render all todos */}
            {todos.map((todo)=> <Todo key={todo.id} title={todo.title} description={todo.description}  />)}
        </div>
    )
}


//Todo component that accepts title, description as input
function Todo({title, description}){
    return(
        <div>
            <h4>{title}</h4>
            <h6>{description}</h6>
        </div>
    )
}