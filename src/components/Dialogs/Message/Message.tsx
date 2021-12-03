import React from "react";
import p from './Message.module.css'
import {Link} from "react-router-dom";

type Mess = {
    message: string;
}
export const Message = (props: Mess) => {
    return (
        <div className={p.messag}>{props.message}</div>
    )
}


