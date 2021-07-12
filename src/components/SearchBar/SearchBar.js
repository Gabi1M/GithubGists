import React, { useEffect, useRef } from 'react';
import classes from './SearchBar.css';
import { useGlobalContext } from '../../tools/GlobalContext';
import { useFetch } from '../../tools/ApiHelper';
import { AiFillGithub } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';

const SearchBar = () => {
    const { updateGists, updateUsername } = useGlobalContext();
    const user = useRef('');
    const { response, setUrl } = useFetch(true);

    const clickHandler = () => {
        if (user.current.value === '') {
            return;
        }

        updateUsername(user.current.value);
        setUrl(`https://api.github.com/users/${user.current.value}/gists`);
    };

    useEffect(() => {
        if (response !== null) {
            updateGists(response);
        }
    }, [response, updateGists]);

    return (
        <div className={classes.SearchBar}>
            <div className={classes.SearchContent}>
                <p>Github Gists</p>
                <input ref={user} placeholder="Enter an username ..." />
                <button onClick={clickHandler}>
                    <BsSearch></BsSearch>
                </button>
            </div>
            <div className={classes.logo}>
                <a href="https://github.com/">
                    <AiFillGithub></AiFillGithub>
                </a>
            </div>
        </div>
    );
};

export default SearchBar;
