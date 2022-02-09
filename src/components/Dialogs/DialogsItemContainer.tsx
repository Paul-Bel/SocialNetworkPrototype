import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/rudux_Store";
import {addDialogCreator} from "../../Redux/dialog_reducer"
import React, {ComponentType} from "react";
import {withRedirect} from "../../common/hoc/withRedirect";
import {compose, Dispatch } from "redux";


let mapStateToProps = (store: AppStateType) => {
    return ({
        dialogNick: store.dialogsPages.dialogNick,
        messages: store.dialogsPages.messages,
    })
}
let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        sendMessage: (value: string) => {
            dispatch(addDialogCreator(value))}
    }
}
// let authRedirectComponent = withRedirect(Dialogs)
//
// export const DialogsItemContainer = connect(mapStateToProps, mapDispatchToProps)(authRedirectComponent)


export default compose<ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withRedirect,
)(Dialogs)