import React                     from "react";
import styles                    from "./FormsControl.module.css"
import { WrappedFieldProps }     from "redux-form";
import { WrappedFieldMetaProps } from "redux-form/lib/Field"

type FormControlPropsType = {
    meta: WrappedFieldMetaProps
}
const FormControl: React.FC<FormControlPropsType> = (props) => {
    const { meta } = props
    const hasError = meta.touched && meta.error
    return (
        <div className={ styles.formControl + ' ' + ( hasError ? styles.error : '' ) }>
            <div>
                { props.children }
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


