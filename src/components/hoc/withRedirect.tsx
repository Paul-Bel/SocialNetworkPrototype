import React from "react";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/rudux_Store";

let MapStToProps = (state: AppStateType) =>({
    isAuth: state.auth.isAuth
})

export const withRedirect = (Component: React.JSXElementConstructor<any>) => {
    class RenderComponent extends React.Component<any> {
        render() {
            if (!this.props.isAuth) {
                return <Navigate to='/login'/>
            }
            return <Component {...this.props}/>
        }
    }
    let ConnectedRdComponent = connect(MapStToProps)(RenderComponent)
    return ConnectedRdComponent
}

