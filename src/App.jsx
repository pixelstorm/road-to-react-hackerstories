import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const welcome = {
   greeting: 'Hey',
   title: 'Reactive'
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

const App = () => {
   return (
      <div>
      <Greeting/>
      <List />
      <Search/>
      </div>
   )
}


const Greeting = () => {
   return(
      <div><h1>{welcome.greeting} {welcome.title}</h1></div>
   )
}

const List = () => {
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

const Search = () => {

   const handleChange = (event) => {
      console.log(event);
      console.log(event.target.value);
   }
   return(
      <div>
      <label htmlFor="search">Search:</label>
      <input type="text" onChange={handleChange} id="search"/>
      </div>
   ) 
}

export default App
