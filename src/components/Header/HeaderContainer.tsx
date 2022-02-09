import React from 'react';
import '../../App.css'
import {Header} from "./Header";
import {connect} from "react-redux";
import {checkAuth, InitialStateAuthType, logUot, setAuthHeader} from "../../Redux/auth-reducer";
import {AppStateType} from "../../Redux/rudux_Store";


class HeaderContainer extends React.Component<MapToProps> {
    componentDidMount() {
        this.props.checkAuth()
    }

    render() {
        return (
            <Header
                data={this.props.data}
                isAuth={this.props.isAuth}
                logUot={this.props.logUot}
            />)
    }
}

const MapStateToPropsHeader = (store: AppStateType): InitialStateAuthType => {
    return store.auth
}
export type MapDispatchToProps = {
    setAuthHeader: (state: InitialStateAuthType) => void
    checkAuth: () => void
    logUot: () => void
}
export type MapStateToProps = InitialStateAuthType
export type MapToProps = MapDispatchToProps & MapStateToProps

export default connect(MapStateToPropsHeader, {setAuthHeader, checkAuth, logUot})(HeaderContainer);


// export const HeaderContainer = connect (MapStateToPropsHeader, {setAuthHeader})(HeaderContainerC)
// export default HeaderContainer