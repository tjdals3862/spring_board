import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import Bottom from '../include/Bottom'
import Header from '../include/Header'
import BoardLists from './BoardLists'
import BoardPagination from './BoardPagination'
import { Form,Button, Col, Row } from 'react-bootstrap'
import axios from 'axios'

const BoardList = ({accessToken}) => {

  const [board, setBoard] = useState([{
    bno: '',
    title: '',
    writer: '',
    content: '',
    regdate: '',
    hit: ''
}]);

  useEffect(() =>  {
    axios.get('/board/list')
      .then(response => setBoard(response.data.board))
      .catch(error => console.log(error))
  }, []);

  const Search = () => {        
    const u_search = document.getElementById('search').value
    const u_select = document.getElementById('select').value // 1: 제목 2: 작성자

    const userData = async () => {
      await axios.get(`/board/searchList?u_search=${u_search}&u_select=${u_select}`)
      .then(response => setBoard(response.data.board))
    }
    userData();
    //board = searchBoard;
    //console.log(board)
}  



  return (
    
    <>
      <Header/>          
        <Table striped bordered hover>
          <thead>
          <tr>
              <th>#bno</th>
              <th>제목</th>
              <th>작성자</th>
              <th>등록일자</th>
              <th>조회수</th>
          </tr>
          </thead>
          <tbody >            
            { board.map((list,index) => (
                <BoardLists board={list} key={index}/>
              ))}           
          </tbody>          
        </Table>
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
            
        <BoardPagination/>
      <Bottom/>
    </>
      
  )
}

export default BoardList
