import React from 'react';
import p from './Profile.module.css';
import '../../App.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPosts} from "./MyPosts/MyPosts";
import {TYPE_DISPATCH_CREATOR} from "../Redax/State";


type PostType = {
    id: number,
    message: string,
    likescounte: number,
}
type ActionPropsType = {
    type: TYPE_DISPATCH_CREATOR,
    value?: string
}
type ProfilePropsType = {
    profilePage:{ post: PostType[], newPostText: string}
    dispatch: (action: ActionPropsType) => void
}

export const Profile = (props: ProfilePropsType) => {

    return (
        <div className={p.content}>
            <ProfileInfo/>
            <MyPosts
                profilePage={props.profilePage}
                dispatch={props.dispatch}

            />
        </div>
    );
}
