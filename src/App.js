import React,{useState} from 'react'
import SideBar from "./SideBar";
import Chat from "./Chat";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Footer from './Footer';
import {useStateValue} from './StateProvider'

function App() {

  const [{user},dispatch] = useStateValue();

  return (
    <div className="app">
     
          {!user ? (<Login/>) :(
              <div className='app_body'>
    <Router >
       <SideBar />
      <Routes>

        <Route path='/rooms/:roomId' element={<Chat />}/>
             
        <Route path='/' element={<Chat />} />

        <Route path='*' element={<h1>Chat is not found </h1>}/>
  
      </Routes>

    </Router>
              </div>

              
          ) }

          

     <Footer />
    </div>
  );
}

export default App;
