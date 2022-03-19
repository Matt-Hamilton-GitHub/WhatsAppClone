import { Avatar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './SidebarChat.css'

function SidebarChat({addNewChat}) {

const [isSeed, setSeed] = useState('')

    useEffect(()=>{
        
        setSeed(Date())

    }, [])


    const creatChat = () => {
        const roomName = prompt("Please enter chat name");

        if(roomName){

        }
    }

  return !addNewChat ?(
    <div className='sidebar_chat'> 
        <Avatar src={`https://avatars.dicebear.com/api/micah/${isSeed}.svg`}/>
        <div className='sidebar_chat_info' >
            <h2>Room name</h2>
            <p>Last message</p>
        </div>
    
    </div>
  ) : (
    <div className='sidebar_chat'
    onClick={creatChat} >
    <h2>Add New Chat</h2>
    </div>
  )
}

export default SidebarChat