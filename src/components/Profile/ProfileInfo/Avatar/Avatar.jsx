import React from 'react';
import css from './Avatar.module.css'

const Avatar = (props) =>{
    return (
        <div className={css.avatar}>
            <img src={props.profile.avatarImgSrc}/>
        </div>
    );
}

export default Avatar;