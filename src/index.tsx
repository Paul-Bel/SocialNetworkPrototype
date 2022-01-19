import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./Redux/Rudux_Store";
import {Provider} from "react-redux";

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



