import React from 'react';
import p from './MyPosts.module.css';
import {Posts} from "./Post/Posts";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLength} from "../../../common/validation/validators";
import {TextArea} from "../../../common/form/FormControl";

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
    let srcPage = ''
    // const inputTest = (e: ChangeEvent<HTMLInputElement>) => {
    //     // e.target.files[0]
    //     //@ts-ignore
    //     srcPage = e.target.files[0].name
    //     //@ts-ignore
    //     console.log(e.target.files[0].name)
    //     // console.log(e.target.files[0])
    //
    //     // console.log(typeof e.target.files)
    // }
    return (<div>
            <h3>My post</h3>
            <div className={p.addText}>
             <PostReduxForm onSubmit={addMyPost}/>
                {/*<div>ku-ku</div>*/}
                {/*<input type={"file"} onChange={inputTest}/>*/}
                {/*<div>{srcPage}<img src={srcPage} alt=""/></div>*/}
            </div>
            <div className={p.post}>
                {postElement}
            </div>
        </div>
    );
}

const MyPostInputForm: React.FC<InjectedFormProps<FormInputType, {}> & {}> = (props) => {
    return <form onSubmit={props.handleSubmit}>
       <Field name={'addMyPost'} component={TextArea}
              // validate={[required, validateLength10]}
       />
        <div>
            <button>Add post</button>
        </div>
    </form>
}
const PostReduxForm = reduxForm<FormInputType> ({form: 'MyPost'})(MyPostInputForm)