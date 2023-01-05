import { useState, useEffect } from 'react';
import * as React from 'react';
import SearchList from './SearchList'


export default function Search({ stories, setStories }) {
    const [searchTerm, setSearchTerm] = React.useState(localStorage.getItem('search'));
    // const [show, setShow] = useState(false);

    //If we want the browser to remember what user search before, we can put it in Local Storage.
    // If we put in directly into the const handleChange, it will break down if we need to use it elsewhere.
    // We can use useEffect()

    React.useEffect(() => {
        localStorage.setItem('search', searchTerm);
    }, [searchTerm]);

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
        // if (e.target.value === "") {
        //     setShow(false);
        // }
        // else {
        //     setShow(true);
        // }
    };


    const filteredList = stories.filter(
        (story) =>
            story.name.toLowerCase().includes(searchTerm.toLowerCase())

    )

    function searchList() {
        return (
            <div>
                <SearchList filteredList={filteredList} setStories={setStories} />
            </div>
        )
    }

    return (
        <section className="garamond">
            <div className="navy georgia ma0 grow">
                <h2 className="f2" >Search your course</h2>

            </div>
            <div className="pa2" >
                <input
                    className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
                    type="text"
                    onChange={handleChange}
                    value={searchTerm}
                />
            </div>
            {searchList()}
        </section>
    )
}