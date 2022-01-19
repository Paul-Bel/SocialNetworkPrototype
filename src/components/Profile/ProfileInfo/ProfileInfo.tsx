import React from "react";
import s from './ProfileInfo.module.css'
import {NavLink} from "react-router-dom";

export const ProfileInfo = () => {
    return (
        <div>

            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7f/Istanbul_IMG_7257_1725.jpg"
                 alt=""/>
            <div className={s.info}>Ava+discrip</div>

        </div>
    )
}