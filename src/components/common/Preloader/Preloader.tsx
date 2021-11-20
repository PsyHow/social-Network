import preloader from "../../../assets/images/Rocket.gif";
import React from "react";
import styles from './Preloader.module.css'

export const Preloader = () => {
    return (
        <div>
            <img src={preloader} className={styles.img}/>
        </div>
    )
}