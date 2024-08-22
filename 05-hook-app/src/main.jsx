import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { MainApp } from './09-useContext/MainApp'
import {BrowserRouter} from 'react-router-dom'
// import { HooksApp } from './HooksApp'
// import { CounterApp } from './01-useState/CounterApp'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import SimpleForm from './02-useEffect/SimpleForm'
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHook'
// import { CallbackHook } from './06-memos/CallbackHook'
// import { Padre } from './07-tarea-memo/Padre'

// import './08-useReducer/intro-reducer'


ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
   <BrowserRouter>
    <MainApp/>
   </BrowserRouter>
//   </React.StrictMode>,
)
