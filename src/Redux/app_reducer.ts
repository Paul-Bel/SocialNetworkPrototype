import {Dispatch, Action} from "redux";
import {authMe} from "../api/api";
import {ThunkAction} from 'redux-thunk'
import {AppStateType} from "./rudux_Store";
import {stopSubmit} from "redux-form";
import {checkAuth} from "./auth_reducer";


type ThunkType<TAction extends Action<any>> = ThunkAction<Promise<void>, AppStateType, unknown, TAction>

export type AuthHeaderType = { type: 'SET_INITIALIZED', action: InitialStateAuthType }
type ActionAuthType = AuthHeaderType
export type InitialStateAuthType = {
    initialized: boolean,
}
let initialStateAuth: InitialStateAuthType = {
    initialized: false
}
const appReducer = (state = initialStateAuth, action: ActionAuthType): InitialStateAuthType => {
    switch (action.type) {
        case'SET_INITIALIZED': {
            return {...state, ...action.action}
        }
        default:
            return state;
    }
}

export const setInitializedSuccessAC = (): AuthHeaderType => ({type: 'SET_INITIALIZED', action: {initialized: true}})
export default appReducer

export const initializaTC = () => (dispatch: Dispatch) => {
    //@ts-ignore
    let promise = dispatch(checkAuth())
    promise.then(() => dispatch(setInitializedSuccessAC()));
}


