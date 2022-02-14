import React, {ComponentType} from 'react';
import p from './Profile.module.css';
import '../../App.css'
import {Profile} from "./Profile";
import {AppStateType} from "../../Redux/rudux_Store";
import {
    addPostProfile,
    changePostProfile, getUserStatusAPI,
    ProfileType, setProfileAPI, UpDateStatusAPI
} from "../../Redux/profile_reducer";
import {connect} from "react-redux";
import withRouter from "../../Redux/withRoute";
import {withRedirect} from "../../common/hoc/withRedirect";
import { compose } from 'redux';




class ProfileContainer extends React.Component<MapPropsProfile
    & { router: { params: { userId: number } } }> {

    componentDidMount() {
        // debugger
        let id = this.props.router.params.userId
        this.props.setProfileAPI(id)
        if (!this.props.router.params.userId) {
            this.props.auth && this.props.profilePage.userId && (id = this.props.profilePage.userId)
        }
        //@ts-ignore
        // if(!this.props.authID){ this.props.history.push('/login')        }

        if(this.props.profilePage.userId)
        this.props.setProfileAPI(id)
        this.props.getUserStatusAPI(id)
    }
    componentDidUpdate(prevProps: MapStateProfileProps ) {
        // debugger
        if(this.props.status != prevProps.status){
            // this.setState(this.props.status)
        }
    }

    render() {
        return (
            <div className={p.content}>
                <Profile
                    profilePage={this.props.profilePage}
                    changePostProfile={this.props.changePostProfile}
                    addPostProfile={this.props.addPostProfile}
                    status={this.props.status}
                    UpDateStatusAPI={this.props.UpDateStatusAPI}
                />
            </div>
        );
    }
}

export type MapStateProfileProps = { profilePage: ProfileType, status: string, auth: boolean, authID: number|null}
export type MapDispathToProps = {
    addPostProfile: () => void
    changePostProfile: (action: string) => void
    setProfileAPI: (id: number) => void
    getUserStatusAPI: (id: number) => void
    UpDateStatusAPI: (id: string) => void
}
export type MapPropsProfile = MapStateProfileProps & MapDispathToProps


export const MapStateProfile = (store: AppStateType): MapStateProfileProps => {
    return ({
        profilePage: store.profilePage,
        status: store.profilePage.status,
        auth: store.auth.isAuth,
        authID: store.auth.data.id,
    })
}
// let authRedirectComponent = withRedirect(ProfileContainer)
// let WithRouterProfile = withRouter(authRedirectComponent)
//
// connect(MapStateProfile, {
//     changePostProfile,
//     addPostProfile,
//     setProfileAPI,
// })(WithRouterProfile)

export default compose<ComponentType>(
    connect(MapStateProfile, {
        changePostProfile,
        addPostProfile,
        setProfileAPI,
        UpDateStatusAPI,
        getUserStatusAPI,
    }),
    withRouter,
    withRedirect,
)(ProfileContainer)