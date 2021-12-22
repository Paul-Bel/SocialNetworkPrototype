import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Music} from "./components/Music/Music";
import {TYPE_DISPATCH_CREATOR} from "./components/Redax/State";

type PostType = {
    id: number,
    message: string,
    likescounte: number,
}
type DialogNickType = {id: number, name: string}
type MessageType = {id: number, message: string}

type DataType = {
    profilePage:{ post: PostType[], newPostText: string} ,
    dialogNick: DialogNickType[],
    messages: MessageType[],
    messageBody: string
}

type ActionPropsType = {
    type: TYPE_DISPATCH_CREATOR,
    value?: string
}
type AppDataType = {
    data: DataType
    dispatch: (action: ActionPropsType) => void
}



const App = (props: AppDataType) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>

                    <Routes>
                        <Route path='/profile'
                               element={<Profile
                                   profilePage={props.data.profilePage}
                                   dispatch={props.dispatch}
                               />}/>

                        <Route path='/dialogs'
                               element={<Dialogs dialogNick={props.data.dialogNick}
                                                 messages={props.data.messages}
                                                 messageBody={props.data.messageBody}
                                                 dispatch={props.dispatch}

                               />}>
                            <Route path='/dialogs:id'
                                   element={<Dialogs dialogNick={props.data.dialogNick}
                                                     messages={props.data.messages}
                                                     messageBody={props.data.messageBody}
                                                     dispatch={props.dispatch}
                                   />}/>
                        </Route>

                        <Route path='/news' element={<News/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                        <Route path='/music' element={<Music/>}/>
                    </Routes>

                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;


// <Route path="profile" element={<Profile/>}/>