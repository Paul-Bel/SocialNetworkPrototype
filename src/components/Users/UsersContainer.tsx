import React from "react";
import {AppStateType} from "../../Redux/rudux_Store";
import {follow, setUsers, unFollow, UseresType, changePages, changeFetching} from "../../Redux/user_reducer";
import {connect} from "react-redux";
import axios from "axios";
import {Users} from "./UsersP/Users";
import {Preloading} from "../PreLoading/Preloading";
export type OwnProps = {}
export type UserPropsType = MapDispatchToPropsType & MapStateToPropsType
export type MapStateToPropsType = {users: UseresType, currentPage: number}
export type MapDispatchToPropsType = {
    follow: (id: number) => void
    unFollow: (id: number) => void
    setUsers: (items: UseresType) => void
    changePages: (page: number) => void
    changeFetching?: (fetching: boolean) => void
}
const mapStateToProps = (store: AppStateType): MapStateToPropsType => {
    // console.log(store.auth)
    return ({
        users: store.users,
        currentPage: store.users.currentPage,
    })
}
class UsersAPIContainer extends React.Component<UserPropsType> {

    componentDidMount() {
        axios.get<UseresType>
        (`https://social-network.samuraijs.com/api/1.0/users?page=
        ${this.props.currentPage+100}
        &count=${this.props.users.totalPageSize}`)
            .then(respons => {
                this.props.setUsers && this.props.setUsers(respons.data)
            })
    }

    upDateUsers = (page: number) => {
        this.props.changeFetching&&this.props.changeFetching(true)
        axios.get<UseresType>
        (`https://social-network.samuraijs.com/api/1.0/users?page=
        ${page}
        &count=${this.props.users.totalPageSize}`)
            .then(respons => {
                this.props.changeFetching&&this.props.changeFetching(false)
                this.props.setUsers && this.props.setUsers(respons.data)
                this.props.changePages(page)
            })

    }

    render() {
        return <>
            {this.props.users.isFetching ? < Preloading/> :
                <Users
                    users={this.props.users}
                    currentPage={this.props.currentPage}
                    changeFollow={this.props.follow}
                    changePages={this.props.changePages}
                    changeUnFollow={this.props.unFollow}
                    upDateUsers={this.upDateUsers}
                />
                }
        </>
    }
}

export const UsersContainer = connect<MapStateToPropsType,MapDispatchToPropsType, OwnProps, AppStateType >(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    changePages,
    changeFetching,
})(UsersAPIContainer)