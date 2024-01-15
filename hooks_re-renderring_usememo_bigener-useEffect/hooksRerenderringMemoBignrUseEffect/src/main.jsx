import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MemoComp from './components/MemoComp.jsx'
import Todo1 from './components/Todo1.jsx'
import Wrapper from './components/Wrapper.jsx'
import UseEffect from './components/UseEffect.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <MemoComp /> */}
    {/* <Todo1 /> */}
    {/* <Wrapper/> */}
    <UseEffect/>
  </React.StrictMode>,
)
