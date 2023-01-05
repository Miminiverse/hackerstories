import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';


export default function AddList({ stories, setStories }) {
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

    const handleChange = (e) => {
        setName(e.target.value)
    }

    const handleAdd = () => {
        const newList = stories.concat({ name, objectID: uuidv4() });
        setStories(newList);
        setName("");
    }

    return (
        <div className="navy georgia ma0 grow">
            <h2 className="f2" >Add your story</h2>
            <input type="text" value={name} onChange={handleChange} placeholder="React" />
            <button type="button" onClick={handleAdd}> Add </button>

        </div>
    )
}
