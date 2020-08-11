import React from 'react';
import css from './MessageItem.module.css'

const MessageItem = (props) =>{
    if(props.sender === "myMessage"){
        return (
            <div className={css.messageItem + ' page-text ' + css.myMessage}>{props.message}</div>
        );
    }
    else{
        return (
            <div className={css.messageItem + ' page-text ' + css.foreignerMessage}>{props.message}</div>
        );
    }
}

export default MessageItem;