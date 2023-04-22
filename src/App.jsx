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

const list = [
   {
   title: 'React',
   url: 'https://reactjs.org/',
   author: 'Jordan Walke',
   num_comments: 3,
   points: 4,
   objectID: 0,
},
   {
   title: 'Redux',
   url: 'https://redux.js.org/',
   author: 'Dan Abramov, Andrew Clark',
   num_comments: 2,
   points: 5,
   objectID: 1,
},
];
  return (
      <div>


      {list.map(function (item) {
          return <li key={item.objectID}>{item.title}</li>;
        })}


        <h1>{welcome.greeting} {welcome.title}</h1>
        <label htmlFor="search">Search:</label>
        <input type="text" id="search"/>
      </div>
  )
}

export default App
