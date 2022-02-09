import {Dispatch} from "redux";
import {authMe} from "../api/api";

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
        console.log('Call chekOut')
        authMe.me()
            .then(data => {
                if(data.resultCode === 0)
                    dispatch(setAuthHeader({...data, isAuth: true}))
                console.log('Ok')
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
    (dispatch: Dispatch) => {
    authMe.loginMe({email, password, rememberMe})
        .then(data => {
            console.log('After: ',data.resultCode)
            if(data.resultCode === 0) {
                //@ts-ignore
                dispatch(checkAuth())
                // checkAuth()
                console.log('checkAuth: ', data.resultCode)
            }
            else return
        })
}
export const logUot = () => (dispatch: Dispatch) => {
    authMe.logUotMe().then(data =>{
        if(data.resultCode === 0)  dispatch(setAuthHeader({...initialStateAuth, isAuth: false}))
    })
}