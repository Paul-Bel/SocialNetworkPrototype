import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialog_reducer";
import userReducer from "./user_reducer";
import authReducer from "./auth-reducer";
import thankMiddleware from 'redux-thunk'

let rootReduser = combineReducers({
    profilePage: profileReducer,
    dialogsPages: dialogsReducer,
    users: userReducer,
    auth: authReducer,
    //siteBar: () => {}
})


export type AppStateType = ReturnType<typeof rootReduser>

const store = createStore(rootReduser, applyMiddleware(thankMiddleware))

//@ts-ignore
window.store = store;

export default store