import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
        <div className={s.nav}>
            <div className={s.item}>
                <NavLink to={"/profile/"} className={s.activLink}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={"/users/"} className={s.activLink}>Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={"/dialogs/"} className={s.activLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={"/news/"} className={s.activLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={"/music/"} className={s.activLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={"/settings/"} className={s.activLink}>Settings</NavLink>
            </div>


        </div>);
}
