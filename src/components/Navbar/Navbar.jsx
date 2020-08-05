import React from 'react';
import css from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () =>{
    return (
        <nav className={css.nav}>
            <div className={'important-text ' + css.item}>
                Navigation
            </div>
            <br/>
            <div className={`${css.item} ${css.active}`}><NavLink to={'/profile'} activeClassName={css.active}>Profile</NavLink></div>
            <hr/>
            <div className={css.item}><NavLink to={'/dialogs'} activeClassName={css.active}>Dialogs</NavLink></div>
            <hr/>
            <div className={css.item}><NavLink to={'/news'} activeClassName={css.active}>News</NavLink></div>
            <hr/>
            <div className={css.item}><NavLink to={'/music'} activeClassName={css.active}>Music</NavLink></div>
            <hr/>
            <div className={css.item}><NavLink to={'/settings'} activeClassName={css.active}>Settings</NavLink></div>
        </nav>
    );
}

export default Navbar;