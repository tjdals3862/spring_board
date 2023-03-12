import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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
      <div style={{style}}>
        <form action="/member/Login" method="post">
          <div class="form-group" style={{margin: 10}}>
            <FloatingLabel controlId="floatingInput" label="id" className="mb-3" style={{ height: '70px', width:'300px'}}>
              <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>

            <FloatingLabel controlId="floatingPassword" label="Password" style={{ height: '70px', width:'300px'}}>
              <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>
          </div>
          <Button variant="primary" type="submit" style={{margin: 10}}>로그인</Button>
          <Button variant="secondary" onClick="location.href='/member/Register'" style={{margin: 10}}>회원 가입</Button>{' '}
        </form> 
      </div>
    </>
  )
}

export default LoginForm
