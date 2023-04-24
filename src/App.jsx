import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'




const App = () => {


const stories = [
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

const welcome = {
   greeting: 'Hey from props',
   title: 'Reactive from props'
}


   return (
      <div>
      <Greeting greeting={welcome}/>
      <List list={stories} />
      <Search/>
      </div>
   )
}


const Greeting = (props) => {
   return(
      <div><h1>{props.greeting.greeting} {props.greeting.title}</h1></div>
   )
}

const List = (props) => (
      <ul>
      {props.list.map((item) => (
         <Item key={item.objectID} item={item} />
        ))}
      </ul>
);


const Item = (props) => (
 <li key={props.item.objectID}>{props.item.title}
    <span><a href="{item.url}">{props.item.title}</a></span>
    <span>{props.item.author}</span>
    <span>{ props.item.num_comments }</span>
    <span>{props.item.points}</span>
 </li>
)

const Search = () => {

const [searchTerm, setSearchTerm] = useState('')

   const handleChange = (event) => {
      console.log(event);
      console.log(event.target.value);
      setSearchTerm(event.target.value);
   }
   return(
      <div>
      <label htmlFor="search">Search:</label>
      <input type="text" onChange={handleChange} id="search"/>
      <p>Searching for {searchTerm}</p>
      </div>
   ) 
}

export default App
