import {Link, NavLink} from "react-router-dom";
import React from "react";
import p from './DialogsItem.module.css'

type ItemProps = {
    name: string;
    id: number;
}
export const DialogItem = (props: ItemProps) => {

    return (
        <div className={p.dialog + ' ' + p.active}>
            <NavLink to={'/dialogs/' + props.id}> {props.name} </NavLink>
        </div>
    )
}