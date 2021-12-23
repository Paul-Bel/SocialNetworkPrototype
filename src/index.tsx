import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from "./components/Redux/Store";

type PostType = { id: number, message: string, likescounte: number }
type profilePageType = { post: Array<PostType>, newPostText: string }
type dialogType = { id: number, name: string }
type dialogNickType = Array<dialogType>
type messageType = { id: number, message: string }
type messagesType = Array<messageType>
type dialogsPagesType = { dialogNick: dialogNickType, messages: messagesType, messageBody: string }
type siteBarType = { id: number }

export type stateType = {
    profilePage: profilePageType
    dialogsPages: dialogsPagesType
    siteBar: siteBarType
}


export const renderEnteerTree = (data: stateType) => {
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



