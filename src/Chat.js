import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined } from '@mui/icons-material'
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import { Avatar, IconButton } from '@mui/material'
import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import './Chat.css'
import db from './firebaseSetup';
import firebase from 'firebase';
import { useStateValue } from './StateProvider';



const Chat = () => {

    const [isSeed, setSeed] = useState('')
    const [userMessage, setUserMessage] = useState('')
    const [messages, setMessages] = useState([])
    const {roomId} = useParams();
    const [roomName, setRoomName] = useState('');
    const [{user},dispatch] = useStateValue();
   

    const sendMessage = (e) =>  {
    e.preventDefault();

    db.collection('rooms').doc(roomId).collection('messages')
        .add({
            message: userMessage,
            name: user.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });

    setUserMessage('')
    
    }

    

    useEffect(()=>{   
    if(roomId){
        db.collection('rooms').doc(roomId).onSnapshot(snapshot =>(
            setRoomName(snapshot.data().name)
        ))

        db.collection('rooms').doc(roomId)
        .collection('messages').orderBy('timestamp','asc')
        .onSnapshot((snapshot) =>(
         setMessages(snapshot.docs.map(doc => doc.data()) 
        )))

        setSeed(Math.floor(Math.random() * 5000))
        }
    }, [roomId])


  return (
    <div className='chat'>
        <div className='chat_header'>
        <Avatar src={`https://avatars.dicebear.com/api/micah/${isSeed}.svg`}/>
        <div className='chat_headerInfo'>
            <h3>{roomName}</h3>
            <p> {new Date(messages[messages.length - 1]?.timestamp?.toDate()).toUTCString()} </p>
        </div>
            <div className='chat_headerRight'>
                <IconButton>
                    <SearchOutlined/>
                </IconButton>
                <IconButton>
                    <AttachFile/>
                </IconButton>
                <IconButton>
                    <MoreVert/>
                </IconButton>
            </div>
        </div>

        <div className='chat_body'>
            {messages.map(message =>(
                <p className={`chat_message ${message.name === user.displayName 
                && 'chat_reciever'}`} key={message.timestamp}>
                    <span className='chat_name'>
                     {message.name}</span>{message.message}
                    <span className='chat_timestamp'>
                        {`${new Date(message.timestamp?.toDate()).toUTCString()}`}</span>
                </p>
            ))}


        </div>

        <div className='chat_footer'>
                <InsertEmoticon />
                <form >
                    <input 
                    name='userMessage'
                    value={userMessage}
                    onChange={(e) =>setUserMessage(e.target.value)}
                    type='text' 
                    placeholder='Type a message'/>
                    <button 
                    type='submit'
                    onClick={(e) => sendMessage(e)}>Send</button>
                </form>
                <KeyboardVoiceIcon />
        </div>

    </div>
  )
}

export default Chat