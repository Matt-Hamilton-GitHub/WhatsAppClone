import React from 'react'
import { Button } from '@mui/material';
import styled from 'styled-components';
import { auth, provider } from './firebaseSetup';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {

    const [{user}, dispatch] = useStateValue()

    const signIn =()=>{



    auth.signInWithPopup(provider)
        .then(result => 
            dispatch({
                type: actionTypes.SET_USER, 
                user: result.user
        }))
        .catch(err =>alert(err.message))

    
}

  return (
<Wrapper>
    
        <div className='login_container'>
    <img 
    src={`https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg`}
    alt='whatsapp-logo'/>
    
     <div className='login_container_text'>
         <h1>Sign in to WhatsApp</h1>
     </div>
     <Button onClick={signIn} type='submit'>Sign in with Google</Button>
        </div>
    
</Wrapper>
  )
}

export default Login

const Wrapper = styled.div `

    background-color: #f8f8f8;
    height:100vh;
    width:100vw;
    display:grid;
    place-items:center;

    .login_container{
        padding:100px;
        position:relative;
        text-align:center;
        font-family: 'Nunito Sans', sans-serif;
        background-color: white;
        border-radius:10px;
        box-shadow: -1px 5px 13px -7px #000000, 2px 8px 2px -2px rgba(0, 0, 0, 0);
    }

    .login_container::before{
        content:' ';
        color: white;
        position:absolute ;
        top: 0;
        left:0;
        width: 100%;
        height: 20px;
        background-color: #0a8d48 !important;

    }
    
    .login_container > img{
        object-fit: contain;
        height: 100px;
        margin-bottom:40px;
    }

    .login_container > button{
        margin-top:50px;
        text-transform:inherit !important;
        background-color: #0a8d48 !important;
        color: white;
    }

`