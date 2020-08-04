import React from 'react';
import css from './Header.module.css'
import Logo from "./Logo/Logo";

const Header = () =>{
    return (
        <header className={css.header}>
            <Logo/>
        </header>
    );
}

export default Header;