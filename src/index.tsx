import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from "./components/Redax/State";

type PostType = {
    id: number,
    message: string,
    likescounte: number,
}
type DialogNickType = { id: number, name: string }
type MessageType = { id: number, message: string }
type DataType = {
    profilePage: { post: PostType[], newPostText: string },
    dialogNick: DialogNickType[],
    messages: MessageType[],
    messageBody: string
}


export const renderEnteerTree = (data: DataType) => {
    ReactDOM.render(
        <App
            data={data}
            dispatch={store.dispatch.bind(store)}
        />,

        document.getElementById('root')
    );
}


renderEnteerTree(store.getState())
// store.subscribe(renderEnteerTree)



