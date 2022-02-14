import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./Redux/rudux_Store";
import {Provider} from "react-redux";
import { BrowserRouter } from 'react-router-dom';

export const renderEnteerTree = () => {
    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
        <App/>,
            {/*// state={store.getState()}*/}
            {/*// dispatch={store.dispatch.bind(store)}*/}
            </BrowserRouter>
        </Provider>,
        document.getElementById('root')
    );
}

renderEnteerTree()
store.subscribe(renderEnteerTree)

// store.subscribe(renderEnteerTree)



