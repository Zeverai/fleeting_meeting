// -------------------------------------------------------- Import Dependencies -->
import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom'
import '../styles/meeting_area.css'
import Message from './Message.js'


const Messages = ({messages, name}) => (
    <ScrollToBottom>
        {messages.map((message, index) => <div key={index}><Message name={name} message={message}/></div>)}
    </ScrollToBottom>
)

export default Messages;