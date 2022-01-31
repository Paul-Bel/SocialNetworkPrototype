import React from "react";
import {Field, reduxForm} from "redux-form";

const Loginform = (props: any) => {

    return (
        <div>
            <h1> Login </h1>
            <form onSubmit={props.handleSubmit}>
                <div><Field name={'Login'} placeholder={'Login'} component={"input"}/></div>
                <div><Field name={'Password'} placeholder={'Password'} component={"input"}/></div>
                <div><Field name={'remember'} type={"checkbox"} component={"input"}/>remember me</div>
                <div><button>Remember me</button></div>
            </form>
        </div>
    )
}
const LoginReduxForm = reduxForm ({form: 'Login'})(Loginform)
export const Login = () => {
    const onSubmit = (formData: any) => {
        console.log(formData)
    }
    return (
        <LoginReduxForm onSubmit={onSubmit}/>
    )
}
