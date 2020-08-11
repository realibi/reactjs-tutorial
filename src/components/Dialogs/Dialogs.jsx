import React from 'react';
import css from './Dialogs.module.css'
import DialogList from "./DialogList/DialogList";
import Messages from "./Messages/Messages";

const Dialogs = (props) =>{
    return (
        <div className={css.dialogs}>
            <DialogList/>
            <Messages/>
        </div>
    );
}

export default Dialogs;