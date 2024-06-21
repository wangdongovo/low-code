import LeftPanel from '@/pages/editor/components/left-panel/index'
import FicViewport from '@/pages/editor/components/fic-viewport/index'
import RightPanel from '@/pages/editor/components/right-panel/index'

import './index.less'

const Main = () => {
  return (
    <div className="main-section">
      <LeftPanel />
      <FicViewport />
      <RightPanel />
    </div>
  )
}

export default Main
