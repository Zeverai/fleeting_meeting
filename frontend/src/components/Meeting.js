// -------------------------------------------------------- Import Dependencies -->
import React, { useState, useEffect} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import UserDisplayInfo from './UserDisplayInfo.js'
import UserInputArea from './UserInputArea.js'
import Messages from './Messages.js'

// ---------------------------------------------- Import Default Style Component -->
import '../styles/meeting.css'

// ------------------------------------------------------ Initialize Web Socket  -->
let socket;

// ---------------------------------------------------------------- Meeting Page -->
const Meeting = ({ location }) => {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([])
    const SOCKET_END_POINT = 'localhost:8000'

    useEffect(() => {
        const {name, room} = queryString.parse(location.search);

        setName(name);
        setRoom(room);
            // console.log(name, room);
            // console.log(location.search);
        socket = io(SOCKET_END_POINT);
            // console.log(socket)

        socket.emit('join', {name, room}, () => {
            
        });

        return () => {
            socket.emit('disconnect')
            socket.off();
        }
    }, [SOCKET_END_POINT, location.search])


    // Add all messages sent in meeting to messages array.
    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message])
        })
    }, [messages]);


    
// -------------------------------------------------- Send Message Event Handler -->
const sendMessage = (event) => {
    event.preventDefault();

    if(message){
        socket.emit('sendMessage', message, () => setMessage(''));
    }
}

console.log(message, messages);

    return (
        <div className="whole-app-container">
            <div className="header-container">
                <h1 className="header">A FLEETING MEETING</h1>
            </div>
            <UserDisplayInfo name={name} room={room}/>
            {/* <Message></Message> */}
            <div className="message-box-background">
                <Messages messages={messages} name={name}/>
            </div>
            <UserInputArea message={message} setMessage={setMessage} sendMessage={sendMessage}/>

            
        </div>
        
    )
}

export default Meeting;
