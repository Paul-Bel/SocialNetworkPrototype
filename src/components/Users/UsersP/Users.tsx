import React from "react";
import styles from '../users.module.css'
import USERS from "../../../img/USERS.svg";
import {changeFollowUser, changeUnFollowUser, UseresType} from "../../../Redux/user_reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";

export type UserPropsType = MapDispatchToPropsType & MapStateToPropsType
export type MapStateToPropsType = { users: UseresType, currentPage: number }
export type MapDispatchToPropsType = {
    upDateUsers: (page: number) => void
    changeFollowUser: (id: number) => void
    changeUnFollowUser: (id: number) => void
}

export const Users = (props: UserPropsType) => {
    let pageArr = []
    let totalPages = 10
    // Math.ceil(this.props.items.totalCount / this.props.items.totalPageSize)
    //нужно научится выдавать юзеров порционно
    for (let i = 1; i <= totalPages; i++) {
        pageArr.push(i)
    }

    const onClockHandler = (page: number) => {
        props.upDateUsers(page)
    }
    return (
        <div>
            {pageArr.map(p => {
                return (<span
                    className={props.currentPage === p ?
                        styles.activePages : styles.notActivePage}
                    key={p}
                    onClick={() => onClockHandler(p)}>{p + ' '}</span>)
            })}
            {
                props.users.items.map(us => <div key={us.id}>
                <span>
                    <div>
                        <NavLink to={`/profile/${us.id}`}>
                        <img className={styles.usersPhoto}
                             src={us.photos.small != null ? us.photos.small : USERS} alt=""/>
                        </NavLink>
                        </div>
                    <div>
                        {!us.followed ?
                            <button
                                disabled={props.users.followingInProgress.some(s => s == us.id)}
                                onClick={() => {
                                    props.changeFollowUser(us.id)
                                }
                                }>Follow</button> :
                            <button
                                disabled={props.users.followingInProgress.some(s => s == us.id)}
                                onClick={() => {
                                    props.changeUnFollowUser(us.id)
                                }}>Unfollow</button>}

                    </div>
                </span>
                    <span>
                    <div>{us.name}</div>
                    <div>{us.status}</div>
                </span>
                    <span>
                    <div>{'us.location.city'}</div>
                    <div>{'us.location.country'}</div>
                </span>
                </div>)
            }</div>
    )
}