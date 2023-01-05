import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';
import getAsyncStories from './data';
import AddList from './components/AddList'
import Search from './components/Search'
import { useState, useEffect } from 'react';


const App = () => {

    const [stories, setStories] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const [isError, setIsError] = React.useState(false);

    React.useEffect(() => {
        setIsLoading(true);
        getAsyncStories().then(result => {
            setStories(result.data.stories);
            setIsLoading(false);
        })
            .catch(setIsError(true));
    }, []);

    return (
        <div>
            <h1>My Hacker Stories</h1>
            <hr />
            {isError && <p>Something went wrong</p>}
            <Search stories={stories} setStories={setStories} />
            <hr />
            <AddList stories={stories} setStories={setStories} />

        </div>
    );
};


export default App;