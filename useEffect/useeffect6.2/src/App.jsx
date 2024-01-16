
// import axios from 'axios'
import './App.css'

export default function App(){
  const [todos, setTodos] = useState([]);

  useEffect(()=>{
    fetch("https://sum-server.100xdevs.com/todos")
    .then(async (res)=>{
      const response = await res.json();
      setTodos(response.todos);
    })
  },[])


  return(
    <div>
      {
        todos.map((todo)=> <Todo key={todo.id} title={todo.title} description={todo.description}/> )
      }
    </div>
  )
}

//Todo component
const Todo = ({title, description})=>{
  return(
    <div>
      <h1>{title}</h1>
      <h5>{description}</h5>
    </div>
  )
}