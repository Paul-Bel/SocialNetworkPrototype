import {renderEnteerTree} from "../index";
// import profileReducer from "./profile_reducer";
// import dialogsReducer from "./dialog_reducer";
//
// export type TYPE_DISPATCH_CREATOR = string
// type ActionPropsType = {
//     type: TYPE_DISPATCH_CREATOR,
//     value?: string
// }
// type RenderEnteerTreeType = (state: stateType) => void
// type PostType = { id: number, message: string, likescounte: number }
// type profilePageType = { post: Array<PostType>, newPostText: string }
// type dialogType = { id: number, name: string }
// type dialogNickType = Array<dialogType>
// type messageType = { id: number, message: string }
// type messagesType = Array<messageType>
// type dialogsPagesType = { dialogNick: dialogNickType, messages: messagesType, messageBody: string }
// type siteBarType = { id: number }
//
// export type stateType = {
//     profilePage: profilePageType
//     dialogsPages: dialogsPagesType
//     siteBar: siteBarType
// }
//
// // type StoreType = typeof store
// type StoreType = {
//     _state: stateType
//     _callSubscriber: (state: stateType) => void
//     getState: () => stateType
//     subscribe: (f: RenderEnteerTreeType) => void
//     dispatch: (action: ActionPropsType) => void
// }
//
// export let store: StoreType = {
//     _state: {
//         profilePage: {
//             post: [
//                 {id: 1, message: "It's me. What are you doing?", likescounte: 5},
//                 {id: 2, message: "I'am learn", likescounte: 13},
//             ],
//             newPostText: 'text',
//         },
//         dialogsPages: {
//             dialogNick: [
//                 {id: 1, name: 'Anatoliy'},
//                 {id: 2, name: 'Sergey'},
//                 {id: 3, name: 'Sveta'},
//                 {id: 4, name: 'Nikifor'},
//                 {id: 5, name: 'Arsrniy'},
//             ],
//             messages: [
//                 {id: 1, message: "Hello"},
//                 {id: 2, message: "How are you?"},
//                 {id: 3, message: "I`am learn to React"},
//             ],
//             messageBody: '',
//         },
//         siteBar: {id: 1}
//     },
//     _callSubscriber(state: stateType) {
//      },
//
//     getState() {
//         return this._state
//     },
//     subscribe(observer: RenderEnteerTreeType) {
//         this._callSubscriber = observer
//     },
//     dispatch(action: ActionPropsType) {
//         // profileReducer( this.getState(), action)
//         // dialogsReducer(this.getState(), action)
//         this._callSubscriber(this._state)
//     },
// }
//
//
// export default store;
//
