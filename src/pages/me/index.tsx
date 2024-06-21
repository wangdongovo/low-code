import React, { useState } from 'react'
import './index.less'


import NavBar from '@/components/nav-bar/index'

const Me = () => {
  const [userInfo] = useState({
    name: '芍药居小卖部',
    uid: '243244',
    intro: '有趣的简洁吸引粉丝',
    avatar: 'https://sns-avatar-qc.xhscdn.com/avatar/5e1df3895b495a0001a02ff4.jpg',
    sex: '男',
    birthday: '2024-06-17',
    phone: '18513389799',
    email: 'caixukun@gmail.com',
    address: '中国  背景  朝阳'
  })







  return (
    <div className="me-container">

      <NavBar title='编辑资料'/>


      <div className='wrapper'>
      <div className="avatar-section">
        <img src={userInfo.avatar} alt="" />
      </div>

      <div className="list-section">
        <div className="list-item">
          <div className="label">名字</div>
          <div className="content">{userInfo.name}</div>
        </div>
        <div className="list-item">
          <div className="label">uid</div>
          <div className="content">{userInfo.uid}</div>
        </div>
        <div className="list-item">
          <div className="label">简介</div>
          <div className="content">{userInfo.intro}</div>
        </div>
        
        <div className="list-item">
          <div className="label">性别</div>
          <div className="content">{userInfo.sex}</div>
        </div>
        <div className="list-item">
          <div className="label">生日</div>
          <div className="content">{userInfo.birthday}</div>
        </div>
        <div className="list-item">
          <div className="label">手机号</div>
          <div className="content">{userInfo.phone}</div>
        </div>
        <div className="list-item">
          <div className="label">邮箱</div>
          <div className="content">{userInfo.email}</div>
        </div>
        <div className="list-item">
          <div className="label">地址</div>
          <div className="content">{userInfo.address}</div>
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default Me
