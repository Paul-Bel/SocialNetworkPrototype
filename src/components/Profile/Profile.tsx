import React from 'react';
import p from './Profile.module.css';
import '../../App.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../Redux/profile_reducer";

type MapPropsProfileP = {
    addPostProfile: () => void
    changePostProfile: (action: string) => void
    profilePage: ProfileType
}

export const Profile = (props: MapPropsProfileP) => {

    return (
        <div className={p.content}>
            <ProfileInfo profilePage={props.profilePage}/>
            <MyPostsContainer/>
            {/*<MyPosts*/}
            {/*    profilePage={props.profilePage}*/}
            {/*    dispatch={props.dispatch}*/}

            {/*/>*/}
        </div>
    );
}
