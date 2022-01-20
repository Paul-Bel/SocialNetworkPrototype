import React from 'react';
import p from './Profile.module.css';
import '../../App.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {MapPropsProfile} from "./ProfileContainer";

export const Profile = (props: MapPropsProfile) => {

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
