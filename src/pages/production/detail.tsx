import React from 'react'

import { Button } from '@arco-design/web-react'

interface DetailProps {
  userInfo: {
    name: string
    age: number
    address: string
  },
  handleChangeName: (newUserInfo: any) => void
}

const Detail: React.FC<DetailProps> = ({ userInfo, handleChangeName }) => {
  return (
    <div>
      <p>用户信息：</p>
      <ul>
        <li>姓名：{userInfo.name}</li>
        <li>年龄：{userInfo.age}</li>
        <li>地址：{userInfo.address}</li>
      </ul>

      <Button type="primary" onClick={() => handleChangeName({name: '路飞'})}>
      改变用户信息
        </Button>

      
    </div>
  )
}

export default Detail
