import React from 'react';
import css from './Description.module.css'

const Description = () =>{
    return (
        <div className={css.description}>

            <div className={css.name}>
                Kendall Jenner
            </div>
            <div className={css.description_text}>
                Welcome to my page and have a good day!
            </div>
        </div>
    );
}

export default Description;