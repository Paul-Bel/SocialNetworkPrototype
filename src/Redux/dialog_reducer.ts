export type TYPE_DISPATCH_CREATOR = string
type ActionPropsType = { type: TYPE_DISPATCH_CREATOR, value?: string }



const changeDialogPost = 'changeDialogPost'
const addDialogPost = 'addDialogPost'
export const addDialogCreatorAC = () => ({type: addDialogPost})
export const changeDialogsPostAC = (value: string) => {
    return ({type: changeDialogPost, value} as const )
}

type InitialStateType = {
    dialogNick: { id: number, name: string }[],
    messages: { id: number, message: string }[]
    messageBody: string
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
    messageBody: ""
}

const dialogsReducer = (state = initialState, action: ActionPropsType): InitialStateType => {

    switch (action.type) {
        case  changeDialogPost: {
            return {
                ...state,
                messageBody: action.value ? action.value : ''
            }
        }

        case addDialogPost: {
            let newDialogPost = {id: 3, message: state.messageBody.trim()}
            return {
                ...state,
                messages: state.messages.concat(newDialogPost),
                messageBody: ''
            }
        }
        default:
            return state;
    }
}
export default dialogsReducer