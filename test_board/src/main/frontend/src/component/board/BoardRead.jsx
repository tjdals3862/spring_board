import React, { useEffect, useState } from 'react'
import Bottom from '../include/Bottom'
import Header from '../include/Header'
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';

const BoardRead = ({board}) => {

  console.log(board)
  const [searchParams, setSearchParams]=useSearchParams();
  let bno = searchParams.get('bno');
  
  return (
    <>
    <Header/>
    <h3 style={{margin: 20}}>Board Read Page</h3>
      <FloatingLabel controlId="floatingInputGrid" label="Bno" className="mb-3">        
        <Form.Control disabled as="textarea" placeholder="Leave a comment here" 
            style={{ height: '70px', width:'1800px'}}        
            >{/* {board[bno-1].bno} */}</Form.Control>
      </FloatingLabel>

      <FloatingLabel controlId="floatingInputGrid" label="Title" className="mb-3">        
        <Form.Control as="textarea" placeholder="Leave a comment here" 
            style={{ height: '70px', width:'1800px'}}
        >{/* board[bno-1].title */}</Form.Control>
      </FloatingLabel>

      <FloatingLabel controlId="floatingTextarea2" label="Comments">
        <Form.Control as="textarea" placeholder="Leave a comment here"
        style={{ height: '300px', width:'1800px'}}
        >{/* board[bno-1].content */}</Form.Control>
      </FloatingLabel>

      <FloatingLabel controlId="floatingInputGrid" label="Writer" className="mb-3">        
        <Form.Control disabled as="textarea" placeholder="Leave a comment here" 
            style={{ height: '70px', width:'1800px'}}
        >
          {/* board[bno-1].writer */}
        </Form.Control>
      </FloatingLabel>

      <FloatingLabel controlId="floatingInputGrid" label="regdate" className="mb-3">        
        <Form.Control disabled as="textarea" placeholder="Leave a comment here" 
            style={{ height: '70px', width:'1800px'}}
        >{/* board[bno-1].regDate */}</Form.Control>
      </FloatingLabel>
      
      <Button variant="primary" style={{margin: 5}}>등록</Button>{' '}
      <Button variant="success" style={{margin: 5}}>수정</Button>{' '}
      <Button variant="danger" style={{margin: 5}}>취소</Button>{' '}
    <Bottom/> 
    </>
  )
}

export default BoardRead
