import React from "react";
import s from './FormControl.module.css'

export const FormControl = ({input, ...props}: any) => {

    return <>
    <textarea className={s.inputControl+''+s.error} {...input}{...props}/>
    </>
}