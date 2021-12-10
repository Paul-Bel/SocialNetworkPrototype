import {renderEnteerTree} from "../../render";

type PostType = {id: number, message: string, likescounte: number,}
type DialogNickType = {id: number, name: string}
type MessageType = {id: number, message: string}
type DataType = {
    profilePage: { post: PostType[], newPostText: string}
    dialogNick: DialogNickType[],
    messages: MessageType[],
}

export let data:DataType = {
    profilePage: {
        post: [
            {id: 1, message: "It's me. What are you doing?", likescounte: 5},
            {id: 2, message: "I'am learn", likescounte: 3},
            {id: 3, message: "Good ivning!", likescounte: 15},],
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
    ]
}

export const addMyPost = (Text: string) => {
    let addNewPost = {id: 4, message: Text, likescounte: 0}
    data.profilePage.post.push(addNewPost)
    renderEnteerTree(data);
}
