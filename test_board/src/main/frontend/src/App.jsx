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
import KakaoAuth from './component/member/KakaoAuth';

const App = () => {

  const [accessToken, setAccessToken] = useState("");  
  const aToken = (params) => {
    setAccessToken(params)
    console.log(accessToken)
  }



  return (
    <>
      <Routes>
        <Route path='/' exact={true} element={<LoginPage />} />
        <Route path='/board/list' exact={true} element={<BoardList accessToken={accessToken} />} />
        <Route path='/board/boardAdd' exact={true} element={<BoardAdd aToken={aToken}/>} />
        <Route path='/board/BoardRead' exact={true} element={<BoardRead  aToken={aToken}/>} />
        <Route path='/member/LoginForm' exact={true} element={<LoginPage />} />        
        <Route path='/member/Register' exact={true} element={<Register />} />
        <Route path='/oauth/kakao/callback' exact={true} element={<KakaoAuth aToken={aToken} />} />

        
      </Routes>
    </>
  )
}

export default App
