import css from './Logo.module.css'
import React from "react";

const Logo = () => {
    return (
        <div className={css.logoBlock}>
            <img src='https://webstockreview.net/images/twitter-png-black-12.png'/>
        </div>
    );
}

export default Logo;