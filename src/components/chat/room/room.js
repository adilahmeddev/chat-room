import Message from "../message/message"
import { useState, useEffect, useContext } from 'react';
import './room.css';

import Chatbox from "../chatbox/chatbox";
function Room({ socket }) {
    const message = ({ name, value, key }) => (
       <Message user={value.user} message={value.message}  key={key}></Message>
    );
    const [messages, setMessages] = useState([]);
    const setMessState = function (messagesParam) {
      
        setMessages(messagesParam)
    }
    useEffect(() => {
        socket.on('messageResponse', (data) => setMessState(data));
    }, []);
   
    return <div>
        <div className="messageList">
            {messages.map(m => message(m))}
            <Chatbox socket={socket}></Chatbox>
        </div>
        
    </div>
}


export default Room