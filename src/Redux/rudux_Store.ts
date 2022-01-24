import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialog_reducer";
import userReducer from "./user_reducer";
import authReducer from "./auth-reducer";
import thankMiddleware from 'redux-thunk'

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPages: dialogsReducer,
    users: userReducer,
    auth: authReducer,
    //siteBar: () => {}
})


export type AppStateType = ReturnType<typeof reducers>

const store = createStore(reducers, applyMiddleware(thankMiddleware))

//@ts-ignore
window.store = store;

export default store