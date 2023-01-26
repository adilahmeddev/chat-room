import { useState, useEffect, useContext } from 'react';
import UserContext from "../UserContext/usercontext";

export default function Chatbox({socket}){
    let username = useContext(UserContext);

    const [currentMessage, setMessage] = useState('');

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (currentMessage.trim()) {
          socket.emit('message', {
            text: currentMessage,
            user: username,
            id: `${socket.id}${Math.random()}`,
            socketID: socket.id,
          });
        }
        setMessage('');
    };

    return <div className="chatbox">
            <form className="form" onSubmit={handleSendMessage}>
                <input
                    type="text"
                    placeholder="Write message"
                    className="message"
                    value={currentMessage}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button className="sendBtn">SEND</button>
            </form>
        </div>
}