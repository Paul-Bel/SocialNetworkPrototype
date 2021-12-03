import React from "react";
import p from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";


export const Dialogs = () => {
    const dialogNick = [
        {id: 1, name: 'Anatoliy'},
        {id: 2, name: 'Sergey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Nikifor'},
        {id: 5, name: 'Arsrniy'},
    ]

    let messages = [
        {id: 1, message: "Hello"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "I`am learn to React"},
    ]

    const dialogsElements = () => {
         return (dialogNick.map(d => <DialogItem name={d.name} id={d.id}/>)
         )
     }

    //const dialogsElements = dialogNick.map(d => <DialogItem name={d.name} id={d.id}/>)



    const messagesElement = messages.map(m => <Message message={m.message} />)

    return (
        <div className={p.dialogs}>
            <div className={p.itemDialogs}>
                {dialogsElements()}
                {/*<DialogItem name='Arsrniy' id="5"/>*/}
            </div>
            <div className={p.messages}>
                {messagesElement}
            </div>


        </div>
    )
}

