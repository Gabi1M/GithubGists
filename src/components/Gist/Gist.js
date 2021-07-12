import React, { useState, useEffect } from 'react';
import classes from './Gist.css';
import { useGlobalContext } from '../../tools/GlobalContext';
import { useFetch } from '../../tools/ApiHelper';
import { CgGitFork } from 'react-icons/cg';

const Gist = (props) => {
    const [forks, setForks] = useState([]);
    const { response, setUrl } = useFetch(true);

    useEffect(() => {
        setUrl(props.forksUrl);
        if (response !== null) {
            setForks(response);
        }
    }, [props.forksUrl, response]);
    const { username } = useGlobalContext();

    return (
        <div className={classes.Gist}>
            <div className={classes.header}>
                <div className={classes.information}>
                    <div className={classes.ownerInformation}>
                        <a href={props.ownerHtmlUrl}>
                            <img src={props.ownerImageSrc} alt="none" />
                        </a>
                        <p>{username}</p>
                    </div>
                    <div className={classes.forkContainer}>
                        {forks.length !== 0 ? (
                            <div className={classes.forkIcon}>
                                <CgGitFork></CgGitFork>
                            </div>
                        ) : null}
                        <div className={classes.forkInformation}>
                            {forks.slice(-3).map((item, index) => {
                                return (
                                    <a key={index} href={item.owner.html_url}>
                                        <img
                                            src={item.owner.avatar_url}
                                            alt="none"
                                        />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className={classes.gistInformation}>
                    <a className={classes.description} href={props.htmlUrl}>
                        {props.title}
                    </a>
                    <div className={classes.dates}>
                        <p>Created: {props.createDate}</p>
                        <p>Updated: {props.updateDate}</p>
                    </div>
                </div>
            </div>
            <div className={classes.snippets}></div>
        </div>
    );
};

export default Gist;
