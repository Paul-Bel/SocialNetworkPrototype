import React from "react";
// import styles from './users.module.css'
// import {MapDispatchToPropsType, MapStateToPropsType} from "./UsersContainer";
// import axios from "axios";
// import USERS from '../IMG/USERS.png'
// import {ItemsType, UseresType} from "../../Redux/user_reducer";
//
// type UserPropsType = MapDispatchToPropsType & MapStateToPropsType
//
// // export
// const Users = (props: UserPropsType) => {
//     const showUsers = () => {
//             axios.get<UseresType>('https://social-network.samuraijs.com/api/1.0/users').then(respons =>{
//                 props.setUsers(respons.data)
//             })
//     }
//
//
//     return (
//         <div>
//             <button onClick={showUsers}> Show users </button>
//             {
//             props.items.items.map( us => <div key={us.id}>
//                 <span>
//                     <div>
//                         <img className={styles.usersPhoto}
//                              src={us.photos.small != null ? us.photos.small : USERS} alt=""/>
//                     </div>
//                     <div>
//                         {us.followed ? <button onClick={()=>props.changeUnFollow(us.id)}>Follow</button>
//                             : <button onClick={()=>props.changeFollow(us.id)}>Unfollow</button>}
//
//                     </div>
//                 </span>
//                 <span>
//                     <div>{us.name}</div>
//                     <div>{us.status}</div>
//                 </span>
//                 <span>
//                     <div>{'us.location.city'}</div>
//                     <div>{'us.location.country'}</div>
//                 </span>
//             </div>)
//         }</div>
//     )
// }
//
