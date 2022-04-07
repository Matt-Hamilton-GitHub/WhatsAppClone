import React from 'react'
import styled from 'styled-components';

function Footer() {
  return (
      <Wrapper>
        <h1>Please note, this is a WhatsApp clone. 
        The purpose of this app is a simple demonstration of skills.
        </h1>
    </Wrapper>
  )
}

export default Footer

const Wrapper = styled.section`
    
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin:10px;
    position: 'absolute';
    bottom:0;
    right:0;
    width: 100%;
    background-color: #B20600;
    opacity: 0.8;

h1{
    padding:10px;
    color: white;
    font-family: 'Nunito Sans', sans-serif;
    
}
`