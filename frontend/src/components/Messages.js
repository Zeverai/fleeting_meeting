// -------------------------------------------------------- Import Dependencies -->
import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom'
import '../styles/meeting_area.css'
import Message from './Message.js'


const Messages = ({messages, name}) => (
    <div className="static-message-menu"> 
        <ScrollToBottom className="scrolling-message-menu">
            {messages.map((message, index) => <div className="scrolling-message-menu" key={index}><Message name={name} message={message}/></div>)}
        </ScrollToBottom>
    </div>
)

export default Messages;