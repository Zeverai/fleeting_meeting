// ---------------------------------------------------- Import Dependencies Here -->
const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

// ------------------------------------------------ PORT Listener Locations Here -->
const PORT = process.env.PORT || 8000


// ---------------------------------------------------------- Import Router Here -->
const router = require('./router')


// ------------------------------------------------------ Define MIDDLEWARE Here -->
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// -------------------------------------------------------- Socket.io Setup Here -->

io.on('connection', (socket) => {
    console.log('Socket connection is...connected!')
        // User disconnected from socket message here.
        socket.on('disconnect', () => {
            console.log('User has left meeting room.')
        });
});

// --------------------------------------------------------------------- APP.USE -->
app.use(router);



// ----------------------------------------------------------- PORT LISTNER Here -->
server.listen(PORT, () => {
    console.log(`🌐----- Server is running on port: ${PORT} -----🌐`)
})