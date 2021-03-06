// --------------------------------------- Import Dependencies -->
import React from 'react';
import '../styles/message_display.css'
// import Messages from './Messages.js'

const Message = ({message: { user, text }, name}) => {
    let isSentByCurrentUser = false;
    const trimmedName = name.trim().toLowerCase();

    if(user === trimmedName){
        isSentByCurrentUser = true;
    }

    return (
        isSentByCurrentUser
        
        ? (
            <div className="message-container">
                <p className="user-sent-text-name">{trimmedName}</p>
                <div className="user-message-box">
                    <p className="user-message-text">{text}</p>
                </div>
            </div>
        )
        : (
            <div className="message-container">
                <p className="other-sent-text-name">{user}</p>
                <div className="other-message-box">
                    <p className="other-message-text">{text}</p>
                </div>
            </div>
        )
        
    )
}

export default Message;