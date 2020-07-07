// -------------------------------------------------------- Import Dependencies -->
import React from 'react';
import '../styles/userdisplayinfo.css'

const UserDisplayInfo = ({ name, room }) => (
    <div className="user-display-info-outer-container">


        

        <div className="user-display-info-container">
            <h3 className="user-info-bar">| {name} | {room} |</h3>
        </div>
        
        <div className="leave-meeting-button-container">
            <a className="leave-meeting-button"href="/">Disconnect</a>
        </div>
        
    </div>

)





export default UserDisplayInfo;