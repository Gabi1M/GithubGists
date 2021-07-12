import React from 'react';
import classes from './SearchBar.css';

const SearchBar = () => {
    const clickHandler = () => {};

    return (
        <div className={classes.SearchBar}>
            <div className={classes.SearchContent}>
                <p>Github Gists</p>
                <input placeholder="Enter an username ..."></input>
                <button onClick={clickHandler}>Search</button>
            </div>
            <div className={classes.logo}></div>
        </div>
    );
};

export default SearchBar;
