import React from 'react';
import p from './Profile.module.css';
import '../../App.css'
import {Profile} from "./Profile";
import {AppStateType} from "../../Redux/rudux_Store";
import {
    addPostProfile,
    changePostProfile,
    ProfileType, setProfileAPI
} from "../../Redux/profile_reducer";
import {connect} from "react-redux";
import withRouter from "../../Redux/withRoute";



class ProfileContainer extends React.Component<MapPropsProfile
    & { router: { params: { userId: number } } } & { setProfileAPI: (id: number) => void }> {

    componentDidMount() {
        let id = this.props.router.params.userId
        if (!this.props.router.params.userId) {
            id = 2
        }
        this.props.setProfileAPI(id)
        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
        // UserAPI.getProfile(id).then(response => {
        //         this.props.setProfile(response.data)
        //     })
    }

    render() {
        return (
            <div className={p.content}>
                <Profile
                    profilePage={this.props.profilePage}
                    changePostProfile={this.props.changePostProfile}
                    addPostProfile={addPostProfile}
                />
            </div>
        );
    }
}

export type MapStateProfileProps = { profilePage: ProfileType }
export type MapDispathToProps = {
    addPostProfile: () => void
    changePostProfile: (action: string) => void
}
export type MapPropsProfile = MapStateProfileProps & MapDispathToProps

export const MapStateProfile = (store: AppStateType): MapStateProfileProps => {
    return ({
        profilePage: store.profilePage,
    })
}

let WithRouterProfile = withRouter(ProfileContainer)
export default connect(MapStateProfile, {
    changePostProfile,
    addPostProfile,
    setProfileAPI,
})(WithRouterProfile)