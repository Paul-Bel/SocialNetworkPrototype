import React from "react";
import s from './FormControl.module.css'

// type MetaType = {
//     active: boolean
//     asyncValidating: false
//     autofilled: false
//     dirty: true
//     error: undefined
//     form: "MyPost"
//     initial: undefined
//     invalid: false
//     pristine: false
//     submitFailed: false
//     submitting: false
//     touched: false
//     valid: true
//     visited: true
//     warning: undefined
// }
const FormControl = ({input, meta, ...props}: any) => {
    const metaError = meta.touched && meta.error
    // console.log('',metaError)
    // console.log('meta.touched ',meta.touched)
    return <div className={s.formControl + " " + (metaError ? s.error :'')}>
        {/*<textarea {...input}{...props}/>*/}
        {props.children}
        {metaError && <span>{metaError}</span>}
    </div>
}
export const TextArea = (props: any) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea {...input}{...restProps}/></FormControl>
}
export const InputForm = (props: any) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...input}{...restProps}/></FormControl>
}
