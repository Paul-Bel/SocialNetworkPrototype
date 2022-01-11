import React from "react";
import {StateType, UserType} from "../../Redux/user_reducer";
import styles from './users.module.css'

type UserPropsType = {
    users: UserType[],
    changeFollow: (id: number) => void,
    changeUnFollow: (id: number) => void,
    setUsers: (users: UserType[]) => void,
}

const users = [
    {
        id: 1, followed: true, fullName: 'Ivan', status: 'I am happy',
        photo: 'data:image/jpeg;base64,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',
        location: {country: 'Russia', city: 'Moskov'}
    },
    {
        id: 2, followed: false, fullName: 'Bob', status: 'Hi every one',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPGFoDfKjBKavF5DJXYtxSEHhFzyS1ajx9fA&usqp=CAU',
        location: {country: 'USA', city: 'Washington'}
    },
    {
        id: 3, followed: true, fullName: 'Slava', status: 'I am happy',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcFzBL97N8FEjQCmiOEgvSJYjzNs6S1iEZlQ&usqp=CAU',
        location: {country: 'Ukraine', city: 'Kiev'}
    },
]

export const Users = (props: UserPropsType) => {
    const showUsers = () => {
            props.setUsers(users)
    }



    return (
        <div>
            <button onClick={showUsers}> Show users </button>
            {
            props.users.map( us => <div key={us.id}>
                <span>
                    <div>
                        <img className={styles.usersPhoto} src={us.photo} alt=""/>
                    </div>
                    <div>
                        {us.followed ? <button onClick={()=>props.changeUnFollow(us.id)}>Follow</button>
                            : <button onClick={()=>props.changeFollow(us.id)}>Unfollow</button>}

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