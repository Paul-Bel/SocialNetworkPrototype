import React from "react";
import {StateType, UserType} from "../../Redux/user_reducer";
import styles from './users.module.css'

type UserPropsType = {
    users: UserType[],
    changeFollow: (id: number) => void,
    changeUnFollow: (id: number) => void,
    // setUsers: (state: StateType) => void,
}

export const Users = (props: UserPropsType) => {
debugger

    return (
        <div>{
            props.users.map( us => <div key={us.id}>
                <span>
                    <div>
                        <img className={styles.usersPhoto} src={us.photo} alt=""/>
                    </div>
                    <div>
                        <button>Follow</button>
                    </div>
                </span>
                <span>
                    <div>{us.fullName}</div>
                    <div>{us.status}</div>
                </span>
                <span>
                    <div>{us.location.city}</div>
                    <div>{us.location.country}</div>
                </span>
            </div>)
        }</div>
    )
}