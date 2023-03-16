import React from 'react'
import { Button } from 'react-bootstrap';

const KakaoLogin = () => {

  const REST_API_KEY = `${process.env.REACT_APP_KAKAO_API_KEY}`
  const REDIRECT_URI = 'http://localhost:3000/oauth/kakao/callback';
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const kakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  }

  return (
    <>
      <Button onClick={kakaoLogin} style={{margin: 10}}>카카오 로그인</Button>{' '}
    </>
  )
}

export default KakaoLogin