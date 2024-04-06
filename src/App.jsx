import { useState } from 'react'
import Header from './components/Header/header';
import Form from './components/Form/form';
import './css/index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
<div className="App"><Header />
            <main className="content">
                <h1 className="title">
                    The best pizza.<br />
                    <span className="text-yellow">Straight out of the oven, straight to you.</span>
                </h1>
                <p className="sub-title">👋 Welcome! Please start by telling us your name:</p>
                <Form />
            </main></div>)
}

export default App
