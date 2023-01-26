import './App.css';
import Room from "./components/chat/room/room"
import socketIO from "socket.io-client"
import { useEffect } from 'react';
import  UserContext  from './components/chat/UserContext/usercontext';
const socket = socketIO.connect('http://localhost:4000', {

});

function App() {
 
    socket.emit('hi', {
     
      user: "Adil",
    
    });

  console.log(UserContext)
  return (
    <UserContext.Provider value="Adil">
      <div>
        <Room socket={socket}/>
      </div>
    </UserContext.Provider>
  )
}

export default App;
