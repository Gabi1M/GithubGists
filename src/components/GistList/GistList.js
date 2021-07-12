import React from 'react';
import classes from './GistList.css';
import { useGlobalContext } from '../../tools/GlobalContext';
import { VscSearchStop } from 'react-icons/vsc';
require('datejs');

const GistList = () => {
    const { gists } = useGlobalContext();

    const getFilesInfo = (files) => {
        const filesInfo = [];
        Object.keys(files).forEach((key) => {
            filesInfo.push({
                url: files[key].raw_url,
                filename: files[key].filename,
                language: files[key].language,
                raw_url: files[key].raw_url,
            });
        });

        return filesInfo;
    };

    return (
        <div className={classes.GistList}>
            {gists.length !== 0 ? (
                <div></div>
            ) : (
                <div className={classes.noResult}>
                    <VscSearchStop></VscSearchStop>
                </div>
            )}
        </div>
    );
};

export default GistList;
