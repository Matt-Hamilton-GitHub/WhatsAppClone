import React, { useEffect, useState } from 'react'
import './SideBar.css'
import SidebarChat from './SidebarChat';
import { Chat, SearchOutlined } from '@mui/icons-material';
import { MoreVert } from '@mui/icons-material';
import { DonutLargeOutlined } from '@mui/icons-material';
import { Avatar, IconButton } from '@mui/material';
import db from './firebaseSetup.js'
import {useStateValue} from './StateProvider'

function SideBar() {

    const [rooms,setRooms] = useState([]);
    const [{user}, dispatch] = useStateValue()



useEffect(()=>{
    const unsubscribe = db.collection('rooms').onSnapshot((snapshot) => 
    setRooms(
      snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data(),
    }))
    
    )
 )

 return () => {
     unsubscribe();
 }
    },[])


  return (
    <div className='sidebar'>
    
    <div className='sidebar_header'>
        <Avatar src={user.photoURL}/>
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
        <div className='sidebar_searchContainer'>
            <SearchOutlined />
            <input placeholder='search or start a new chat' type='text'/>
        </div>
    </div> 
    <div className='sidebar_chats'>
        <SidebarChat addNewChat/>
        {rooms.map(room =>
        <SidebarChat key={room.id} id={room.id} name={room.data.name}/>
        )}
    </div>
    </div>
  )
}

export default SideBar