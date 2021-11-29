import React       from "react";
import { useForm } from "react-hook-form";
import "./ReactForm.css"

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

export const ReactForm = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm<FormDataType>();
    const onSubmit = handleSubmit(data => console.log(data))

    return <div>
        <form onSubmit={ onSubmit }>
            <label>Login</label>
            <input { ...register("login", { required: true }) } />
            { errors.login?.type === "required" && "Login is required" }
            <label>Password</label>
            <input { ...register("password", { required: true }) } />
            { errors.password?.type === "required" && "Password is required" }
            <label>Remember Me</label>
            <input type={ "checkbox" } { ...register("rememberMe") }/>
            <button
                type="button"
                onClick={ onSubmit }>
                Login
            </button>
        </form>
    </div>
}