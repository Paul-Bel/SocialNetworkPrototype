import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type LoginType = {
    Login: string
    Password: string
    remember: boolean
}

const Loginform: React.FC<InjectedFormProps<LoginType>> = (props) => {

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
const LoginReduxForm = reduxForm<LoginType> ({form: 'Login'})(Loginform)
export const Login = () => {
    const onSubmit = (formData: LoginType) => {
    }
    return (
        <LoginReduxForm onSubmit={onSubmit}/>
    )
}
