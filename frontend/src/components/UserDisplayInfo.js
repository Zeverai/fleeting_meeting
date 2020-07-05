// -------------------------------------------------------- Import Dependencies -->
import React from 'react';
import '../styles/userdisplayinfo.css'

const UserDisplayInfo = ({ name, room }) => (
    <div className="user-display-info-outer-container">
        <div className="left-user-display-info-container">

        </div>
        <h3 className="user-info-bar">| {name} | {room} | <a href="/">Leave Meeting</a> |</h3>
        
        {/* <div className="right-user-display-info-container">
            <a href="/">✖️</a>
        </div> */}
    </div>

)





export default UserDisplayInfo;