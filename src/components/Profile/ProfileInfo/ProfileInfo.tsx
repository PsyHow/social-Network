import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src='https://cdn.pocket-lint.com/r/s/1200x/assets/images/142413-apps-feature-art-and-science-collide-the-best-in-modern-space-art-image1-iha6vzu3wk.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;