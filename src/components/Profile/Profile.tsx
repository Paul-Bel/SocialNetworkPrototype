import React from 'react';
import p from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import '../../App.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

// type MyPostsProps = {
//     id: number,
//     message: string,
//     likescounte: number,
// }

export const Profile = (props) => {
    return (
        <div className={p.content}>
            <ProfileInfo/>

            <MyPosts/>
        </div>
    );
}