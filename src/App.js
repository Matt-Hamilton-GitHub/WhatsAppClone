import React from 'react'
import SideBar from "./SideBar";
import Chat from "./Chat";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
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
    </div>
  );
}

export default App;
