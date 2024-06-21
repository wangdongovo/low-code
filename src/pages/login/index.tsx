import React from 'react'
import { useNavigate } from 'react-router-dom'

import './index.less'
const Login = () => {
  const navigate = useNavigate()

  // 登录
  const handleLogin = () => {

    localStorage.setItem('isAuthenticated', 'true')
    console.log('登录')
    navigate('/')
  }
  return (
    <div className="login-wrapper">
      <div className="login-content">
        <div className="content">
          <h3>欢迎使用小卖部</h3>

          <div className="input-section">
            <input type="text" placeholder="请输入手机号" />
            <input type="password" placeholder="请输入密码" />
          </div>

          <div className="button-section" onClick={handleLogin}>
            登录
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
