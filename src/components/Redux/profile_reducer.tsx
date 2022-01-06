import React from "react";

export type TYPE_DISPATCH_CREATOR = string
// 'changePost' | 'addPost' | 'changeDialogPost' | 'addDialogPost'
type ActionPropsType = {
    type: TYPE_DISPATCH_CREATOR,
    value?: string
}
type PostType = { id: number, message: string, likescounte: number, }
type DataType = {post: PostType[], newPostText: string}

let initialState: DataType =   {
        post: [
            {id: 1, message: "It's me. What are you doing?", likescounte: 5},
            {id: 2, message: "I'am learn", likescounte: 13},
        ],
            newPostText: '',
}

const addPost = 'addPost'
const changePost = 'changePost'
export const addPostActionCreator = () => ({type: addPost})
export const changePostActionCreator = (value: string) => {
    return ({type: changePost, value})
}

const profileReducer = (state: DataType = initialState, action: ActionPropsType) => {
    switch (action.type) {
        case changePost:
            if (action.value)
                state.newPostText = action.value;
            return state;
        case addPost:
            if (state.newPostText.trim()) {
                let addNewPost = {id: 6, message: state.newPostText.trim(), likescounte: 0}
                state.post.push(addNewPost)
                state.newPostText = ''
            }
            ;
            return state;
        default:
            return state
    }
}

export default profileReducer