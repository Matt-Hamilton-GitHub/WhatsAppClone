import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined } from '@mui/icons-material'
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import { Avatar, IconButton } from '@mui/material'
import React, { useState, useEffect} from 'react'
import './Chat.css'


const Chat = () => {

    
    const [isSeed, setSeed] = useState('')
    const [userMessage, setUserMessage] = useState('')


const sendMessage = (e) =>  {
    e.preventDefault();
    
}

console.log(userMessage);

    useEffect(()=>{
        
        setSeed(Date())

    }, [])

  return (
    <div className='chat'>
        <div className='chat_header'>
        <Avatar src={`https://avatars.dicebear.com/api/micah/${isSeed}.svg`}/>
        <div className='chat_headerInfo'>
            <h3>Room name</h3>
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
            

            <p className={`chat_message ${true && 'chat_reciever'}`}>
                <span className='chat_name'>
                Matt H</span>Hey Guys
                <span className='chat_timestamp'>{`${new Date().getHours()}:${new Date().getMinutes()}pm`}</span>
            </p>

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