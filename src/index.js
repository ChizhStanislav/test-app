import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './index.css';
import store from "./data/state";

let renderEntireTree = (store) => {
    ReactDOM.render(<App store={store} />, document.getElementById('root'));
};

renderEntireTree(store);


