import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div className={s.wrapper}>
           <div className={s.ava}>
               <img className={s.img} src={'http://pngimg.com/uploads/eagle/eagle_PNG1212.png'}/>
           </div>
            <div className={s.description}>
                <h3>First Name</h3>
                <h3>Last Name</h3>
                <h3>Address</h3>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;