import { AttachFile, MoreVert, SearchOutlined } from '@mui/icons-material'
import { Avatar, IconButton } from '@mui/material'
import React, { useState, useEffect} from 'react'
import './Chat.css'


const Chat = () => {

    
    const [isSeed, setSeed] = useState('')

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
            
            <p className={`chat_message ${true && 'chat_reciever'}`}><span className='chat_name'>
                Matt H</span>Hey Guys
                <span className='chat_timestamp'>{`${new Date().getHours()}:${new Date().getMinutes()}pm`}</span>
            </p>
        </div>

        <div className='chat_footer'>
                
        </div>

    </div>
  )
}

export default Chat