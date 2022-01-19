export type TYPE_DISPATCH_CREATOR = string
type ActionPropsType = {
    type: TYPE_DISPATCH_CREATOR,
    value: string
}
export type PostType = { id: number, message: string, likescounte: number, }
export type DataType = { post: PostType[], newPostText: string }
let initialState: DataType = {
    post: [
        {id: 1, message: "It's me. What are you doing?", likescounte: 5},
        {id: 2, message: "I'am learn", likescounte: 13},
    ],
    newPostText: '',
}

const addPost = 'addPost'
const changePost = 'changePost'
export const addPostActionCreator = () => ({type: addPost})
export const changePostActionCreator = (value: string) => {
    return ({type: changePost, value})
}

const profileReducer = (state: DataType = initialState, action: ActionPropsType): DataType => {
    switch (action.type) {
        case changePost:
            return {...state, newPostText: action.value};
        case addPost: {
            let addNewPost = {id: 6, message: state.newPostText.trim(), likescounte: 0}
            let addPost = {...state, post: [...state.post, addNewPost], newPostText: ''}
            return addPost;
        }
        default:
            return state
    }
}

export default profileReducer