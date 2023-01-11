import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';



// // const App = () => {
// //   const stories = [

// //     {
// //       title: 'React',
// //       url: 'https://reactjs.org/',
// //       author: 'Jordan Walke',
// //       num_comments: 3,
// //       points: 4,
// //       objectID: 0,
// //     }, {
// //       title: 'Redux',
// //       url: 'https://redux.js.org/',
// //       author: 'Dan Abramov, Andrew Clark',
// //       num_comments: 2,
// //       points: 5,
// //       objectID: 1,
// //     },];

// //   const [searchTerm, setSearchTerm] = React.useState('React');

// //   const handleSearch = (event) => {
// //     setSearchTerm(event.target.value);
// //   }

// //   const searchedStories = stories.filter((story) =>
// //     story.title.toLowerCase().includes(searchTerm.toLowerCase())
// //   );

// //   return (
// //     <div>
// //       <h1> My Hacker Stories </h1>

// //       <Search onSearch={handleSearch} />

// //       <hr />

// //       <List list={searchedStories} />

// //     </div>
// //   )
// // }

// // const Search = (props) => (
// //   <div>
// //     <label htmlFor="search"> Search: </label>
// //     <input id="search" type="text" onChange={props.onSearch} />
// //   </div>
// // )


// // const List = (props) => {

// //   return (
// //     <ul>
// //       {props.list.map((item) => (
// //         <li key={item.objectID} >
// //           <span>
// //             <a href={item.url} > {item.title} </a>
// //           </span>
// //           < Item item={item} />
// //         </li>
// //       )
// //       )}
// //     </ul>
// //   )
// // }

// // const Item = (props) => (
// //   <ul>
// //     <li key={props.item.objectID} >
// //       <span>    {props.item.author} </span>
// //     </li>

// //   </ul>
// // )


const App = () => {
  const initialStories = [

    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    }, {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },];

  const [searchTerm, setSearchTerm] = useState(localStorage.getItem('search'))
  const [stories, setStories] = useState(initialStories)

  React.useEffect(() => {
    localStorage.setItem('search', searchTerm);
    console.log("running")

  }, [searchTerm])

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  const searchedStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleRemoveStory = (item) => {
    const newStories = stories.filter((story) => item.objectID !== story.objectID);
    setStories(newStories)
  }


  return (
    <div>
      <h1>My Hacker Stories</h1>

      <InputWithLabel
        id="search"
        value={searchTerm}
        type="text"
        isFocused
        onInputChange={handleSearch}
      >
        <strong> Search </strong>
      </InputWithLabel>

      <List list={searchedStories} onRemoveItem={handleRemoveStory} />
    </div>
  )
}

const InputWithLabel = ({ id, value, type, isFocused, onInputChange, children }) => (
  <>
    <label >{children}</label> &nbsp;
    <input id={id} value={ } autoFocus={isFocused} onChange={onInputChange} />

  </>
)

const List = ({ list, onRemoveItem }) => {
  return (
    <li>
      {list.map((item) => (
        <Item
          key={item.objectID}
          item={item}
          onRemoveItem={onRemoveItem}
        />
      ))
      }
    </li>
  )
}

const Item = ({ item, onRemoveItem }) => {


  return (
    <li>
      <span>
        <a href={item.url}> {item.title}</a>
        <span>{item.author}</span>
        <span>{item.num_comments}</span>
        <span>{item.points}</span>
      </span>
      <span>
        <button type="button" onClick={() => onRemoveItem(item)} > Delete </button>
      </span>
    </li>
  )
};


const Search = ({ search, onSearch }) => (
  <>
    <label htmlFor="search">
      Search:
    </label>
    <input

      id="search"
      type="text"
      value={search}
      onChange={onSearch}
    />
  </>

);



export default App;



// // const gifts = [
// //   'PIGEON',
// //   'CICI',
// //   'BUN BUN',
// // ]


// function App() {
//   const [gift, setGift] = useState()

//   const handleGift = () => {
//     const index = Math.floor(Math.random() * gifts.length)
//     console.log(gifts[index])
//     setGift(gifts[index])
//   }
//   return (
//     <>
//       <div style={{ padding: 32 }}>
//         <h1>{gift || 'No gift for you hehe'}</h1>
//         <button onClick={handleGift}> Press for gift </button>

