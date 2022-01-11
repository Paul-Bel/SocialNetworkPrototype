export type UserType = { id: number, followed: boolean, fullName: string, status: string, photo: string, location: { country: string, city: string } }
export type StateType = { users: Array<UserType> }

type USER_AC_TYPE =
    FOLLOW_AC
    | UN_FOLLOW_AC
    | SET_USERS_TYPE

type FOLLOW_AC = { type: 'FOLLOW_', id: number }
type UN_FOLLOW_AC = { type: 'UN_FOLLOW_', id: number }
type SET_USERS_TYPE = { type: "SET_USERS", users: UserType[] }

const initialState: StateType = {
    users: [

    ]
}

export const userReducer = (state: StateType = initialState, action: USER_AC_TYPE): StateType => {

    switch (action.type) {
        case 'FOLLOW_':
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.id) {
                        return {...user, followed: true}
                    }
                    return user
                })
            };
        case 'UN_FOLLOW_':
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.id) {
                        return {...user, followed: false}
                    }
                    return user
                })
            };
        case "SET_USERS":
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state;
    }
}

export const followAC = (user_id: number): FOLLOW_AC => ({type: 'FOLLOW_', id: user_id})
export const unFollowAC = (user_id: number): UN_FOLLOW_AC => ({type: 'UN_FOLLOW_', id: user_id})
export const setUsersAC = (users: UserType[]): SET_USERS_TYPE => ({type: "SET_USERS", users})
