import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';


export default function AddList({ stories, dispatchStories }) {
    // const useSemiPersistentState = (key, initialState) => {
    //     const [value, setValue] = useState(
    //         localStorage.getItem(key) || initialState
    //     );

    //     React.useEffect(() => {
    //         localStorage.setItem(key, value);
    //     }, [value, key]);

    //     return [value, setValue];
    // };

    const [name, setName] = useState("");


    const handleAdd = (e) => {
        e.preventDefault()
        dispatchStories({
            type: "ADD_STORIES",
            payload: { name: name },
        })
        setName("");
    }

    return (
        <form onSubmit={handleAdd}>
            <h2 className="f2" >Add your story</h2>
            <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="React" />
            <button type="submit" > Add </button>
        </form>
    )
}
