type AuthHeaderType = {type: 'AUTH_ME', action: InitialStateAuthType}
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
}

let initialStateAuth: InitialStateAuthType = {
    "data": {
    "id": null,
        "login": null,
        "email": null,
},
    "messages": [],
    "fieldsErrors": [],
    "resultCode": 0
}


const authReducer = (state = initialStateAuth, action: ActionAuthType): InitialStateAuthType => {

    switch (action.type) {
        case'AUTH_ME': {
            return {...state, ...action.action}
        }
        default:
            return state;
    }
}

export const authHeader = (state: InitialStateAuthType):AuthHeaderType => ({type: 'AUTH_ME', action: state} )
export default authReducer