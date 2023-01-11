import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';
import getAsyncStories from './data';
import AddList from './components/AddList'
import Search from './components/Search'
import { useState, useEffect } from 'react';

function storiesReducer(state, action) {
    switch (action.type) {
        case 'SET_STORIES':
            return action.payload
        case 'REMOVE_STORIES':
            return state.filter((story) => action.payload.objectID !== story.objectID)
        case 'ADD_STORIES':
            return [...state, newList(action.payload.name)]
        default:
            throw new Error();
    }
}

function newList(name) {
    return {
        objectID: uuidv4(),
        name: name,
        isComplete: false
    }
}

const App = () => {

    const [stories, dispatchStories] = React.useReducer(storiesReducer, [])
    const [isLoading, setIsLoading] = React.useState(false);
    const [isError, setIsError] = React.useState(false);

    return (
        <div>
            <h1>My Hacker Stories</h1>
            <hr />
            {isError && <p>Something went wrong</p>}
            <Search stories={stories} dispatchStories={dispatchStories} />
            <hr />
            <AddList stories={stories} dispatchStories={dispatchStories} />

        </div>
    );
};


export default App;
