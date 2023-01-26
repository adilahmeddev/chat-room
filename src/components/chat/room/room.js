import Message from "../message/message"
import { useState, useEffect, useContext } from 'react';
import './room.css';
import UserContext from "../UserContext/usercontext";
function Room({ socket }) {

    let username = useContext(UserContext)
    const message = ({ name, value, key }) => (

       <Message user={value.user} message={value.message}  key={key}></Message>
    );
    const [messages, setMessages] = useState([]);
    const setMessState = function (messagesParam) {
        console.log(messagesParam)
        setMessages(messagesParam)
    }
    useEffect(() => {
        socket.on('messageResponse', (data) => setMessState(data));
    }, [socket, messages]);
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
    return <div>
        <div className="messageList">
            {messages.map(m => message(m))}
            <div className="chatbox">
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
        </div>
        
    </div>
}


export default Room