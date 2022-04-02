import { Avatar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import db from './firebaseSetup'
import './SidebarChat.css'
import  collection  from './firebaseSetup'
import  addDoc  from './firebaseSetup'

function SidebarChat({addNewChat, id,name}) {

const [isSeed, setSeed] = useState('')

    useEffect(()=>{
        
        setSeed(Date())

    }, [])


    const creatChat = () => {
        const roomName = prompt("Please enter chat name");

        if(roomName){
          // db.collection('rooms').add({
          //   name: roomName,
          // })

          try {
            const addNewChat = addDoc(collection(db, "rooms"), {
             name: roomName
            });
            console.log("Document written with ID: ", addNewChat.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
        }
    }

  return !addNewChat ?(
    <div className='sidebar_chat'> 
        <Avatar src={`https://avatars.dicebear.com/api/micah/${isSeed}.svg`}/>
        <div className='sidebar_chat_info' >
            <h2>{name}</h2>
            <p>Last message</p>
        </div>
    </div>

  ) : (
    <div className='sidebar_chat'
    onClick={creatChat} >
    <h2>Add New Chat</h2>
    </div>
  );
}

export default SidebarChat