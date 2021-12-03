import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addMyPost} from "./components/Redax/State";

type PostType = {
    id: number,
    message: string,
    likescounte: number,
}
type DialogNickType = {id: number, name: string}
type MessageType = {id: number, message: string}
type DataType = {
    profilePage:{ post: PostType[]} ,
    dialogNick: DialogNickType[],
    messages: MessageType[],
}
type renderType = {
    data: DataType
}

export const renderEnteerTree = (data: DataType) =>{
    ReactDOM.render(
        <App
            data={data}
            addMyPost={addMyPost}/>,

        document.getElementById('root')
    );
}

