import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux';
import {store} from "../src/redux/store.js"
import "./main.css"

const ReduxApp= () =>{
  return (
    <Provider store={store}>
      <App />
    </Provider>
   
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ReduxApp />
  </React.StrictMode>,
)
