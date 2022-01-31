import React from "react";
import s from './ProfileInfo.module.css'
import {ProfileType} from "../../../Redux/profile_reducer";
import {ProfileStatus} from "./ProfileStatus";


type ProfileInfoType = {profilePage: ProfileType}

export const ProfileInfo = (props: ProfileInfoType) => {
    return (

        <div>
            {/*<img src="https://upload.wikimedia.org/wikipedia/commons/7/7f/Istanbul_IMG_7257_1725.jpg"*/}
            {/*     alt=""/>*/}
            <div  className={s.info}>
               <img className={s.photoSmall} src={props.profilePage.photos.small} alt="картинка маленькая"/>
                <img className={s.photoSmall} src={props.profilePage.photos.large} alt="картинка большая"/>
               <div> {props.profilePage.fullName} </div>
                <ProfileStatus/>
            </div>
        </div>
    )
}