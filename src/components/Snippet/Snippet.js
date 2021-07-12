import React, { useState, useEffect } from 'react';
import classes from './Snippet.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useFetch } from '../../tools/ApiHelper';

const CodeSnippet = (props) => {
    const [code, setCode] = useState('');
    const { response, setUrl } = useFetch(false);

    useEffect(() => {
        setUrl(props.codeUrl);
        if (response !== null) {
            setCode(response);
        }
    }, [props.codeUrl, response]);

    return (
        <div className={classes.Snippet}>
            <div>
                <p>{props.filename}</p>
            </div>
            <SyntaxHighlighter
                showLineNumbers={true}
                language={
                    props.language != null ? props.language.toLowerCase() : ''
                }
                style={darcula}
            >
                {`${code}`}
            </SyntaxHighlighter>
        </div>
    );
};

export default CodeSnippet;
