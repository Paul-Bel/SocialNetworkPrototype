import React, {ComponentType} from "react";
import {AppStateType} from "../../Redux/rudux_Store";
import {UseresType, getUsersTC, changeFollowUser, changeUnFollowUser} from "../../Redux/user_reducer";
import {connect} from "react-redux";
import {Users} from "./UsersP/Users";
import {Preloading} from "../../common/PreLoading/Preloading";
import { compose } from "redux";
import {getCurrentPage, getUsers} from "../../Redux/user-selectors";

export type OwnProps = {}
export type UserPropsType = MapDispatchToPropsType & MapStateToPropsType
export type MapStateToPropsType = { users: UseresType, currentPage: number}
export type MapDispatchToPropsType = {
    getUsers: (currentPage: number, totalPageSize: number) => void
    changeFollowUser:(id: number) => void
    changeUnFollowUser:(id: number) => void
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return ({
        users: getUsers(state),
        currentPage: getCurrentPage(state),
    })
}

class UsersAPIContainer extends React.Component<UserPropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.users.totalPageSize)}
    upDateUsers = (page: number) => {
        this.props.getUsers(page, this.props.users.totalPageSize)}
    render() {
        return <>
            {!this.props.users.isFetching ? < Preloading/> :
                <Users
                    users={this.props.users}
                    currentPage={this.props.currentPage}
                    upDateUsers={this.upDateUsers}
                    changeFollowUser={this.props.changeFollowUser}
                    changeUnFollowUser={this.props.changeUnFollowUser}
                />
            }
        </>
    }
}
// let authRedirectComponent = withRedirect(UsersAPIContainer)
//
// export const UsersContainer = connect<MapStateToPropsType, MapDispatchToPropsType, OwnProps, AppStateType>(mapStateToProps,
//     {
//         getUsers,
//         changeFollowUser,
//         changeUnFollowUser,
//     })(authRedirectComponent)

export const UsersContainer = compose<ComponentType>(
    connect<MapStateToPropsType, MapDispatchToPropsType, OwnProps, AppStateType>(mapStateToProps,
        {
            getUsers: getUsersTC,
            changeFollowUser,
            changeUnFollowUser,
        }),)(UsersAPIContainer)