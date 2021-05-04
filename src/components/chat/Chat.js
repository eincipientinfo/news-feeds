import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import './Chat.css';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';
// import OnlineChatUsers from '../OnlineChatUsers/OnlineChatUsers'

let socket;

const Chat = ({location}) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([])

    const ENDPOINT = 'https://sharpinion.herokuapp.com/';

    useEffect(() => {
        const {name, room} = queryString.parse(location.search)

        socket = io(ENDPOINT);
        setRoom(room);
        setName(name);

        socket.emit('join', { name, room }, (error) => {
            if(error){
                alert(error)
            }
        });
        
        return () => {
            socket.emit('disconnect');
            
            socket.off();
        }
    }, [ENDPOINT, location.search]);

    useEffect(() => {
        socket.on('message', message => {
          setMessages(messages => [ ...messages, message ]);
        });
        
        socket.on("roomData", ({ users }) => {
          setUsers(users);
        });
    }, []);
    
    const sendMessage = (event) => {
      event.preventDefault();
  
      if(message) {
        socket.emit('sendMessage', message, () => setMessage(''));
      }
    }
    return (
        <div className="main_content">
            <div className="main_content_inner">
                     <div className="outerContainer">
                         <div className="container">
                            <InfoBar room={room}/>
                            <Messages messages={messages}/>
                            <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
                         </div>
                     </div>
                     {/* <OnlineChatUsers users={users}/> */}
            </div>
        </div>
    )
}

export default Chat;
