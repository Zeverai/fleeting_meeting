// -------------------------------------------------------- Import Dependencies -->
import React from 'react';

import '../styles/user_input_area.css'

const UserInputArea = ({ message, setMessage, sendMessage }) => (
    <form className="input-form">
       <input 
            className="user-input-area"
            type="text"
            placeholder="Type your message here..."
            value={message} 
            onChange={(event) => setMessage(event.target.value)}
            onKeyPress={(event) => event.key === 'Enter' ? sendMessage(event) : null}
        /> 
        <button className="send-message-button" onClick={(event) => sendMessage(event)}>Send</button>
    </form>
)

export default UserInputArea;