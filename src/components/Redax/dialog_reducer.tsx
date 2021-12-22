import React from "react";
import {TYPE_DISPATCH_CREATOR} from "./State";


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
const changeDialogPost = 'changeDialogPost'
const addDialogPost = 'addDialogPost'

const dialogsReducer = (action: ActionPropsType, state: DataType) => {

    switch (action.type) {
        case  changeDialogPost:
            if (action.value)
                state.messageBody = action.value;
            return state;
        case addDialogPost:
            let newDialogPost = {id: 3, message: state.messageBody.trim()}
            state.messages.push(newDialogPost)
            state.messageBody = '';
            return state
    }
}
export default dialogsReducer