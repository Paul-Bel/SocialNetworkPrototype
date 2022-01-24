import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/rudux_Store";
import {addDialogCreatorAC, changeDialogsPostAC} from "../../Redux/dialog_reducer"
import React from "react";
import {withRedirect} from "../hoc/withRedirect";
import { Dispatch } from "redux";


let mapStateToProps = (store: AppStateType) => {
    return ({
        dialogNick: store.dialogsPages.dialogNick,
        messages: store.dialogsPages.messages,
        messageBody: store.dialogsPages.messageBody,
    })
}
let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        updateNewMessageBody: (value: string) => {
            dispatch(changeDialogsPostAC(value))},
        sendMessage: () => {
            dispatch(addDialogCreatorAC())}
    }
}
let authRedirectComponent = withRedirect(Dialogs)

export const DialogsItemContainer = connect(mapStateToProps, mapDispatchToProps)(authRedirectComponent)