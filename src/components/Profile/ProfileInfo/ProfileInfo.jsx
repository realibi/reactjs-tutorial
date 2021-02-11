import React from "react";
import Avatar from "./Avatar/Avatar";
import Description from "./Description/Description";
import css from './ProfileInfo.module.css'

const ProfileInfo = (props) =>{
    return (
        <div className={css.profileInfo}>
            <Avatar profile={props.profile}/>
            <Description profile={props.profile}/>
        </div>
    );
}

export default ProfileInfo;