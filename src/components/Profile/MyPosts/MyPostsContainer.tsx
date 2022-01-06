import {connect} from "react-redux";
import {MyPosts} from "./MyPosts";
import {AppStateType} from "../../Redux/Rudux_Store";
import {addPostActionCreator, changePostActionCreator} from "../../Redux/profile_reducer";
import {Dispatch} from "react";

// <MyPosts profilePage={} dispatch={}

export const mapStateToProps = (store: AppStateType) => {
    return {profilePage: store.profilePage}
}

export const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        updateText: (value: string) => {
            dispatch(changePostActionCreator(value))
        },
        addNewText: () => {
            dispatch(addPostActionCreator())
        }
    }

}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)