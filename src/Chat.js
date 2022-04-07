import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined } from '@mui/icons-material'
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import { Avatar, IconButton } from '@mui/material'
import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import './Chat.css'
import db from './firebaseSetup';



const Chat = () => {

    const [isSeed, setSeed] = useState('')
    const [userMessage, setUserMessage] = useState([])
    const {roomId} = useParams();
    const [roomName, setRoomName] = useState('');
   

    const sendMessage = (e) =>  {
    e.preventDefault();
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
         setUserMessage(snapshot.docs.map(doc => doc.data()) 
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
            <p> Last seen at ... </p>
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
            {userMessage?.map(message =>(
                <p className={`chat_message ${true && 'chat_reciever'}`} key={message.timestamp}>
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