const users = [];

// Create new user by id, attach name and add to users array.
const newUser = ({id, name, room}) => {
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();

    const duplicateUserFilter = users.find((user) => user.room === room && user.name === name )

    if(duplicateUserFilter){
        return(
            { error: 'This username is taken! Please try another Username.'}
        )
    };

    const user = { id, name, room };
    users.push(user);

    return { user }
    
};

// Find and remove disconnected users from users array.
const disconnectUser = (id) => {
    const index = users.findIndex((user) => {user.id === id})

    if(index !== -1){
        return users.splice(index, 1)[0];
    }
}

// Find each user by id.
const findUser = (id) => users.find((user)=> user.id === id);


// Show all users in current meeting room.
const usersInMeeting = (room) => {
    users.filter((user) => {user.room === room}
    )};


module.exports = {newUser, disconnectUser, findUser, usersInMeeting};