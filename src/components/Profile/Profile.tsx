import React from 'react';
import p from './Profile.module.css';
import '../../App.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../Redux/profile_reducer";

type MapPropsProfileP = {
    addPostProfile: () => void
    changePostProfile: (action: string) => void
    UpDateStatusAPI: (value: string) => void
    profilePage: ProfileType
    status: string
}

export const Profile = (props: MapPropsProfileP) => {

    return (
        <div className={p.content}>
            <ProfileInfo
                profilePage={props.profilePage}
                status={props.status}
                UpDateStatusAPI={props.UpDateStatusAPI}
            />
            <MyPostsContainer/>
        </div>
    );
}
