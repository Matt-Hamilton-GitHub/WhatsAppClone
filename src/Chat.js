import { Avatar } from '@mui/material'
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
        </div>

        <div className='chat_body'>
                
        </div>

        <div className='chat_footer'>
                
        </div>

    </div>
  )
}

export default Chat