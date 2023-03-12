import React from 'react'
import Bottom from '../include/Bottom'
import Header from '../include/Header'
import LoginHeader from '../include/LoginHeader'
import RegisterForm from './RegisterForm'

const Register = () => {
  return (
    <>
      <LoginHeader/>
        <RegisterForm/>
      <Bottom/>
    </>
  )
}

export default Register

