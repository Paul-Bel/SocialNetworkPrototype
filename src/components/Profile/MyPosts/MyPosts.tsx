import React from 'react';
import p from './MyPosts.module.css';
import {Posts} from "./Post/Posts";
import {Field, reduxForm} from "redux-form";

type PostType = {id: number, message: string, likescounte: number,}

type ProfilePropsType = {
    profilePage: { post: PostType[], newPostText: string }
    addPostProfile: (value: string) => void
}

export const MyPosts = (props: ProfilePropsType) => {
    const postElement = props.profilePage.post.map(p => <Posts key={p.id} message={p.message} likescounte={p.likescounte}/>)
    // let NewPost = React.createRef<HTMLTextAreaElement>()

    const addMyPost = (value:any) => {
        console.log(value.addMyPost)
    props.addPostProfile(value.addMyPost)
    }
    return (<div>
            <h3>My post</h3>
            <div className={p.addText}>
             <PostReduxForm onSubmit={addMyPost}/>
            </div>
            <div className={p.post}>
                {postElement}
            </div>
        </div>
    );
}

const MyPostInputForm = (props: any) => {
    return <form onSubmit={props.handleSubmit}>
       <Field name={'addMyPost'} component={'textarea'}/>
        <div>
            <button>Add post</button>
        </div>
    </form>
}
const PostReduxForm = reduxForm ({form: 'MyPost'})(MyPostInputForm)