import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./components/Redux/Rudux_Store";
import {Provider} from "react-redux";


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


export const renderEnteerTree = () => {
    ReactDOM.render(
        <Provider store={store}>
        <App
            state={store.getState()}
            dispatch={store.dispatch.bind(store)}
        />,
        </Provider>,
        document.getElementById('root')
    );
}

renderEnteerTree()
store.subscribe(renderEnteerTree)

// store.subscribe(renderEnteerTree)



