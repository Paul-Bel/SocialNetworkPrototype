import React from "react";

export type TYPE_DISPATCH_CREATOR = string
// 'changePost' | 'addPost' | 'changeDialogPost' | 'addDialogPost'
type ActionPropsType = {
    type: TYPE_DISPATCH_CREATOR,
    value?: string
}
type PostType = { id: number, message: string, likescounte: number }
type profilePageType = { post: Array<PostType>, newPostText: string }
type dialogType = { id: number, name: string }
type dialogNickType = Array<dialogType>
type messageType = { id: number, message: string }
type messagesType = Array<messageType>
type dialogsPagesType = { dialogNick: dialogNickType, messages: messagesType, messageBody: string }
type siteBarType = { id: number }

export type stateType = {
    profilePage: profilePageType
    dialogsPages: dialogsPagesType
    siteBar: siteBarType
}
const changeDialogPost = 'changeDialogPost'
const addDialogPost = 'addDialogPost'
export const addDialogCreator = () => ({type: addDialogPost})
export const changeDialogsPost = (value: string) => {
    return ({type: changeDialogPost, value})
}
const dialogsReducer = (action: ActionPropsType, state: stateType) => {

    switch (action.type) {
        case  changeDialogPost:
            if (action.value)
                state.dialogsPages.messageBody = action.value;
            return state;
        case addDialogPost:
            let newDialogPost = {id: 3, message: state.dialogsPages.messageBody.trim()}
            state.dialogsPages.messages.push(newDialogPost)
            state.dialogsPages.messageBody = '';
            return state;
        default:
            return state;
    }
}
export default dialogsReducer