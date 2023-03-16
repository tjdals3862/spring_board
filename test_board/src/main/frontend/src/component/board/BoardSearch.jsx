import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Form,Button, Col, Row } from 'react-bootstrap'

const BoardSearch = () => {

  const Search = () => {
    const u_search = document.getElementById('search').value
    const u_select = document.getElementById('select').value // 1: 제목 2: 작성자
    console.log(u_search)
    console.log(u_select)

    const [board, setBoard] = useState([{
      bno: '',
      title: '',
      writer: '',
      content: '',
      regdate: '',
      hit: ''
    }]);
  
    useEffect(() => {
        axios.get('/board/searchList')
        .then(response => setBoard(response.data.board))
        .catch(error => console.log(error))
    }, []);
  }

  
  return (    
    <Row style={{justifyContent: "center"}}>
        <Form.Select id="select" aria-label="Default select example" style={{ height: '38px', width:'100px'}}>
          <option value="1">제목</option>
          <option value="2">작성자</option>
        </Form.Select>
        <Col lg={10} style={{ height: '70px', width:'200px'}}>
            <Form.Control id="search" type="text" placeholder="이름을 입력해주세요." />
        </Col>
        <Col lg={2} >
            <Button onClick={Search}>찾기</Button>
        </Col>
    </Row>    
  )
}

export default BoardSearch
