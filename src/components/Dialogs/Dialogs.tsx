import React from "react";
import p from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

type DialogNickType = {id: number, name: string}
type MessageType = {id: number, message: string}
type messagePost = {
    dialogNick: DialogNickType[],
    messages: MessageType[],
}

export const Dialogs = (props: messagePost) => {

    const dialogsElements = () => {
         return (props.dialogNick.map(d => <DialogItem name={d.name} id={d.id}/>)
         )
     }

    const messagesElement = props.messages.map(m => <Message message={m.message} />)

    return (
        <div className={p.dialogs}>
            <div className={p.itemDialogs}>
                {dialogsElements()}
            </div>
            <div className={p.messages}>
                {messagesElement}
            </div>


        </div>
    )
}

