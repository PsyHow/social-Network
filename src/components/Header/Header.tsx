import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './Header.module.css'

type PropsType = {
    isAuth: boolean
    login: string | null
}

const Header = (props: PropsType) => {
    return (
        <header className={style.header}>
            <img src='https://img.icons8.com/plasticine/2x/duolingo-logo.png'/>
            <div className={style.loginBlock}>
                {props.isAuth ? props.login
                    : <NavLink to={'/login'}>Login</NavLink>
                }

            </div>
        </header>
    )
}
export default Header;