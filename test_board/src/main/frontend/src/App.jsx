import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import BoardList from './component/board/BoardList'
import LoginPage from './component/member/LoginPage'
import Register from './component/member/Register'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import BoardAdd from './component/board/BoardAdd';
import BoardRead from './component/board/BoardRead';

const App = () => {

/*   const [board, setBoard] = useState([
    { bno:1, title: 'test', writer: 'test', regdate:'2023-03-10', hit:0},
    { bno:2, title: 'test', writer: 'test', regdate:'2023-03-11', hit:0},
  ]); */

  const [board, setBoard] = useState([{
    bno: '',
    title: '',
    writer: '',
    content: '',
    regdate: '',
    hit: ''
}]);

  useEffect(() => {
      axios.get('/board/list')
      .then(response => setBoard(response.data.board))
      .catch(error => console.log(error))
  }, []);

  console.log(board);

  return (
    <>
      <Routes>
        <Route path='/' exact={true} element={<LoginPage />} />
        <Route path='/board/list' exact={true} element={<BoardList boardList={board}/>} />
        <Route path='/board/boardAdd' exact={true} element={<BoardAdd />} />
        <Route path='/board/BoardRead' exact={true} element={<BoardRead boardList={board}/>} />
        <Route path='/member/LoginForm' exact={true} element={<LoginPage />} />
        <Route path='/member/Register' exact={true} element={<Register />} />
      </Routes>
    </>
  )
}

export default App
