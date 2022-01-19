import React, {Dispatch} from "react";
import {AppStateType} from "../../Redux/Rudux_Store";
import {followAC, setUsersAC, unFollowAC, UseresType, changePagesAC, changeFetching} from "../../Redux/user_reducer";
import {connect} from "react-redux";

import axios from "axios";
import {Users} from "./UsersP/Users";
import {Preloading} from "../PreLoading/Preloading";

export type MapStateToPropsType = {
    users: UseresType
    currentPage: number
}
export type UserPropsType = MapDispatchToPropsType & MapStateToPropsType

const mapStateToProps = (store: AppStateType): MapStateToPropsType => {
    return ({
        users: store.users,
        currentPage: store.users.currentPage,
    })
}
export type MapDispatchToPropsType = {
    changeFollow: (id: number) => void
    changeUnFollow: (id: number) => void
    setUsers?: (items: UseresType) => void
    changePages: (page: number) => void
    upDateUsers?: (page: number) => void
    changeFetching?: (fetching: boolean) => void
}

const mapDispatchToProps = (dispatch: Dispatch<any>): MapDispatchToPropsType => {
    return {
        changeFollow: (id: number) => {
            dispatch(followAC(id))
        },
        changeUnFollow: (id: number) => {
            dispatch(unFollowAC(id))
        },
        setUsers: (items: UseresType) => {
            dispatch(setUsersAC(items))
        },
        changePages: (page: number) => {
            dispatch(changePagesAC(page))
        },
        changeFetching: (fitching: boolean) => {
            dispatch(changeFetching(fitching))
        }
    }
}

class UsersAPIContainer extends React.Component<UserPropsType> {

    componentDidMount() {
        axios.get<UseresType>
        (`https://social-network.samuraijs.com/api/1.0/users?page=
        ${this.props.currentPage}
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
            })
    }

    // componentDidUpdate() {
    //     debugger
    //     axios.get<UseresType>
    //     (`https://social-network.samuraijs.com/api/1.0/users?page=
    //     ${this.props.currentPage}
    //     &count=${this.props.users.totalPageSize}`)
    //         .then(respons => {
    //             this.props.setUsers(respons.data)
    //         })
    // }

    render() {
        return <>
            {this.props.users.isFetching ? < Preloading/> :
                <Users
                    users={this.props.users}
                    currentPage={this.props.currentPage}
                    changeFollow={this.props.changeFollow}
                    changePages={this.props.changePages}
                    changeUnFollow={this.props.changeFollow}
                    upDateUsers={this.upDateUsers}
                />
                }
        </>


    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer)