export type TYPE_DISPATCH_CREATOR = string
type ActionPropsType = { type: TYPE_DISPATCH_CREATOR, payload: { value: string }}

const addDialogPost = 'addDialogPost'
export const addDialogCreator = (value: string) => ({type: addDialogPost, payload:{value}})


type InitialStateType = {
    dialogNick: { id: number, name: string }[],
    messages: { id: number, message: string }[]
}

let initialState: InitialStateType = {
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
}

const dialogsReducer = (state = initialState, action: ActionPropsType): InitialStateType => {

    switch (action.type) {

        case addDialogPost: {
            let newDialogPost = {id: 3, message: action.payload.value.trim()}
            return {
                ...state,
                messages: state.messages.concat(newDialogPost),
            }
        }
        default:
            return state;
    }
}
export default dialogsReducer