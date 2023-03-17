import React from 'react'
import { Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Bottom from '../include/Bottom'
import Header from '../include/Header'
import BoardLists from './BoardLists'
import BoardPagination from './BoardPagination'
import BoardSearch from './BoardSearch'

const BoardList = ({boardList,accessToken}) => {
  const board = boardList; 
  const navigate = useNavigate();

  if(accessToken == "") {
    navigate("/")
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
          <tbody>            
             { board.map((list) => (
                <BoardLists board={list}/>
              ))}           
          </tbody>          
        </Table>
        <BoardSearch/>    
        <BoardPagination/>
      <Bottom/>
    </>
      
  )
}

export default BoardList
