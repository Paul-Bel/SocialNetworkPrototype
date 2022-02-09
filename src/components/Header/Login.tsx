import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {InputForm} from "../../utils/form/FormControl";
import {maxLength, required} from "../../utils/validation/validators";
import {AnyAction, Dispatch} from "redux";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/rudux_Store";
import {InitialStateAuthType, loginUser} from "../../Redux/auth-reducer";

type loginUserType = { loginUser: (email: string, password: string, rememberMe: boolean, captcha: boolean) => void }
type LoginType = {
    email: string
    password: string
    rememberMe: boolean
}
let validateLengt30 = maxLength(30)
const Loginform: React.FC<InjectedFormProps<LoginType>> = (props) => {

    return (
        <div>
            <h1> Login </h1>
            <form onSubmit={props.handleSubmit}>
                <div><Field validate={[required, validateLengt30]} name={'email'} placeholder={'Login'}
                            component={InputForm}/></div>
                <div><Field name={'password'} placeholder={'Password'} type={'password'} component={InputForm}
                            validate={[required, validateLengt30]}/></div>
                <div><Field name={'rememberMe'} type={"checkbox"} component={InputForm}/>remember me</div>
                <div>
                    <button>Remember me</button>
                </div>
            </form>
        </div>
    )
}
const LoginReduxForm = reduxForm<LoginType>({form: 'Login'})(Loginform)

export const Login = (props: any) => {
    const onSubmit = (formData: LoginType) => {
        let {email, rememberMe, password} = formData
        props.loginUser(email, password, rememberMe, true)
        //@ts-ignore
    }
    return (
        <LoginReduxForm onSubmit={onSubmit}/>
    )
}
type MapStateType = {}
const MapStatToAuthProps = (store: AppStateType):InitialStateAuthType => {
    return store.auth

}
export default connect(MapStatToAuthProps,{loginUser})(Login)