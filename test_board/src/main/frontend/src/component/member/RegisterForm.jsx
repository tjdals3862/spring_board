import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const RegisterForm = () => {
  return (
    <div>
      <form action="/member/join" method="post">

        <FloatingLabel controlId="floatingInput" label="id" className="mb-3" style={{ height: '70px', width:'300px'}}>
            <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>

        <FloatingLabel controlId="floatingInput" label="password" className="mb-3" style={{ height: '70px', width:'300px'}}>
            <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>

        <FloatingLabel controlId="floatingInput" label="email" className="mb-3" style={{ height: '70px', width:'300px'}}>
            <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>

        <FloatingLabel controlId="floatingInput" label="name" className="mb-3" style={{ height: '70px', width:'300px'}}>
            <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>

        <Button variant="primary" type="submit" style={{margin: 10}}>회원 가입</Button>
        <Button variant="success" style={{margin: 5}}>취소</Button>{' '}
      </form>
      
    </div>
  )
}

export default RegisterForm
