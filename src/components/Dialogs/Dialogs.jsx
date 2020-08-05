import React from 'react';
import css from './Dialogs.module.css'

const Dialogs = (props) =>{
    return (
        <div className={css.dialogs}>
            <div className={css.dialogsList}>
                <div className={css.dialogItem + ' page-text'}>Ulykbek</div>
                <div className={css.dialogItem + ' page-text'}>Bekzhan</div>
                <div className={css.dialogItem + ' page-text'}>Maksat</div>
                <div className={css.dialogItem + ' page-text'}>Aiten</div>
            </div>
            <div className={css.messages}>
                <div className={css.messageItem + ' page-text'}>Salam</div>
                <div className={css.messageItem + ' page-text'}>Salam, kak ty?</div>
                <div className={css.messageItem + ' page-text'}>Norm, ty kak?</div>
                <div className={css.messageItem + ' page-text'}>Poidet</div>
            </div>
        </div>
    );
}

export default Dialogs;