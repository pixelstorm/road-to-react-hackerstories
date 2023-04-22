import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

const welcome = {

   greeting: 'hey',
   title: 'reactive'

}


  return (
      <div>
        <h1>{welcome.greeting} {welcome.title}</h1>
        <label htmlFor="search">Search:</label>
        <input type="text" id="search"/>
      </div>
  )
}

export default App
