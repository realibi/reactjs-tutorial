import React from 'react';
import css from './DialogList.module.css'
import DialogItem from "./DialogItem/DialogItem";

const DialogList = (props) =>{
    return (
        <div className={css.dialogs}>
            <div className={'page-text center'}> Dialogs </div><br/>
            <div className={css.dialogsList}>
                <DialogItem name={"Ulykbek"} id={"1"}/>
                <DialogItem name={"Bekzhan"} id={"2"} />
                <DialogItem name={"Maksat"} id={"3"} />
                <DialogItem name={"Aiten"} id={"4"} />
            </div>
        </div>
    );
}

export default DialogList;