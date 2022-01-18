import React from "react";
import styles from './users.module.css'
import {MapDispatchToPropsType, MapStateToPropsType} from "./UsersContainer";
import axios from "axios";
import USERS from '../IMG/USERS.png'
import {UseresType} from "../../Redux/user_reducer";

type UserPropsType = MapDispatchToPropsType & MapStateToPropsType

class UsersC extends React.Component<UserPropsType> {

    componentDidMount() {
        axios.get<UseresType>
        (`https://social-network.samuraijs.com/api/1.0/users?page=
        ${this.props.users.currentPage}
        &count=${this.props.users.totalPageSize}`)
            .then(respons => {
                this.props.setUsers(respons.data)})
    }

    onPageChanged = (pageNumber: number) => {
        axios.get<UseresType>
        (`https://social-network.samuraijs.com/api/1.0/users?page=
        ${pageNumber}
        &count=${this.props.users.totalPageSize}`)
            .then(respons => {
                this.props.setUsers(respons.data)
            })
        this.props.changePages(pageNumber)
    }


    render() {
        let pageArr = []
        let totalPages = 10
        // Math.ceil(this.props.items.totalCount / this.props.items.totalPageSize)
        //нужно научится выдавать юзеров порционно
        for (let i = 1; i <= totalPages; i++) {
            pageArr.push(i)
        }

        return (
            <div>
                {pageArr.map(p => {
                    return (<span
                        className={this.props.users.currentPage === p ?
                            styles.activePages : styles.notActivePage}
                        key={p}
                        onClick={() => this.onPageChanged(p)}>{p + ' '}</span>)
                })}
                {/*<button onClick={this.showUsers}> Show users </button>*/}
                {
                    this.props.users.items.map(us => <div key={us.id}>
                <span>
                    <div>
                        <img className={styles.usersPhoto}
                             src={us.photos.small != null ? us.photos.small : USERS} alt=""/>
                    </div>
                    <div>
                        {us.followed ? <button onClick={() => this.props.changeUnFollow(us.id)}>Follow</button>
                            : <button onClick={() => this.props.changeFollow(us.id)}>Unfollow</button>}

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
}

export default UsersC