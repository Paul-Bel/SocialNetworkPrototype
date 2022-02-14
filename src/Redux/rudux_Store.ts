import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialog_reducer";
import userReducer from "./user_reducer";
import auth_reducer from "./auth_reducer";
import thankMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import appReducer, {initializaTC} from "./app_reducer";

let rootReduser = combineReducers({
    profilePage: profileReducer,
    dialogsPages: dialogsReducer,
    users: userReducer,
    auth: auth_reducer,
    form: formReducer,
    app: appReducer,
    //siteBar: () => {}
})


export type AppStateType = ReturnType<typeof rootReduser>

const store = createStore(rootReduser, applyMiddleware(thankMiddleware))

//@ts-ignore
window.store = store;

export default store