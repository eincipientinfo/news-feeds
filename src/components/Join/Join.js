import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Join.css';

const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <div className="main_content">
            <div className="main_content_inner">
                <div className="joinInnerContainer">
                    <div id="login">
                        <h1>Chat With The Community</h1>
                        <form>
                            <input placeholder="Nickname" type="name" 
                                onChange={(event) => {
                                    setName(event.target.value)
                                }}
                                />
                                <input placeholder="Room" className="joinInput mt-20" type="room" 
                                onChange={(event) => {
                                    setRoom(event.target.value)
                                }}
                                required/>
                            <Link onClick=
                            {event => (!name || !room ? event.preventDefault() : null)} 
                                to={`/chat?name=${name}&room=${room}`}>
                                <button className="button primary circle mt-20 joinBtn" type="submit">Join</button>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Join;
