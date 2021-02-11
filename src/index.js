import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import DialogItem from "./components/Dialogs/DialogList/DialogItem/DialogItem";
import MessageItem from "./components/Dialogs/Messages/MessageItem/MessageItem";

let dialogData = [
    {id: 1, name: 'Ulykbek'},
    {id: 2, name: 'Bekzhan'},
    {id: 3, name: 'Maksat'},
    {id: 4, name: 'Aiten'},
];
let dialogElements = dialogData.map(dialog => <DialogItem id={dialog.id} name={dialog.name} />);

let messagesData = [
    {id: 1, text: 'salam', sender: 'myMessage'},
    {id: 2, text: 'salam, kak ty?', sender: 'foreignerMessage'},
    {id: 3, text: 'poidet, ty?', sender: 'myMessage'},
    {id: 4, text: 'norm', sender: 'foreignerMessage'},
];
let messageElements = messagesData.map(message => <MessageItem id={message.id} message={message.text} sender={message.sender} />);

let profile = {
    avatarImgSrc: 'https://sun9-16.userapi.com/c852132/v852132935/aec67/hCPc3gwKWbk.jpg',
    fullName: 'Kendall Jenner',
    descriptionText: 'Welcome to my page and have a good day!'
}

ReactDOM.render(<App dialogElements={dialogElements} messageElements={messageElements} profile={profile}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
