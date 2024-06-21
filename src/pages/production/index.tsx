import React from 'react'

import { Button } from '@arco-design/web-react'


import Detail from './detail'

interface State {
  createTime: string
  goodsId: string
  goodsName: string
  goodsPrice: string,
  userInfo: any
}

class Production extends React.Component<{}, State> {
  constructor(props: any) {
    super(props)

    this.state = {
      createTime: '2021-01-01',
      goodsId: '123456',
      goodsName: '测试商品',
      goodsPrice: '100',
      userInfo: {
        name: '张三',
        age: 18,
        address: '北京市'
      }
    }
  }

  handleChange = () => {
    this.setState({
      goodsName: '测试商品2'
    }, () => console.log(this.state))


    console.log(this.state)
  }


  handleChangeName = (newUserInfo: any) => {

    console.log('newUserInfo', newUserInfo)
    this.setState({
      userInfo: {
        name: '李四',
        age: 20,
        address: '上海市'
      }
    })
  }

  render() {
    const { createTime, goodsName, userInfo } = this.state
    return (
      <div>
       <div>
       <Button type="primary" onClick={this.handleChange}>
          更改商品名
        </Button>
        产品展示页面
        <p>创建时间：{createTime}</p>
        <p>商品名称：{goodsName}</p>
       </div>




        <div>
          <Detail userInfo={userInfo} handleChangeName={this.handleChangeName}/>
        </div>
      </div>
    )
  }
}

export default Production
