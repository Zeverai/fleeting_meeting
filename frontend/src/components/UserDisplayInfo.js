// -------------------------------------------------------- Import Dependencies -->
import React from 'react';
import '../styles/userdisplayinfo.css'

const UserDisplayInfo = ({ name, room }) => (
    <div className="user-display-info-outer-container">
        <div className="left-user-display-info-container">
            <h3 className="user-info-bar">| {name} | {room} |</h3>
        </div>
        <div>
            <a className="leave-meeting-button"href="/">Leave Meeting</a>
        </div>
    </div>

)





export default UserDisplayInfo;