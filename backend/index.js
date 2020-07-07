// ---------------------------------------------------- Import Dependencies Here -->
const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const CORS = require('cors')
// ------------------------------------------------ PORT Listener Locations Here -->
const PORT = process.env.PORT || 8000

// ---------------------------------------------------------- Import Router Here -->
const router = require('./router')


// ------------------------------------------------------ Define MIDDLEWARE Here -->
const app = express();
const server = http.createServer(app);
const io = socketio(server);

/////////////////////======================================= ******* ===========
app.use(CORS())
/////////////////////======================================= ******* ===========
// --------------------------------------------------- User Array Functions Here -->
const { newUser, disconnectUser, findUser, usersInMeeting} = require('./manage_users.js')

// -------------------------------------------------------- Socket.io Setup Here -->
io.on('connection', (socket) => {
    console.log('Socket connection is...connected!')

        socket.on('join', ({ name, room }, cb) => {
            const { error, user } = newUser({id: socket.id, name, room});
            console.log(name, room)
            if(error) return cb(error);
    
        socket.emit('message', { user: 'admin', text: `${user.name} - joined ${user.room}. Be kind to other users and enjoy your stay!`});
        socket.broadcast.to(user.room).emit('message', {user: 'admin', text: `${user.name} has joined the meeting!`})
        socket.join(user.room);
        cb();
    }); 

    socket.on('sendMessage', (message, cb) => {
        const user = findUser(socket.id);
        io.to(user.room).emit('message', { user: user.name, text: message})
        cb();
    });

    // USER DISCONNECTED MESSAGE
        socket.on('disconnect', () => {
            const user = removeUser(socket.id)
            if(user){
                io.to(user.room).emit('message', {user: 'admin', text: `${user.name} has left the meeting room.`})
                console.log('User has left meeting room.')
            }
            
        });
});

// --------------------------------------------------------------------- APP.USE -->
app.use(router);



// ----------------------------------------------------------- PORT LISTNER Here -->
server.listen(PORT, () => {
    console.log(`🌐----- Server is running on port: ${PORT} -----🌐`)
})