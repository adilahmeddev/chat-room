import Message from "../message/message"
import { useState, useEffect, useContext } from 'react';
import './room.css';

import Chatbox from "../chatbox/chatbox";
function Room({ socket }) { 
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        socket.on('messageResponse', (data) => setMessages(data));
    }, []);
   
    return <div>
        <div className="messageList">
            {messages.map(m =><Message  key={m.key} user={m.value.user} message={m.value.message} ></Message>)}
            <Chatbox socket={socket}></Chatbox>
        </div>
        
    </div>
}


export default Room