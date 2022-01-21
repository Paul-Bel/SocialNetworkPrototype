import React from 'react';
import '../../App.css'
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AuthHeaderType, InitialStateAuthType, setAuthHeader} from "../../Redux/auth-reducer";
import {AppStateType} from "../../Redux/rudux_Store";






class HeaderContainer extends React.Component<MapToProps> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
            {withCredentials: true})
            .then(response => {
                this.props.setAuthHeader(response.data)
                console.log(response.data)
            })
    }

    render() {
        return <Header/>;
    }
}

const MapStateToPropsHeader = (store: AppStateType): InitialStateAuthType => {
    return store.auth
}
export type MapDispatchToProps = { setAuthHeader: (state: InitialStateAuthType) => void }
export type MapStateToProps = InitialStateAuthType
export type MapToProps = MapDispatchToProps & MapStateToProps

export default connect(MapStateToPropsHeader, {setAuthHeader})(HeaderContainer);
// export const HeaderContainer = connect (MapStateToPropsHeader, {setAuthHeader})(HeaderContainerC)
// export default HeaderContainer