
type UserType = {id: number, followed: boolean, name: string, status: string, locotion: {country: string, city: string}}
type StateType = { users: Array<UserType> }

type USER_AC_TYPE =
    FOLLOW_AC
    | UN_FOLLOW_AC

type FOLLOW_AC = {type: 'FOLLOW_', id: number}
type UN_FOLLOW_AC = {type: 'UN_FOLLOW_', id: number}

const initialState: StateType = {
    users: [
        {id: 1, followed: true, name: 'Ivan', status: 'I am happy', locotion: {country: 'Russia', city: 'Moskov'}},
        {id: 2, followed: true, name: 'Ivan', status: 'Hello every one', locotion: {country: 'USA', city: 'Washington'}},
        {id: 3, followed: true, name: 'Ivan', status: 'I am happy', locotion: {country: 'Ukraine', city: 'Kiev'}},
    ]
}

export const userReducer = (state: StateType = initialState, action: USER_AC_TYPE):StateType => {

    switch (action.type) {
        case 'FOLLOW_':
            return {...state,
                users: state.users.map(user => {
                    if(user.id === action.id){
                        return {...user, followed: true}
                    } return user })
            };
        case 'UN_FOLLOW_':
            return {...state,
            users: state.users.map(user => {
                if(user.id === action.id) {
                    return {...user, followed: false}
                } return user })};
        default: return  state;
    }
}

export const followAC = (user_id: number):FOLLOW_AC => ({type: 'FOLLOW_', id: user_id})
export const unFollowAC = (user_id: number):UN_FOLLOW_AC => ({type: 'UN_FOLLOW_', id: user_id})
