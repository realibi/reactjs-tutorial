import React from "react";
import Avatar from "./Avatar/Avatar";
import Description from "./Description/Description";
import css from './ProfileInfo.module.css'

const ProfileInfo = () =>{
    return (
        <div className={css.profileInfo}>
            <Avatar />
            <Description />
        </div>
    );
}

export default ProfileInfo;