import React, {ChangeEvent} from 'react';
import {addPostActionCreator, changePostActionCreator, TYPE_DISPATCH_CREATOR} from '../../Redux/profile_reducer';
import p from './MyPosts.module.css';
import {Posts} from "./Post/Posts";

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
    profilePage: { post: PostType[], newPostText: string }
    dispatch: (action: ActionPropsType) => void
}

export const MyPosts = (props: ProfilePropsType) => {

    const postElement = props.profilePage.post.map(p => <Posts message={p.message} likescounte={p.likescounte}/>)
    let NewPost = React.createRef<HTMLTextAreaElement>()
    let addPost = () => {
        props.dispatch(addPostActionCreator())

    }
    const changeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(changePostActionCreator(e.currentTarget.value))

    }


    return (<div>
            <h3>My post</h3>
            <div className={p.addText}>
                <textarea
                    ref={NewPost}
                    value={props.profilePage.newPostText}
                    onChange={changeText}
                > </textarea>
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