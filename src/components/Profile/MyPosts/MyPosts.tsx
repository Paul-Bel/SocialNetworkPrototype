import React from 'react';
import p from './MyPosts.module.css';
import {Posts} from "./Post/Posts";

// export const MyPosts = () => {
//     let messagePost = [
//         {id: 1, message: "It's me. What are you doing?", likescounte: 5},
//         {id: 2, message: "I'am learn", likescounte: 3},
//         {id: 3, message: "Good ivning!", likescounte: 15},
//     ]
    const postElement = messagePost.map (p => <Posts message={p.message} likescounte={p.likescounte} /> )

    return (<div>
            <h3>My post</h3>

            <div className={p.addText}>
                <textarea> </textarea>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={p.post}>
                {postElement}
                {/*<Posts message={'It is me'} likescounte={5}/>*/}
                {/*<Posts message={'How are you'} likescounte={17}/>*/}
            </div>
        </div>
    );
}