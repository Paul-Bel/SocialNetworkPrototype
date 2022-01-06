import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import store, {AppStateType} from "../Redux/Rudux_Store";
import {addDialogCreatorAC, changeDialogsPostAC, TYPE_DISPATCH_CREATOR} from "../Redux/dialog_reducer";
import {Message} from "./Message/Message";
import React, {Dispatch} from "react";

export type ActionPropsType = {
    type: TYPE_DISPATCH_CREATOR,
    value?: string
}
const sendMessage = () => {
    store.dispatch(addDialogCreatorAC())
}
const updateNewMessafe = (value: string) => {
    store.dispatch(changeDialogsPostAC(value))
}
export const DialogsItemContainer1 = () => {

    // return (
    //     // <Dialogs dialogNick={} messages={} messageBody={} dispatch={}/>
    // )
}

let mapStateToProps = (store: AppStateType) => {
    return ({
        dialogNick: store.dialogsPages.dialogNick,
        messages: store.dialogsPages.messages,
        messageBody: store.dialogsPages.messageBody,
    })
}
let mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        updateNewMessageBody: (value: string) => {
            dispatch(changeDialogsPostAC(value))
        },
        sendMessage: () => {
            dispatch(addDialogCreatorAC())
        }


    }
}

export const DialogsItemContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)