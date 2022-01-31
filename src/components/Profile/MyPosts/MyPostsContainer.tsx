import {connect} from "react-redux";
import {MyPosts} from "./MyPosts";
import {AppStateType} from "../../../Redux/rudux_Store";
import {addPostProfile} from "../../../Redux/profile_reducer";



export const mapStateToProps = (store: AppStateType) => {

    return {profilePage: store.profilePage}
}


export const MyPostsContainer = connect(mapStateToProps, {addPostProfile})(MyPosts)