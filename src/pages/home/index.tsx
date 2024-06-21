import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import withAuth from '@/auth/withAuth'

import './index.less'

const Home = () => {
  const navigate = useNavigate()

  const [listData] = useState([
    {
      id: 1718697065000,
      title: '你要永远活在影子里吗？',
      intro: '剧集《看不见影子的少年》：失踪案扑朔迷离，张颂文、荣梓杉再演对手戏',
      img: 'https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/43/ac/b4/43acb46f-3fb2-ce6e-cf99-4ef0b529312f/8d7fe65c-7198-4392-a4de-4ee068537130.png/1012x1266fn.webp'
    },
    {
      id: 1718697065001,
      title: '你要永远活在影子里吗？',
      intro: '剧集《看不见影子的少年》：失踪案扑朔迷离，张颂文、荣梓杉再演对手戏',
      img: 'https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/43/ac/b4/43acb46f-3fb2-ce6e-cf99-4ef0b529312f/8d7fe65c-7198-4392-a4de-4ee068537130.png/1012x1266fn.webp'
    },
    {
      id: 1718697065002,
      title: '你要永远活在影子里吗？',
      intro: '剧集《看不见影子的少年》：失踪案扑朔迷离，张颂文、荣梓杉再演对手戏',
      img: 'https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/43/ac/b4/43acb46f-3fb2-ce6e-cf99-4ef0b529312f/8d7fe65c-7198-4392-a4de-4ee068537130.png/1012x1266fn.webp'
    }
  ])

  const handleDetail = (item: any) => {
    const {id} = item
    navigate(`/detail/${id}`)
  }

  return (
    <div className="home-container">
      <div className="feed-section">
        {listData.map((item) => {
          return (
            <div className="feed-item" onClick={() => handleDetail(item)} key={item.id}>
              <img
                src="https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/43/ac/b4/43acb46f-3fb2-ce6e-cf99-4ef0b529312f/8d7fe65c-7198-4392-a4de-4ee068537130.png/1012x1266fn.webp"
                alt=""
              />

              <div className="story-wrapper">
                <p className="label">主打推荐</p>
                <p className="title">{item.title}</p>
                <p className="intro">{item.intro}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default withAuth(Home)
