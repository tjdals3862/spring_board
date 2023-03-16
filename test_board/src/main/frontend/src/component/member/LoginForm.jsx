import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import KakaoLogin from './KaKaoLogin';

const LoginForm = () => {
  const style = {
    display:"inline-block",
    width:"100px",
    height:"100px",
    boder:"1px solid black",
    background:"orange",
  }
  return (
    <>

          <KakaoLogin></KakaoLogin>
          <Button variant="secondary" onClick="location.href='/member/Register'" style={{margin: 10}}>회원 가입</Button>{' '}
        
      
    </>
  )
}

export default LoginForm
