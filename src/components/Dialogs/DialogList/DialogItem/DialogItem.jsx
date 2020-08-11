import React from 'react';
import css from './DialogItem.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) =>{
    let path = '/dialogs/' + props.id;

    return (
        <NavLink to={path}>
            <div className={css.dialogItem + ' page-text'}>
                {props.name}
            </div>
        </NavLink>
    );
}

export default DialogItem;