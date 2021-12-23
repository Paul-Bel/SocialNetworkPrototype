import React from "react";

export type TYPE_DISPATCH_CREATOR = string
// 'changePost' | 'addPost' | 'changeDialogPost' | 'addDialogPost'
type ActionPropsType = {
    type: TYPE_DISPATCH_CREATOR,
    value?: string
}
type PostType = { id: number, message: string, likescounte: number, }
type DialogNickType = { id: number, name: string }
type MessageType = { id: number, message: string }
type DataType = {
    profilePage: { post: PostType[], newPostText: string }
    dialogNick: DialogNickType[],
    messages: MessageType[],
    messageBody: string
    sidebar: {}
}

const addPost = 'addPost'
const changePost = 'changePost'
export const addPostActionCreator = () => ({type: addPost})
export const changePostActionCreator = (value: string) => {
    return ({type: changePost, value})
}

const profileReducer = (action: ActionPropsType, state: any) => {
    switch (action.type) {
        case changePost:
            if (action.value)
                state.profilePage.newPostText = action.value;
            return state;
        case addPost:
            if (state.profilePage.newPostText.trim()) {
                let addNewPost = {id: 6, message: state.profilePage.newPostText.trim(), likescounte: 0}
                state.profilePage.post.push(addNewPost)
                state.profilePage.newPostText = ''
            }
            ;
            return state;
        default:
            return state
    }
}

export default profileReducer