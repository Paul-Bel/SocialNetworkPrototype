import React, {Dispatch} from "react";
import {Users} from "./Users";
import {AppStateType} from "../../Redux/Rudux_Store";
import {followAC, setUsersAC, StateType, unFollowAC, UserType} from "../../Redux/user_reducer";
import {connect} from "react-redux";


const mapStateToProps = (store: AppStateType) => {
    return ({
        users:  store.users.users
    })
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        changeFollow: (id: number) => {
            dispatch(followAC(id))
        },
        changeUnFollow: (id: number) => {
            dispatch(unFollowAC(id))
        },
        // setUsers: (state: StateType) => {
        //     dispath(setUsersAC(state))
        // }
    }
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)