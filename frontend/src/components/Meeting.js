// ---------------------------------------------------- Import Dependencies Here -->
import React, { useState, useEffect} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import UserDisplayInfo from './UserDisplayInfo.js'
// frontend/src/UserDisplayInfo.js
// -------------------------------------------------- Initialize Web Socket Here -->
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
        <div className="outer-input-container">
            <h1>A Fleeting Meeting</h1>

            <UserDisplayInfo room={room} name={name}/>

            <div className="inner-input-container">
                <input 
                    value={message} 
                    onChange={(event) => setMessage(event.target.value)}
                    onKeyPress={(event) => event.key === 'Enter' ? sendMessage(event) : null}
                />
            </div>
        </div>
        
    )
}

export default Meeting;
