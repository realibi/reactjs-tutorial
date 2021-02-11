import React from 'react';
import css from './Description.module.css'

const Description = (props) =>{
    return (
        <div className={css.description}>
            <div className={css.name}>
                {props.profile.fullName}
            </div>
            <div className={css.description_text}>
                {props.profile.descriptionText}
            </div>
        </div>
    );
}

export default Description;