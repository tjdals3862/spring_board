import React from 'react'
import Bottom from '../include/Bottom'
import Header from '../include/Header'
import LoginHeader from '../include/LoginHeader'
import LoginForm from './LoginForm'

const LoginPage = () => {
  return (
    <>
      <LoginHeader/>
        <LoginForm/>
      <Bottom/>
    </>
  )
}

export default LoginPage
