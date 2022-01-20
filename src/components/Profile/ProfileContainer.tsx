import React from 'react';
import p from './Profile.module.css';
import '../../App.css'
import axios from 'axios';
import {Profile} from "./Profile";
import {AppStateType} from "../../Redux/rudux_Store";
import {
    addPostProfile,
    changePostProfile, ForProfileServetType,
    ProfileType, setProfile
} from "../../Redux/profile_reducer";
import {connect} from "react-redux";
import withRouter from "../../Redux/withRoute";




class ProfileContainer extends React.Component<MapPropsProfile> {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/2')
            .then(response => {
                this.props.setProfile(response.data)
            })
    }

    render() {
        return (
            <div className={p.content}>
                <Profile
                    profilePage={this.props.profilePage}
                    changePostProfile={this.props.changePostProfile}
                    addPostProfile={addPostProfile}
                    setProfile={setProfile}
                />
            </div>
        );
    }
}
export type MapStateProfileProps = {profilePage: ProfileType}
export type MapDispathToProps = {
    addPostProfile: () => void
    changePostProfile: (action: string) => void
    setProfile: (action: ForProfileServetType) => void
}
export type MapPropsProfile = MapStateProfileProps & MapDispathToProps

export const MapStateProfile = (store: AppStateType): MapStateProfileProps => {
    return ({
        profilePage: store.profilePage,
    })
}

let WithRouterProfile =  withRouter(ProfileContainer)
export default connect(MapStateProfile,{
    changePostProfile,
    addPostProfile,
    setProfile,
})(ProfileContainer)