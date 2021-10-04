import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.description}>
                <div className={s.info}>
                    <h3>FirstName : <span>Viktor</span></h3>
                    <h3>LastName : <span>Burnyshev</span></h3>
                    <h3>Gender : <span>Male</span></h3>
                    <h3>Email Address : <a href={"merzkiy.com"}>merzkiy.com</a></h3>
                </div>
            </div>
            <div className={s.ava}>
                <div className={s.img}>
                    <img  src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpQppfBCwxxoQg3WctXTif09_hUrdIItPqnA&usqp=CAU'}/>
                </div>

            </div>
        </div>
    )
}

export default ProfileInfo;

/*
<div className={s.ava}>
    <img className={s.img} src={'http://pngimg.com/uploads/eagle/eagle_PNG1212.png'}/>
</div>
<div className={s.description}>
    <h3>First Name</h3>
    <h3>Last Name</h3>
    <h3>Address</h3>
</div>*/
