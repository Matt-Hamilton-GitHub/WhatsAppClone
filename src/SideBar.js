import React, { useEffect, useState } from 'react'
import './SideBar.css'
import SettingsIcon from '@mui/icons-material/Settings';
import SidebarChat from './SidebarChat';
import { Chat, SearchOutlined } from '@mui/icons-material';
import { MoreVert } from '@mui/icons-material';
import { DonutLargeOutlined } from '@mui/icons-material';
import { Avatar, IconButton } from '@mui/material';
import db from './firebaseSetup.js'
import { collection, getDocs } from "firebase/firestore"; 

function SideBar() {

    const [rooms,setRooms] = useState([]);



    const fetchData = async ()=>{
        //     const data = collection(db, 'rooms');
        //     const rooms = await getDocs(data)
        //     const roomsList = rooms.docs.map(doc =>({
        //         id:doc.id,
        //         data:doc.data()
        //     })) 

            const rooms = await getDocs(collection(db, "rooms"));
           const roomsList = rooms.docs.map(doc =>({
                     id:doc.id,
                     data:doc.data()
                })) ;
                console.log(roomsList);
            setRooms(roomsList);


    }

useEffect(()=>{
       fetchData();
    },[])


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
        {rooms.map(room =>
        <SidebarChat key={room.id} id={room.id} name={room.data.name}/>
        )}
    </div>
    </div>
  )
}

export default SideBar