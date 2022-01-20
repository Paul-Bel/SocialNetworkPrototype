import {combineReducers, createStore} from "redux";
import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialog_reducer";
import userReducer from "./user_reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPages: dialogsReducer,
    users: userReducer,
    //siteBar: () => {}
})


export type AppStateType = ReturnType<typeof reducers>

const store = createStore(reducers)

//@ts-ignore
window.store = store;

export default store