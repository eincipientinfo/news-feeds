import React from 'react';
import './InfoBar.css';
import closeIcon from '../../icons/closeIcon.png';
import onlineIcon from '../../icons/onlineIcon.png';

const InfoBar = ({ room }) => (
    <div className ="InfoBar">
        <div className="leftInnerContainer">
            <img className="onlineIcon" src={onlineIcon} alt="online"/>
            <h3 className="chatRoomName">{room}</h3>
        </div>
        {/* <div className="rightInnerContainer">
            <a href="/"><img src={closeIcon} alt="close"/></a>
        </div> */}
        <hr/>
    </div>
)

export default InfoBar;