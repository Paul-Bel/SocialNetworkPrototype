import React from 'react';
import p from './Profile.module.css';
import '../../App.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPosts} from "./MyPosts/MyPosts";


type PostType = {
    id: number,
    message: string,
    likescounte: number,
}

type ProfilePropsType = {
    profilePage:{ post: PostType[], newPostText: string}
    addMyPost: () => void
    changePost: (Text: string) => void
}

export const Profile = (props: ProfilePropsType) => {

    return (
        <div className={p.content}>
            <ProfileInfo/>
            <MyPosts
                profilePage={props.profilePage}
                addMyPost={props.addMyPost}
                changePost={props.changePost}
            />
        </div>
    );
}
