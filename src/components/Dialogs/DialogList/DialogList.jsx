import React from 'react';
import css from './DialogList.module.css'
import DialogItem from "./DialogItem/DialogItem";

const DialogList = (props) =>{
    return (
        <div className={css.dialogs}>
            <div className={'page-text center'}> Dialogs </div><br/>
            <div className={css.dialogsList}>
                {props.dialogElements}
            </div>
        </div>
    );
}

export default DialogList;