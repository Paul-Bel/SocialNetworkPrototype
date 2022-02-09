import React from "react";
import p from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLength, required} from "../../utils/validation/validators";
import {TextArea} from "../../utils/form/FormControl";

type DialogNickType = { id: number, name: string }
type MessageType = { id: number, message: string }
type messagePost = {
    dialogNick: DialogNickType[],
    messages: MessageType[],
    sendMessage: (value: string) => void
    isAuth: boolean}
type FormType = {addMayPost: string}

const textLength100 = maxLength(100)

export const Dialogs: React.FC<messagePost> = (props) => {
    const dialogsElements = () =>
        props.dialogNick.map(d => <DialogItem name={d.name} id={d.id}/>)
    const messagesElement = props.messages.map(m => <Message message={m.message}/>)

    const onSubmit = (value: FormType) => {
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

const AddPostForm: React.FC<InjectedFormProps<FormType>> = (props) => {

    return <>
        <form onSubmit={props.handleSubmit}>
            <div>
            <Field name={'addMayPost'}
                   component={TextArea}
                   validate={[required, textLength100]}
            />
            </div>
        <div>
            <button>add</button>
        </div>
        </form>
    </>
}

const LoginReduxForm = reduxForm<FormType>({form: 'AddPost'})(AddPostForm)
