import React, { useState } from 'react'

import './index.less'

const Nav = () => {
  const [nav] = useState([
    {
      name: '首页',
      path: '/'
    },
    {
      name: '作品',
      path: '/production'
    },
    {
      name: '关于我',
      path: '/me'
    },
    {
      name: '联系我',
      path: '/contact'
    }
  ])
  return (
    <div className="nav-section">
      <div className="section-content">
        {nav.map((item) => {
          return <div className='nav-item' key={item.name}>{item.name}</div>
        })}
      </div>
    </div>
  )
}

export default Nav
