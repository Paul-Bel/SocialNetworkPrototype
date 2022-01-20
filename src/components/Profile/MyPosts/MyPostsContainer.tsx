import {connect} from "react-redux";
import {MyPosts} from "./MyPosts";
import {AppStateType} from "../../../Redux/rudux_Store";
import {addPostProfile, changePostProfile} from "../../../Redux/profile_reducer";
import {Dispatch} from "react";


export const mapStateToProps = (store: AppStateType) => {
    return {profilePage: store.profilePage}
}

export const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        updateText: (value: string) => {
            dispatch(changePostProfile(value))
        },
        addNewText: () => {
            dispatch(addPostProfile())
        }
    }

}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)