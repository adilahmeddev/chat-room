import { useContext } from 'react';
import './message.css';
import  UserContext  from '../UserContext/usercontext';
function Message({user, message}){  
    const currentUser = useContext(UserContext);
    
    return <div className={(currentUser===user)?"currentUserMessage":"otherUserMesage"}>
        {user}: {message}
    </div>
}

export default Message