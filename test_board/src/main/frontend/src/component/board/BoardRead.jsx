import React, { useEffect, useState } from 'react'
import Bottom from '../include/Bottom'
import Header from '../include/Header'
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

const BoardRead = () => {

  const [board, setBoard] = useState([{
    bno: 0,
    title: '',
    writer: '',
    content: '',
    regdate: '',
    hit: 0
}]);

  useEffect(() => {
      axios.get('/board/list')
      //.then(response => setBoard(response.data.board))
      .then(response => {
        //console.log(response.data)
        const result = JSON.stringify(response.data.board)
        const jsonDoc = JSON.parse(result);
        for(let i=0;i<1;i++){
          setBoard({
            bno:jsonDoc[0].bno,
            title:jsonDoc[0].title,
            writer:jsonDoc[0].writer,
            content:jsonDoc[0].content,
            regdate:jsonDoc[0].regdate
          });
        }        
      })
      .catch(error => console.log(error))
  }, []);

  
  console.log(board);
  console.log(board.bno)

  return (
    <>
     <Header/>
     <h3 style={{margin: 20}}>Board Read Page</h3>
      <FloatingLabel controlId="floatingInputGrid" label="Bno" className="mb-3">        
        <Form.Control as="textarea" placeholder="Leave a comment here" 
            style={{ height: '70px', width:'1800px'}}        
            >{board.bno}</Form.Control>
      </FloatingLabel>

      <FloatingLabel controlId="floatingInputGrid" label="Title" className="mb-3">        
        <Form.Control as="textarea" placeholder="Leave a comment here" 
            style={{ height: '70px', width:'1800px'}}
        >{board.title}</Form.Control>
      </FloatingLabel>

      <FloatingLabel controlId="floatingTextarea2" label="Comments">
        <Form.Control as="textarea" placeholder="Leave a comment here"
         style={{ height: '300px', width:'1800px'}}
        >{board.content}</Form.Control>
      </FloatingLabel>

      <FloatingLabel controlId="floatingInputGrid" label="Writer" className="mb-3">        
        <Form.Control as="textarea" placeholder="Leave a comment here" 
            style={{ height: '70px', width:'1800px'}}
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInputGrid" label="regdate" className="mb-3">        
        <Form.Control as="textarea" placeholder="Leave a comment here" 
            style={{ height: '70px', width:'1800px'}}
        />
      </FloatingLabel>
      
      <Button variant="primary" style={{margin: 5}}>등록</Button>{' '}
      <Button variant="success" style={{margin: 5}}>수정</Button>{' '}
      <Button variant="danger" style={{margin: 5}}>취소</Button>{' '}
     <Bottom/> 
    </>
  )
}

export default BoardRead
