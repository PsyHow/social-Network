import React                     from "react";
import style                     from "./FormsControl.module.css"
import { WrappedFieldProps }     from "redux-form";
import { WrappedFieldMetaProps } from "redux-form/lib/Field"


const FormControl: React.FC<FormControlPropsType> = (props) => {
    const { meta, children } = props
    const hasError = meta.touched && meta.error
    return (
        <div className={ style.formControl + ' ' + ( hasError ? style.error : '' ) }>
            <div>
                { children }
            </div>
            { hasError && <span>{ meta.error }</span> }
        </div>
    )
}

export const TextArea: React.FC<WrappedFieldProps> = (props) => {
    const { input, meta, ...restProps } = props
    return <FormControl { ...props }><textarea { ...input } { ...restProps }/></FormControl>
}

export const Input: React.FC<WrappedFieldProps> = (props) => {
    const { input, meta, ...restProps } = props
    return <FormControl { ...props }><input { ...input } { ...restProps }/></FormControl>
}

//types
type FormControlPropsType = {
    meta: WrappedFieldMetaProps
}

