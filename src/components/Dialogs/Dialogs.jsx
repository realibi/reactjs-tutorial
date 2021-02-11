import React from 'react';
import css from './Dialogs.module.css'
import DialogList from "./DialogList/DialogList";
import Messages from "./Messages/Messages";

const Dialogs = (props) =>{
    return (
        <div className={css.dialogs}>
            <DialogList dialogElements={props.dialogElements}/>
            <Messages messageElements={props.messageElements}/>
        </div>
    );
}

export default Dialogs;