import React from 'react';
import classes from './GistContainer.css';
import SearcBar from '../components/SearchBar/SearchBar';

const GistContainer = (props) => (
    <div className={classes.GistContainer}>
        <div className={classes.SearchBar}>
            <SearcBar />
        </div>
        <div className={classes.GistList}></div>
    </div>
);

export default GistContainer;
