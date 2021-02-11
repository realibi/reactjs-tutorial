import React from 'react';
import css from './Messages.module.css'

const Messages = (props) =>{
    return (
        <div className={css.messages}>
            <div className={'page-text center'}> Alibi Duysenaliev </div><br/>
            {props.messageElements}
        </div>
    );
}

export default Messages;