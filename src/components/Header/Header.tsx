import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Header.module.css"


export const Header = (props: PropsType) => {

    const { isAuth, login, logout } = props;

    return (
        <header className={ style.header }>
            <img alt={ 'logo' } src="https://img.icons8.com/plasticine/2x/duolingo-logo.png"/>
            <div className={ style.loginBlock }>
                { isAuth
                    ? <div>{ login } - <button onClick={ logout }>Log out</button></div>
                    : <NavLink to={ "/login" }>Login</NavLink>
                }

            </div>
        </header>
    )
}

//types
type PropsType = {
    isAuth: boolean
    login: string | null
    logout: () => void
}