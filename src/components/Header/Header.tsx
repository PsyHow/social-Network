import React       from "react";
import { NavLink } from "react-router-dom";
import style       from "./Header.module.css"


export const Header = (props: PropsType) => {
    return (
        <header className={ style.header }>
            <img src="https://img.icons8.com/plasticine/2x/duolingo-logo.png"/>
            <div className={ style.loginBlock }>
                { props.isAuth
                    ? <div>{ props.login } - <button onClick={ props.logout }>Log out</button></div>
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