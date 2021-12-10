import React from "react";
import styles from '../users.module.css'
import USERS from "../../../img/USERS.svg";
import {UserPropsType} from "../UsersContainer";
import {NavLink} from "react-router-dom";


export const Users = (props: UserPropsType) => {

    let pageArr = []
    let totalPages = 10
    // Math.ceil(this.props.items.totalCount / this.props.items.totalPageSize)
    //нужно научится выдавать юзеров порционно
    for (let i = 1; i <= totalPages; i++) {
        pageArr.push(i)
    }
    const onClockHandler = (page: number) => {
        props.upDateUsers && props.upDateUsers(page)
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
            {/*<button onClick={this.showUsers}> Show users </button>*/}
            {
                props.users.items.map(us => <div key={us.id}>
                <span>
                    <div>
                        <NavLink to={"/profile/"}>
                        <img className={styles.usersPhoto}
                             src={us.photos.small != null ? us.photos.small : USERS} alt=""/>
                        </NavLink>
                    </div>
                    <div>
                        {us.followed ? <button onClick={() => props.changeUnFollow(us.id)}>Follow</button>
                            : <button onClick={() => props.changeFollow(us.id)}>Unfollow</button>}

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