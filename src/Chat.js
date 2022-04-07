import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined } from '@mui/icons-material'
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import { Avatar, IconButton } from '@mui/material'
import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import './Chat.css'
import db from './firebaseSetup';
import { getDocs, collection, doc } from 'firebase/firestore';


const Chat = () => {

    const [isSeed, setSeed] = useState('')
    const [userMessage, setUserMessage] = useState('')
    const [allRooms, setAllRooms] = useState([{name: '',id: ''}])
    const {roomId} = useParams();
    const [roomName, setRoomName] = useState('');
   

    const roomsCollectionRef = collection(db, 'rooms')
    
    const sendMessage = (e) =>  {
    e.preventDefault();
    setUserMessage('')
    
    }


const getRooms = async () => {

    const data = await getDocs(roomsCollectionRef);
    setAllRooms(data.docs.map(room => ({...room.data(), id: room.id}) ))
    setRoomName(data.docs.map(room => ({...room.data(), id: room.id})).filter(room => room.id === roomId))
}
    
allRooms.map(room => {console.log(room.id);})


    useEffect(()=>{   
    if(roomId){
        getRooms();
        }
    }, [roomId])


    useEffect(()=>{
        setSeed(Math.floor(Math.random() * 5000))
    }, [])



  return (
    <div className='chat'>
        <div className='chat_header'>
        <Avatar src={`https://avatars.dicebear.com/api/micah/${isSeed}.svg`}/>
        <div className='chat_headerInfo'>
            <h3>{roomName[0].name}</h3>
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