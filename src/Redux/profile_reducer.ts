import {Dispatch} from "redux";
import {ProfileAPI, UserAPI} from "../api/api";

export type PostType = { id: number, message: string, likescounte: number, }
export type ContactType = {
    facebook: string | null,
    website: string | null,
    vk: string | null,
    twitter: string | null,
    instagram: string | null,
    youtube: string | null,
    github: string | null,
    mainLink: string | null,
}
export type PhotoProfileType = { small: string | undefined, "large": string | undefined,}
export type ProfileType = {
    aboutMe: string | null,
    contacts: ContactType
    lookingForAJob: boolean | null,
    lookingForAJobDescription: string | null,
    fullName: string | null,
    userId: number | null,
    photos: PhotoProfileType,
    post: PostType[],
    newPostText: string,
    status: string,}
export type ForProfileServetType = {
    aboutMe: string | null,
    contacts: ContactType
    lookingForAJob: boolean | null,
    lookingForAJobDescription: string | null,
    fullName: string | null,
    userId: number,
    photos: PhotoProfileType,
}
export type ActionGetStatusUserType = string

let initialState: ProfileType = {
    aboutMe: null,
    contacts: <ContactType> {
        facebook: null,
        website: null,
        vk: null,
        twitter: null,
        instagram: null,
        youtube: null,
        github: null,
        mainLink: null,
    },
    lookingForAJob: true,
    lookingForAJobDescription: null,
    fullName: null,
    userId: null,
    photos:<PhotoProfileType> {
        small: undefined,
        large: undefined,
    },
    post: [
        {id: 1, message: "It's me. What are you doing?", likescounte: 5},
        {id: 2, message: "I'am learn", likescounte: 13},
    ],
    newPostText: '',
    status: '',
}


type ActionReducerType = AddPostProfileType | ChangePostProfileType | SetProfileType | GetUserStatusType
export type AddPostProfileType = {type: 'addPost'}
export type ChangePostProfileType = {type: 'changePost', action: string}
export type SetProfileType = {type: 'SET_PROFILE', action: ForProfileServetType}
export type GetUserStatusType = {type: 'GET_USER_STATUS', action: ActionGetStatusUserType}
export type UpdateStatusType = {type: 'UPDATE_STATUS', action: string}

export const addPostProfile = (): AddPostProfileType => ({type: 'addPost'})
export const changePostProfile = (action: string):ChangePostProfileType => ({type: 'changePost', action})
export const setProfile = (action: ForProfileServetType):SetProfileType => ({type: 'SET_PROFILE', action})
export const getUserStatus = (action: ActionGetStatusUserType):GetUserStatusType => ({type: 'GET_USER_STATUS', action})

const profileReducer = (state: ProfileType = initialState, action: ActionReducerType): ProfileType => {
    switch (action.type) {
        case 'changePost':
            return {...state, newPostText: action.action};
        case 'addPost': {
            let addNewPost = {id: 6, message: state.newPostText, likescounte: 0}
            if (state.newPostText.trim()) {
                return {...state, post: [...state.post, addNewPost], newPostText: ''}
            }
            return state
        };
        case 'SET_PROFILE':
            return {...state,
                aboutMe: action.action.aboutMe,
                contacts: {...action.action.contacts},
                lookingForAJob: action.action.lookingForAJob,
                lookingForAJobDescription: action.action.lookingForAJobDescription,
                fullName: action.action.fullName,
                userId: action.action.userId,
                photos: {...action.action.photos},
            };
        case 'GET_USER_STATUS':
            return {...state, status: action.action};
        default:
            return state
    }
}

export const setProfileAPI = (id: number) => {
    return (dispatch: Dispatch) => {
        UserAPI.getProfile(id).then(response => {
            dispatch(setProfile(response.data))
        })
    }
}
export const getUserStatusAPI = (id: number) => {
    return (dispatch: Dispatch) => {
        ProfileAPI.getStatus(id).then(response => {
            dispatch(getUserStatus(response.data))
        })
    }
}
export const UpDateStatusAPI = (status: string) => {
    return (dispatch: Dispatch) => {
        ProfileAPI.updateStatus({status })
            .then(response => {
            if(response.data.resultCode === 0) {
                dispatch(getUserStatus(status))
            }
        })
    }
}

export default profileReducer
