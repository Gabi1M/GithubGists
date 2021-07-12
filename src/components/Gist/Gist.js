import React, { useState, useEffect } from 'react';
import classes from './Gist.css';
import Snippet from '../Snippet/Snippet';
import { useGlobalContext } from '../../tools/GlobalContext';
import { useFetch } from '../../tools/ApiHelper';
import { CgGitFork } from 'react-icons/cg';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

const Gist = (props) => {
    const [forks, setForks] = useState([]);
    const [showContent, setShowContent] = useState(false);
    const { response, setUrl } = useFetch(true);

    useEffect(() => {
        setUrl(props.forksUrl);
        if (response !== null) {
            setForks(response);
        }
    }, [props.forksUrl, response]);
    const { username } = useGlobalContext();

    const showContentToggle = () => {
        setShowContent(!showContent);
    };

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
            <div className={classes.snippets}>
                <div className={classes.buttonContainter}>
                    {showContent ? (
                        <button
                            className={classes.showContentButton}
                            onClick={showContentToggle}
                        >
                            <MdKeyboardArrowUp></MdKeyboardArrowUp>
                            Hide content
                        </button>
                    ) : (
                        <button
                            className={classes.showContentButton}
                            onClick={showContentToggle}
                        >
                            Show content
                            <MdKeyboardArrowDown></MdKeyboardArrowDown>
                        </button>
                    )}
                </div>
                {showContent
                    ? props.files.map((item, index) => {
                          return (
                              <Snippet
                                  key={index}
                                  filename={item.filename}
                                  language={item.language}
                                  codeUrl={item.raw_url}
                              />
                          );
                      })
                    : null}
            </div>
        </div>
    );
};

export default Gist;
