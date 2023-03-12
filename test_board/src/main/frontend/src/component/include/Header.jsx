import React from 'react'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
	<>
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/board/list">Spring Board</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/board/list" className="nav-link">Home</Link>
            <Link to="/board/boardAdd" className="nav-link">게시물 작성</Link>
          </Nav>          
        </Navbar.Collapse>    
        <Button variant="primary">Logout</Button>{' '}    
      </Container>      
    </Navbar>		
	</>
  )
}

export default Header
