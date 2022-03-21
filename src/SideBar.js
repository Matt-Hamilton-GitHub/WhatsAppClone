import React from 'react'
import './SideBar.css'
import SettingsIcon from '@mui/icons-material/Settings';
import SidebarChat from './SidebarChat';
import { Chat, SearchOutlined } from '@mui/icons-material';
import { MoreVert } from '@mui/icons-material';
import { DonutLargeOutlined } from '@mui/icons-material';
import { Avatar, IconButton } from '@mui/material';


function SideBar() {
  return (
    <div className='sidebar'>
    
    <div className='sidebar_header'>
        <Avatar/>
        <div className='sidebar_headerRight'>
            <IconButton >
                <DonutLargeOutlined />
            </IconButton>
            <IconButton>
                <Chat />
            </IconButton>
            <IconButton>
                <MoreVert />
            </IconButton>
            
        </div>
    </div>
    <div className='sidebar_search'>
        <div className='sidebar_serachContainer'>
            <SearchOutlined />
            <input placeholder='search or start a new chat' type='text'/>
        </div>
    </div> 
    <div className='sidebar_chats'>
        <SidebarChat addNewChat/>
    </div>
    </div>
  )
}

export default SideBar