export type ItemsType = {
    name: string,
    id: number,
    photos: {small: string | null,  large: string | null},
    status: string | null,
    followed: boolean,
}
export type UseresType = {
    items: ItemsType[]
    totalCount: number,
    error: string | null,
    currentPage: number,
    totalPageSize: number,
}
type USER_AC_TYPE = FOLLOW_AC
    | UN_FOLLOW_AC | CHANGE_PAGE_USERS_TYPE
    | SET_USERS_TYPE


type FOLLOW_AC = { type: 'FOLLOW_', id: number }
type UN_FOLLOW_AC = { type: 'UN_FOLLOW_', id: number }
type SET_USERS_TYPE = { type: "SET_USERS", items: UseresType }
type CHANGE_PAGE_USERS_TYPE = { type: "CHANGE_USERS_PAGE", currentPage: number }

const initialState: UseresType = {
    items: [] as ItemsType[],
    totalCount: 0,
    error: null,
    currentPage: 1,
    totalPageSize: 10,
}

const userReducer = (state: UseresType = initialState, action: USER_AC_TYPE): UseresType => {
    switch (action.type) {
        case 'FOLLOW_':
            return {
                ...state,
                items: state.items.map(user => {
                    if (user.id === action.id) {
                        return {...user, followed: true}
                    }
                    return user
                })
            };
        case 'UN_FOLLOW_':
            return {
                ...state,
                items: state.items.map(user => {
                    if (user.id === action.id) {
                        return {...user, followed: false}
                    }
                    return user
                })
            };
        case "SET_USERS":
            return {
                ...state,
                items: [...action.items.items],
                totalCount: action.items.totalCount,
                error: action.items.error
            };
            case "CHANGE_USERS_PAGE":
                return {...state, currentPage: action.currentPage};
        default:
            return state;
    }
}

export const followAC = (user_id: number): FOLLOW_AC => ({type: 'FOLLOW_', id: user_id})
export const unFollowAC = (user_id: number): UN_FOLLOW_AC => ({type: 'UN_FOLLOW_', id: user_id})
export const setUsersAC = (items: UseresType): SET_USERS_TYPE => ({type: "SET_USERS", items})
export const changePagesAC = (currentPage: number): CHANGE_PAGE_USERS_TYPE => ({type: "CHANGE_USERS_PAGE", currentPage})

export default userReducer