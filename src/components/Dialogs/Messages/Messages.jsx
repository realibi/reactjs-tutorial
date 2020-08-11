import React from 'react';
import css from './Messages.module.css'
import MessageItem from "./MessageItem/MessageItem";

const Messages = (props) =>{
    return (
        <div className={css.messages}>
            <div className={'page-text center'}> Alibi Duysenaliev </div><br/>
            <MessageItem message={"salam"} sender={"myMessage"} />
            <MessageItem message={"salam, kak ty?"} sender={"foreignerMessage"} />
        </div>
    );
}

export default Messages;