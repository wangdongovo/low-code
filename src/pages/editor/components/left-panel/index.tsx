import { useState } from 'react'
import './index.less'

const LeftPanel = () => {
  const [tabBar, setTabBar] = useState([
    {
      id: 1,
      name: '组件',
      active: true
    },
    {
      id: 2,
      name: '模版',
      active: false
    }
  ])

  const handleTab = (item: any) => {
    const updatedTabBar = tabBar.map((tab: any) =>
      tab.id === item.id ? { ...tab, active: true } : { ...tab, active: false }
    )
    setTabBar(updatedTabBar)
  }

  return (
    <div className="left-panel">
      <div className="tab-bar">
        {tabBar.map((item: any) => (
          <div
            className={item.active ? 'tab-item active' : 'tab-item'}
            key={item.id}
            onClick={() => handleTab(item)}
          >
            <span>{item.name}</span>
          </div>
        ))}
      </div>



      <div className='library'>

        <div className='library-item'>
          <img className='icon' src="https://pixso-pub.oss-cn-hangzhou.aliyuncs.com/cmt-lib-pc/YY8RfSXyAW6vrTtlTtp88A?1655084236" alt=""  />
          <span className='name'>美味食物图标</span>
        </div>
        <div className='library-item'>
          <img className='icon' src="https://pixso-pub.oss-cn-hangzhou.aliyuncs.com/cmt-lib-pc/YY8RfSXyAW6vrTtlTtp88A?1655084236" alt=""  />
          <span className='name'>美味食物图标</span>
        </div>
        <div className='library-item'>
          <img className='icon' src="https://pixso-pub.oss-cn-hangzhou.aliyuncs.com/cmt-lib-pc/YY8RfSXyAW6vrTtlTtp88A?1655084236" alt=""  />
          <span className='name'>美味食物图标</span>
        </div>
      </div>
    </div>
  )
}

export default LeftPanel
