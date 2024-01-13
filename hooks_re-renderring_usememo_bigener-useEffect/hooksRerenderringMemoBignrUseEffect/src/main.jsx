import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MemoComp from './components/MemoComp.jsx'
import Todo1 from './components/Todo1.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <MemoComp /> */}
    <Todo1 />
  </React.StrictMode>,
)
