import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addMyPost, data} from "./components/Redax/State";

export const renderEnteerTree = () =>{
ReactDOM.render(
    <App
        data={data}
        addMyPost={addMyPost}/>,
  document.getElementById('root')
);
}

