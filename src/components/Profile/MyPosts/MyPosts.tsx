import React from 'react';
import p from './MyPosts.module.css';
import {Posts} from "./Post/Posts";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLength, required} from "../../../utils/validation/validators";
import {FormControl} from "../../../utils/form/FormControl";

type PostType = {id: number, message: string, likescounte: number,}

type ProfilePropsType = {
    profilePage: { post: PostType[], newPostText: string }
    addPostProfile: (value: string) => void
}
type FormInputType = {addMyPost: string}

const validateLength10 = maxLength(10)


export const MyPosts = (props: ProfilePropsType) => {
    const postElement = props.profilePage.post.map(p => <Posts key={p.id} message={p.message} likescounte={p.likescounte}/>)
    // let NewPost = React.createRef<HTMLTextAreaElement>()

    const addMyPost = (value: FormInputType) => {
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

const MyPostInputForm: React.FC<InjectedFormProps<FormInputType, {}> & {}> = (props) => {
    return <form onSubmit={props.handleSubmit}>
       <Field name={'addMyPost'} component={FormControl}
              validate={[required, validateLength10]}
       />
        <div>
            <button>Add post</button>
        </div>
    </form>
}
const PostReduxForm = reduxForm<FormInputType> ({form: 'MyPost'})(MyPostInputForm)