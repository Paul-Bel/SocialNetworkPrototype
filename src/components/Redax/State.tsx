let rerenderEntreerTree = (data: DataType) => {
    console.log('fffffffff')
}

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

export const addMyPost = () => {

    let addNewPost = {
        id: 4,
        message: data.profilePage.newPostText.trim(),
        likescounte: 0
    }
    data.profilePage.post.push(addNewPost)
    data.profilePage.newPostText = ''
    rerenderEntreerTree(data);
}
export const changePost = (Text: string) => {
data.profilePage.newPostText = Text
    rerenderEntreerTree(data);
}

