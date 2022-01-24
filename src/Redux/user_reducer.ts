import {UserAPI} from "../api/api";
import {Dispatch} from "redux";
import {AppStateType} from "./rudux_Store";
import axios from "axios";

export type ItemsType = {
    name: string,
    id: number,
    photos: { small: string | null, large: string | null },
    status: string | null,
    followed: boolean,
}
export type UseresType = {
    items: ItemsType[]
    totalCount: number,
    error: string | null,
    currentPage: number,
    totalPageSize: number,
    isFetching: boolean,
    followingInProgress: Array<number>
}
type USER_AC_TYPE = FOLLOW_AC | UN_FOLLOW_AC | SET_USERS_TYPE
    | CHANGE_FETCHING | changeFollowingInProgress

type FOLLOW_AC = { type: 'FOLLOW_', id: number }
type UN_FOLLOW_AC = { type: 'UN_FOLLOW_', id: number }
type SET_USERS_TYPE = { type: "SET_USERS", items: UseresType, currentPage: number }
type CHANGE_FETCHING = { type: "CHANGE_Fetching", isFetching: boolean }
type changeFollowingInProgress = { type: "CHANGE_Disabled", followingInProgress: number, isFetchingD: boolean }

const initialState: UseresType = {
    items: [] as ItemsType[],
    totalCount: 0,
    error: null,
    currentPage: 1,
    totalPageSize: 10,
    isFetching: true,
    followingInProgress: [1, 2],
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
                items: state.items.map(us => {
                    if (us.id === action.id) {
                        return {...us, followed: false}
                    }
                    return us
                })
            };
        case "SET_USERS":
            return {
                ...state,
                items: [...action.items.items],
                totalCount: action.items.totalCount,
                error: action.items.error,
                currentPage: action.currentPage,
            };
        case "CHANGE_Fetching":
            return {...state, isFetching: action.isFetching};
        case "CHANGE_Disabled":
            return {
                ...state, followingInProgress:
                    action.isFetchingD ?
                        [action.followingInProgress]
                        : state.followingInProgress.filter(f => f != action.followingInProgress)
            };
        default:
            return state;
    }
}

export const follow = (user_id: number): FOLLOW_AC => ({type: 'FOLLOW_', id: user_id})
export const unFollow = (user_id: number): UN_FOLLOW_AC => ({type: 'UN_FOLLOW_', id: user_id})
export const setUsers = (items: UseresType, currentPage: number): SET_USERS_TYPE => ({
    type: "SET_USERS",
    items,
    currentPage
})
export const changeFetching = (isFetching: boolean): CHANGE_FETCHING => ({type: "CHANGE_Fetching", isFetching})
export const changeFollowingInProgress = (followingInProgress: number, isFetchingD: boolean): changeFollowingInProgress => ({
    type: "CHANGE_Disabled", followingInProgress, isFetchingD,
})


export const getUsers = (currentPage: number, totalPageSize: number) => {
    return (dispatch: Dispatch, getState: () => AppStateType) => {
        dispatch(changeFetching(false))
        UserAPI.getUsers(currentPage+102, totalPageSize)
            .then(respons => {
                dispatch(changeFetching(true))
                dispatch(setUsers(respons, currentPage))
                // dispatch(changePages(currentPage))
            })
    }
}
export const changeFollowUser = (id: number) => {
    return (dispatch: Dispatch) => {
        dispatch(changeFollowingInProgress(id, true))
        UserAPI.follow(id)
            .then(response => {
                console.log(response)
                dispatch(changeFollowingInProgress(id, false))
                if(response === 0) {dispatch(follow(id))}
                }
            )
    }
}
export const changeUnFollowUser = (id: number) => {
    return (dispatch: Dispatch) => {
        dispatch(changeFollowingInProgress(id, true))
        UserAPI.unFollow(id)
            .then(response => {
                console.log(response)
                dispatch(changeFollowingInProgress(id, false))
                if(response === 0) {dispatch(unFollow(id))}
                }
            )
    }
}


export default userReducer