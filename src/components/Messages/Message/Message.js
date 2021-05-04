import React from 'react';
import './Message.css';

const Message = ({ message: { user, text }, name }) => {
  let isSentByCurrentUser = false;

  if(user === name) {
    isSentByCurrentUser = true;
  }

  return (
    isSentByCurrentUser
      ? (
        <div className="bubbleWrapper">
          <div className="inlineContainer">
          <p class="user inlineIcon">{user}</p>
            <div className="otherBubble other">
              {text}
            </div>
          </div>
        </div>
        )
        : (
          <div className="bubbleWrapper">
            <div className="inlineContainer own">
              <p className="user">{user}</p>
              <div className="ownBubble own floating-left">
              {text}
              </div>
            </div>
	        </div>
        )
  );
}

export default Message;