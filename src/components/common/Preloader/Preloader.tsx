import preloader from "../../../assets/images/Rocket.gif";
import React from "react";
import styles from './Preloader.module.css'

export const Preloader = () => {
    return (
        <div>
            <img alt={ 'preloader' } src={ preloader } className={ styles.img }/>
        </div>
    )
}