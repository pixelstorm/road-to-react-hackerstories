import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

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

function App() {
   return (
      <div>
      <Greeting/>
      <List />
      <Search/>
      </div>
   )
}
function Greeting() {
   return (
      <div><h1>{welcome.greeting}{welcome.title}</h1></div>
   )


}

function List() {
   return (
      <ul>
      {list.map(function (item) {
          return (
               <li key={item.objectID}>{item.title}
                <span><a href="{item.url}">{item.title}</a></span>
                <span>{item.author}</span>
                <span>{ item.num_comments }</span>
                <span>{item.points}</span>
             </li>
          );
        })}
      </ul>
   )
}

function Search() {
   return(
      <div>
      <label htmlFor="search">Search:</label>
      <input type="text" id="search"/>
      </div>
   ) 

   


}
export default App
