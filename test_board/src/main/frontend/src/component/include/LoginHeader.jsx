import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const LoginHeader = () => {
  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">Spring Board</Navbar.Brand>   
      </Container>      
    </Navbar>		
    </>
  )
}

export default LoginHeader
