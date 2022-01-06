import React, {ChangeEvent} from "react";
import p from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {TYPE_DISPATCH_CREATOR} from "../Redux/dialog_reducer";

type DialogNickType = { id: number, name: string }
type MessageType = { id: number, message: string }
export type ActionPropsType = {
    type: TYPE_DISPATCH_CREATOR,
    value?: string
}
type messagePost = {
    dialogNick: DialogNickType[],
    messages: MessageType[],
    messageBody: string
    //
    // dispatch: (action: ActionPropsType) => void
    //
    updateNewMessageBody: (value: string)=> void
    sendMessage: () => void
}

export const Dialogs: React.FC<messagePost> = (props) => {
    const dialogsElements = () =>
        props.dialogNick.map(d => <DialogItem name={d.name} id={d.id}/>)
    const messagesElement = props.messages.map(m => <Message message={m.message}/>)
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) =>{
                // props.dispatch(changeDialogsPost(e.currentTarget.value))
        props.updateNewMessageBody(e.currentTarget.value)
    }
    const addPost = () => props.sendMessage()
        // props.dispatch(addDialogCreator())

    return (
        <div className={p.dialogs}>
            <div className={p.itemDialogs}>
                {dialogsElements()}
            </div>
            <div className={p.messages}>
                {messagesElement}

                <div>
                    <textarea
                        value={props.messageBody}
                        onChange={onChangeHandler}
                    />
                </div>
                <div>
                    <button
                    onClick={addPost}
                    >add</button>
                </div>

            </div>
        </div>
    )
}

