import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { GlobalContext } from './tools/GlobalContext';

ReactDOM.render(
    <GlobalContext>
        <App />
    </GlobalContext>,
    document.getElementById('root')
);
