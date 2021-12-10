import React, {ChangeEvent} from 'react';
import p from './MyPosts.module.css';
import {Posts} from "./Post/Posts";

type PostType = {
    id: number,
    message: string,
    likescounte: number,
}

type ProfilePropsType = {
    profilePage:{ post: PostType[], newPostText: string}
    addMyPost: ()=> void
    changePost: (Text: string)=> void
}

export const MyPosts = (props: ProfilePropsType) => {

    const postElement = props.profilePage.post.map(p => <Posts message={p.message} likescounte={p.likescounte}/>)
    let NewPost = React.createRef<HTMLTextAreaElement>()
    let addPost = () => {props.addMyPost()}
const changeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changePost(e.currentTarget.value)
}
    return (<div>
            <h3>My post</h3>
            <div className={p.addText}>
                <textarea
                    ref={NewPost}
                    value={props.profilePage.newPostText}
                    onChange={changeText}
                />
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={p.post}>
                {postElement}
            </div>
        </div>
    );
}