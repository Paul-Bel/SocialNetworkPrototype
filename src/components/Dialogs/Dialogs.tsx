import React from "react";
import p from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {Field, reduxForm} from "redux-form";

type DialogNickType = { id: number, name: string }
type MessageType = { id: number, message: string }

type messagePost = {
    dialogNick: DialogNickType[],
    messages: MessageType[],
    sendMessage: (value: string) => void
    isAuth: boolean
}
export const Dialogs: React.FC<messagePost> = (props) => {
    const dialogsElements = () =>
        props.dialogNick.map(d => <DialogItem name={d.name} id={d.id}/>)
    const messagesElement = props.messages.map(m => <Message message={m.message}/>)

    const onSubmit = (value: any) => {
        console.log(value)
        props.sendMessage(value.addMayPost)
    }
    return (
        <div className={p.dialogs}>
            <div className={p.itemDialogs}>
                {dialogsElements()}
            </div>
            <div className={p.messages}>
                {messagesElement}
                <LoginReduxForm onSubmit={onSubmit}/>
            </div>
        </div>
    )
}

const AddPostForm = (props: any) => {

    return <>
        <form onSubmit={props.handleSubmit}>
            <div>
            <Field name={'addMayPost'} component={"textarea"}/>
            </div>
        <div>
            <button>add</button>
        </div>
        </form>
    </>
}

const LoginReduxForm = reduxForm({form: 'AddPost'})(AddPostForm)