//       </div>
//     </>
//   )
// }

// export default App


// const stories = [

//   {
//     title: 'React',
//     url: 'https://reactjs.org/',
//     author: 'Jordan Walke',
//     num_comments: 3,
//     points: 4,
//     objectID: 0,
//   }, {
//     title: 'Redux',
//     url: 'https://redux.js.org/',
//     author: 'Dan Abramov, Andrew Clark',
//     num_comments: 2,
//     points: 5,
//     objectID: 1,
//   },];



// function Item({ story, onClick }) {
//   return (
//     <div >
//       <h2 onClick={() => onClick(story)}> {story.title} </h2>
//       <div>{story.author}</div>
//       <div>{story.num_comments}</div>
//       <div>{story.points}</div>
//     </div>
//   )

// }

// function Input({ label, ...inputProps }) {
//   return (
//     <div>
//       <label>{label}</label>
//       <input {...inputProps} />
//     </div>
//   )

// }



// function App() {

//   const handleClick = (story) => {
//     console.log(story.title)
//   }


//   return (
//     <div id='wrapper'>

//       {stories.map((story) => (

//         <Item
//           key={story.objectID}
//           story={story}
//           onClick={handleClick}
//         />


//       )
//       )
//       }
//       <Input
//         label="name"
//         id="checkbox"
//         placeholder="hello"
//       />

//     </div >
//   )
// }

// export default App


import * as React from 'react';
import { API_ENDPOINT } from './data';
import { useState, useEffect } from 'react';

function storiesReducer(state, action) {
  switch (action.type) {
    case 'SET_STORIES':
      return action.payload
    default:
      throw new Error();
  }
}

const App = () => {
  const [stories, dispatchStories] = React.useReducer(storiesReducer, [])
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);

  React.useEffect(() => {
    setIsLoading(true);
    fetch(`${API_ENDPOINT}react`)
      .then((res) => res.json())
      .then(result => {
        dispatchStories({
          type: 'SET_STORIES',
          payload: result.hits,
        });
        setIsLoading(false);
      })
      .catch(setIsError(true));
  }, []);

  return (
    <div>
      <h1> My Hacker Stories </h1>
      <hr />

      <List list={stories} />

    </div>
  )
}



const List = ({ list }) => {

  return (
    <ul>
      {list.map((item) => (
        <li key={item.objectID} >
          <span>
            <a href={item.url} > {item.title} </a>
          </span>
          {/* < Item item={item} /> */}
        </li>
      )
      )}
    </ul>
  )
}

// const Item = (props) => (
//     <ul>
//         <li key={props.item.objectID} >
//             <span>    {props.item.author} </span>
//         </li>

//     </ul>
// )

export default App;


import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';
import getAsyncStories from './data';
import AddList from './components/AddList'
import Search from './components/Search'
import { useState, useEffect } from 'react';
import { API_ENDPOINT } from './data';

function storiesReducer(state, action) {
  switch (action.type) {
    case 'SET_STORIES':
      return action.payload
    default:
      throw new Error();
  }
}


const App = () => {

  const [stories, dispatchStories] = React.useReducer(storiesReducer, [])
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const [searchTerm, setSearchTerm] = useState("")

  React.useEffect(() => {
    if (!searchTerm) return;
    setIsLoading(true);
    fetch(`${API_ENDPOINT}${searchTerm}`)
      .then((res) => res.json())
      .then(result => {
        dispatchStories({
          type: 'SET_STORIES',
          payload: result.hits,
        });
        setIsLoading(false);
      })
      .catch(setIsError(true));
  }, [searchTerm]);

  return (
    <div>
      <h1>My Hacker Stories</h1>
      <hr />
      {isError && <p>Something went wrong</p>}

      <hr />
      <List list={stories.data} />
    </div>
  );
};
const List = ({ list }) => {

  return (
    <ul>
      {list.map((item) => (
        <li key={item.objectID} >
          <span>
            <a href={item.url} > {item.title} </a>
          </span>
          < Item item={item} />
        </li>
      )
      )}
    </ul>
  )
}

const Item = (props) => (
  <ul>
    <li key={props.item.objectID} >
      <span>    {props.item.author} </span>
      <span>    {props.item.points} </span>
    </li>

  </ul>
)

export default App;
