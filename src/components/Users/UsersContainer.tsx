import React from "react";
import {AppStateType} from "../../Redux/rudux_Store";
import {
    follow,
    unFollow,
    UseresType,
    changeFollowingInProgress, getUsers, changeFollowUser, changeUnFollowUser
} from "../../Redux/user_reducer";
import {connect} from "react-redux";
import {Users} from "./UsersP/Users";
import {Preloading} from "../PreLoading/Preloading";
import {Navigate} from "react-router-dom";
import {withRedirect} from "../hoc/withRedirect";


export type OwnProps = {}
export type UserPropsType = MapDispatchToPropsType & MapStateToPropsType
export type MapStateToPropsType = { users: UseresType, currentPage: number}
export type MapDispatchToPropsType = {
    getUsers: (currentPage: number, totalPageSize: number) => void
    changeFollowUser:(id: number) => void
    changeUnFollowUser:(id: number) => void
}
const mapStateToProps = (store: AppStateType): MapStateToPropsType => {

    return ({
        users: store.users,
        currentPage: store.users.currentPage,
    })
}

class UsersAPIContainer extends React.Component<UserPropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.users.totalPageSize)
        // this.props.changeFetching && this.props.changeFetching(false)
        // UserAPI.getUsers(this.props.currentPage, this.props.users.totalPageSize)
        //     .then(respons => {
        //         this.props.changeFetching && this.props.changeFetching(true)
        //         this.props.setUsers && this.props.setUsers(respons)
        //     })
    }

    upDateUsers = (page: number) => {
        this.props.getUsers(page, this.props.users.totalPageSize)
        // this.props.changeFetching && this.props.changeFetching(false)
        // UserAPI.upDateUser(page, this.props.users.totalPageSize)
        //     .then(respons => {
        //         this.props.changeFetching && this.props.changeFetching(true)
        //         this.props.setUsers && this.props.setUsers(respons)
        //         this.props.changePages(page)
        //     })
    }

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
let authRedirectComponent = withRedirect(UsersAPIContainer)
export const UsersContainer = connect<MapStateToPropsType, MapDispatchToPropsType, OwnProps, AppStateType>(mapStateToProps,
    {
        getUsers,
        changeFollowUser,
        changeUnFollowUser,
    })(authRedirectComponent)



