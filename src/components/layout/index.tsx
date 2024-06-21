import React from 'react'
import Main from '@/components/main/index'

import './index.less'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="layout-container">
      <Main>{children}</Main>
    </div>
  )
}

export default Layout
