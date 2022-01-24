import React from "react";
import {AppStateType} from "../../Redux/rudux_Store";
import {
    follow,
    setUsers,
    unFollow,
    UseresType,
    changePages,
    changeFetching,
    changeFollowingInProgress, getUsers
} from "../../Redux/user_reducer";
import {connect} from "react-redux";
import {Users} from "./UsersP/Users";
import {Preloading} from "../PreLoading/Preloading";
import {UserAPI} from "../../api/api";

export type OwnProps = {}
export type UserPropsType = MapDispatchToPropsType & MapStateToPropsType
export type MapStateToPropsType = { users: UseresType, currentPage: number }
export type MapDispatchToPropsType = {
    follow: (id: number) => void
    unFollow: (id: number) => void
    setUsers: (items: UseresType) => void
    changePages: (page: number) => void
    changeFetching: (fetching: boolean) => void
    changeFollowingInProgress: (followingInProgress: number, isFetchingD: boolean) => void
    getUsers: (currentPage: number, totalPageSize: number) => void
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
                    changeFollow={this.props.follow}
                    changePages={this.props.changePages}
                    changeUnFollow={this.props.unFollow}
                    upDateUsers={this.upDateUsers}
                    changeFetching={this.props.changeFetching}
                    changeFollowingInProgress={this.props.changeFollowingInProgress}
                />
            }
        </>
    }
}

export const UsersContainer = connect<MapStateToPropsType, MapDispatchToPropsType, OwnProps, AppStateType>(mapStateToProps,
    {
        follow,
        unFollow,
        setUsers,
        changePages,
        changeFetching,
        changeFollowingInProgress,
        getUsers,
    })(UsersAPIContainer)

