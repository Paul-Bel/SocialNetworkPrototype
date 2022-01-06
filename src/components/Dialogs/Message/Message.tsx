import React from "react";
import p from './Message.module.css'

type Mess = {
    message: string;
}
export const Message = (props: Mess) => {
    return (
        <div className={p.messag}>{props.message}</div>
    )
}


