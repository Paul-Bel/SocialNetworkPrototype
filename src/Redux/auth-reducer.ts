import {Dispatch, Action} from "redux";
import {authMe} from "../api/api";
import { ThunkAction } from 'redux-thunk'
import {AppStateType} from "./rudux_Store";
import {stopSubmit} from "redux-form";


type ThunkType<TAction extends Action<any>> = ThunkAction<Promise<void>, AppStateType, unknown, TAction>

export type AuthHeaderType = { type: 'AUTH_ME', action: InitialStateAuthType }
type ActionAuthType = AuthHeaderType
export type InitialStateAuthType = {
    "data": {
        "id": number | null,
        "login": string | null,
        "email": string | null,
    },
    "messages": [],
    "fieldsErrors": [],
    "resultCode": number
    isAuth: boolean,
}

let initialStateAuth: InitialStateAuthType = {
    data: {
        id: null,
        login: null,
        email: null,
    },
    messages: [],
    fieldsErrors: [],
    resultCode: 0,
    isAuth: false,
}


const authReducer = (state = initialStateAuth, action: ActionAuthType): InitialStateAuthType => {

    switch (action.type) {
        case'AUTH_ME': {
            return { ...action.action}
        }
        default:
            return state;
    }
}

export const setAuthHeader = (state: InitialStateAuthType): AuthHeaderType => ({type: 'AUTH_ME', action: state})
export default authReducer

export const checkAuth = () => {
    return (dispatch: Dispatch) => {
        authMe.me()
            .then(data => {
                if(data.resultCode === 0)
                    dispatch(setAuthHeader({...data, isAuth: true}))
            })
    }
}
export const setLoginUser = (id: number) => {
    return {
        type: 'Set_Login_User',
        payload: {data: {
                id: id,
                login: null,
                email: null,
            },}}}

export const loginUser = (email: string, password: string, rememberMe: boolean) =>
    // : ThunkType<AuthHeaderType>     =>
   async (dispatch: Dispatch) => {
    authMe.loginMe({email, password, rememberMe})
        .then(data => {
            console.log('After: ',data.messages[0])
            if(data.resultCode === 0) {

                //@ts-ignore
                dispatch(checkAuth())
                console.log('checkAuth: ', data)
            }

            else return dispatch(stopSubmit('Login',{_error: data.messages[0]}))
        })
}
export const logUot = () => (dispatch: Dispatch) => {
    authMe.logUotMe().then(data =>{
        if(data.resultCode === 0)  dispatch(setAuthHeader({...initialStateAuth, isAuth: false}))
    })
}