import React, {ChangeEvent} from 'react';
import p from './MyPosts.module.css';
import {Posts} from "./Post/Posts";

type PostType = {id: number, message: string, likescounte: number,}

type ProfilePropsType = {
    profilePage: { post: PostType[], newPostText: string }
    updateText: (value: string) => void
    addNewText: () => void
    // dispatch: (action: ActionPropsType) => void
}

export const MyPosts = (props: ProfilePropsType) => {
    const postElement = props.profilePage.post.map(p => <Posts key={p.id} message={p.message} likescounte={p.likescounte}/>)
    // let NewPost = React.createRef<HTMLTextAreaElement>()
    let addPost = () => {
        props.addNewText()
    }
    const changeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateText(e.currentTarget.value)
    }
    return (<div>
            <h3>My post</h3>
            <div className={p.addText}>
                <textarea
                    // ref={NewPost}
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