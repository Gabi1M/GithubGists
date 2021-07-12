import React from 'react';
import classes from './GistContainer.css';
import SearchBar from '../components/SearchBar/SearchBar';
import GistList from '../components/GistList/GistList';

const GistContainer = (props) => (
    <div className={classes.GistContainer}>
        <div className={classes.SearchBar}>
            <SearchBar />
        </div>
        <div className={classes.GistList}>
            <GistList />
        </div>
    </div>
);

export default GistContainer;
