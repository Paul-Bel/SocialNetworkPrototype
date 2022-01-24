import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/rudux_Store";
import {addDialogCreatorAC, changeDialogsPostAC} from "../../Redux/dialog_reducer"
import React, {Dispatch} from "react";


let mapStateToProps = (store: AppStateType) => {
    return ({
        dialogNick: store.dialogsPages.dialogNick,
        messages: store.dialogsPages.messages,
        messageBody: store.dialogsPages.messageBody,
        isAuth: store.auth.isAuth
    })
}
let mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        updateNewMessageBody: (value: string) => {
            dispatch(changeDialogsPostAC(value))},
        sendMessage: () => {
            dispatch(addDialogCreatorAC())}
    }
}

export const DialogsItemContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)