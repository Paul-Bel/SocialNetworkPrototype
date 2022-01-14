import React, {Dispatch} from "react";
import {AppStateType} from "../../Redux/Rudux_Store";
import {followAC, setUsersAC, unFollowAC, UseresType, ItemsType, changePagesAC} from "../../Redux/user_reducer";
import {connect} from "react-redux";
import UsersC from "./UsersС";

export type MapStateToPropsType = {
    items: UseresType
}

const mapStateToProps = (store: AppStateType):MapStateToPropsType => {
    return ({
        items: store.users
    })
}


export type MapDispatchToPropsType = {
    changeFollow: (id: number) => void
    changeUnFollow: (id: number) => void
    setUsers: (items: UseresType) => void
    changePages: (page: number) => void
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
        changePages: (page: number)=> {
            dispatch(changePagesAC(page))
        },
    }
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC)