import React from "react";
import {combineReducers, createStore} from "redux";
import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialog_reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPages: dialogsReducer,
    //siteBar: () => {}
})


export type AppStateType = ReturnType<typeof reducers>

const store = createStore(reducers)

export default store