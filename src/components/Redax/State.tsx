import {renderEnteerTree} from "../../index";

const addPost = 'addPost'
const changePost = 'changePost'
const changeDialogPost = 'changeDialogPost'
const addDialogPost = 'addDialogPost'

export type TYPE_DISPATCH_CREATOR = string
    // 'changePost' | 'addPost' | 'changeDialogPost' | 'addDialogPost'
type PostType = { id: number, message: string, likescounte: number, }
type DialogNickType = { id: number, name: string }
type MessageType = { id: number, message: string }
type DataType = {
    profilePage: { post: PostType[], newPostText: string }
    dialogNick: DialogNickType[],
    messages: MessageType[],
    messageBody: string
}
type ActionPropsType = {
    type: TYPE_DISPATCH_CREATOR,
    value?: string
}

export const addPostActionCreator = () => ({type: addPost})
export const changePostActionCreator = (value: string) =>{
   return ({type: changePost, value})}
export const addDialogCreator = () => ({type: addDialogPost})
export const changeDialogsPost = (value: string) => {
   return  ({type: changeDialogPost, value})
}


export let store = {
    _state: {
        profilePage: {
            post: [
                {id: 1, message: "It's me. What are you doing?", likescounte: 5},
                {id: 2, message: "I'am learn", likescounte: 13},
            ],
            newPostText: 'text',
        },
        dialogNick: [
            {id: 1, name: 'Anatoliy'},
            {id: 2, name: 'Sergey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Nikifor'},
            {id: 5, name: 'Arsrniy'},
        ],
        messages: [
            {id: 1, message: "Hello"},
            {id: 2, message: "How are you?"},
            {id: 3, message: "I`am learn to React"},
        ],
        messageBody: 'p',
    },
    _callSubscrible(state: DataType) {
        renderEnteerTree(this._state)
        console.log('State change')
    },
    dispatch(action: ActionPropsType) {
        if (action.type === addPost) {
            let addNewPost = {
                id: 4,
                message: this._state.profilePage.newPostText.trim(),
                likescounte: 0
            }
            this._state.profilePage.post.push(addNewPost)
            this._state.profilePage.newPostText = ''
            this._callSubscrible(this._state)
        } else if (action.type === changePost) {
            if (action.value)
                this._state.profilePage.newPostText = action.value
            this._callSubscrible(this._state)
        }else if (action.type === changeDialogPost){
            if(action.value)
            this._state.messageBody = action.value
            this._callSubscrible(this._state)
        }
        else if (action.type === addDialogPost){
            let newDialogPost = {id: 3, message: this._state.messageBody.trim()}
            this._state.messages.push(newDialogPost)
            this._callSubscrible(this._state)
            this._state.messageBody = ''
        }



    },
    getState() {
        return this._state
    },

    subscribe() {
        // this._renderEntireTree = observer
    },

}



export default store;

