import React, {ChangeEvent} from "react";
import p from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {Navigate} from "react-router-dom";
import {Field, Form, reduxForm} from "redux-form";

type DialogNickType = { id: number, name: string }
type MessageType = { id: number, message: string }

type messagePost = {
    dialogNick: DialogNickType[],
    messages: MessageType[],
    messageBody: string
    updateNewMessageBody: (value: string) => void
    sendMessage: () => void
    isAuth: boolean
}
export const Dialogs: React.FC<messagePost> = (props) => {
    const dialogsElements = () =>
        props.dialogNick.map(d => <DialogItem name={d.name} id={d.id}/>)
    const messagesElement = props.messages.map(m => <Message message={m.message}/>)
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessageBody(e.currentTarget.value)
    }
    const addPost = () => props.sendMessage()
    const onSubmit = (value: any) => {

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
        <Form onSubmit={props.handleSubmit}>
            <Field name={'addMayPost'} component={"textarea"}/>
        </Form>
        <div>
            <button>add</button>
        </div>
    </>
}

const LoginReduxForm = reduxForm({form: 'AddPost'})(AddPostForm)
