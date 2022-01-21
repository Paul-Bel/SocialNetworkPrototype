import React from 'react';
import p from './Header.module.css';
import '../../App.css'
import {NavLink} from "react-router-dom";
import {MapStateToProps, MapToProps} from "./HeaderContainer";

type HeaderPropsType = {
    data: {
        id: number | null,
        login: string | null,
        email: string | null,
    },
    isAuth: boolean,
}

export const Header = (props: HeaderPropsType) => {
    return (
    <header className={p.header}>
        <div>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:
                ANd9GcQeCm48YLb7mh4rFyJNq202jtVys3xZlhMQNg&usqp=CAU"
                alt=""/>
<div className={p.nickName}>
            {props.isAuth ? props.data.login :
            <NavLink to={'/logit'}>Login</NavLink>}
</div>
        </div>

    </header>);
}