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
    addMyPost: (Text: string)=> void
}

export const MyPosts = (props: ProfilePropsType) => {

    const postElement = props.profilePage.post.map(p => <Posts message={p.message} likescounte={p.likescounte}/>)
    let NewPost = React.createRef<HTMLTextAreaElement>()
    let addPost = () => {
        if (NewPost.current) {
            let Text = NewPost.current.value;
            if (Text.trim()){props.addMyPost(Text.trim())
                NewPost.current.value = ''
            }
            else return
        }
    }

    return (<div>
            <h3>My post</h3>
            <div className={p.addText}>
                <textarea
                    ref={NewPost}
                    value={props.profilePage.newPostText}
                    // onChange={addText}
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