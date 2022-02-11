import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Music} from "./components/Music/Music";
import {AppStateType} from "./Redux/rudux_Store";
import DialogsItemContainer from "./components/Dialogs/DialogsItemContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import { UsersContainer } from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from "./components/Header/Login";
import {loginUser} from "./Redux/auth-reducer";
import {useSelector} from "react-redux";



export type TYPE_DISPATCH_CREATOR = string

type ActionPropsType = {
    type: TYPE_DISPATCH_CREATOR,
    value?: string
}
type AppDataType = {
    state: AppStateType
    dispatch: (action: ActionPropsType) => void
}
// (props: AppDataType)
const App = () => {


    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route path='/login' element={<Login />}/>
                        <Route path='/'
                               element={<ProfileContainer/>}/>
                        <Route path={'/profile'} element={<ProfileContainer/>}>
                            <Route path='/profile:userId'
                                   element={<ProfileContainer/>}/>
                        </Route>
                        <Route path='/dialogs'
                               element={<DialogsItemContainer/>}>
                            <Route path='/dialogs:id'
                                   element={<DialogsItemContainer/>}/>
                        </Route>
                        <Route path='/users' element={<UsersContainer/>}/>
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