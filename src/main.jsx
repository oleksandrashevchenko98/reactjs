import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import './css/index.css'
import './css/menu.css'
import Menu from './components/Menu/Menu.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Menu />
  </React.StrictMode>,
)
