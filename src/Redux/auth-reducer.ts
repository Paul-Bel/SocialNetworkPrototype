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