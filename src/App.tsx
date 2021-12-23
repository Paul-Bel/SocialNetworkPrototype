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
import {TYPE_DISPATCH_CREATOR} from "./components/Redux/Store";

type PostType = { id: number, message: string, likescounte: number }
type profilePageType = { post: Array<PostType>, newPostText: string }
type dialogType = { id: number, name: string }
type dialogNickType = Array<dialogType>
type messageType = { id: number, message: string }
type messagesType = Array<messageType>
type dialogsPagesType = { dialogNick: dialogNickType, messages: messagesType, messageBody: string }
type siteBarType = { id: number }

export type stateType = {
    profilePage: profilePageType
    dialogsPages: dialogsPagesType
    siteBar: siteBarType
}
type ActionPropsType = {
    type: TYPE_DISPATCH_CREATOR,
    value?: string
}
type AppDataType = {
    data: stateType
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
                               element={<Dialogs dialogNick={props.data.dialogsPages.dialogNick}
                                                 messages={props.data.dialogsPages.messages}
                                                 messageBody={props.data.dialogsPages.messageBody}
                                                 dispatch={props.dispatch}

                               />}>
                            <Route path='/dialogs:id'
                                   element={<Dialogs dialogNick={props.data.dialogsPages.dialogNick}
                                                     messages={props.data.dialogsPages.messages}
                                                     messageBody={props.data.dialogsPages.messageBody}
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