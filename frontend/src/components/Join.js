// ---------------------------------------------------- Import Dependencies Here -->
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// ------------------------------------------------------- CSS Style Import Here -->
import '../styles/join.css';

// ------------------------------------------------------------------- Join Page -->
const Join = () => {
    /* Setup user-name and room states and create user function when user input is submitted. */
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')

    return (
        <>
            <div className="login-outer-container">
                <div className="login-inner-container">
                    <h1 className="login-heading">Join The Fleeting Meeting</h1>

                    <div>
                        <input 
                            type ="text" 
                            className="login-input" 
                            placeholder="User Name" 
                            onChange={(event) => setName(event.target.value)}
                        />
                    </div>

                    <div>
                        <input 
                            type ="text" 
                            className="login-input" 
                            placeholder="Room Name" 
                            onChange={(event) => setRoom(event.target.value)}
                        />
                    </div>

                    <Link 
                        onClick={event => (!name || !room ? event.preventDefault() : null)} 
                        to={`/meeting?name=${name}&room=${room}`}>
                        <button className="login-button" type="submit">Join Meeting</button>
                    </Link>
                    
                </div>
            </div>
        </>


    )
}

export default Join;

