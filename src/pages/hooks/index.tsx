import React from 'react'

import EffectHooks from './components/effect-hooks'
import MemoHooks from './components/memo-hooks'
import CallbackHooks from './components/callback-hooks'
import IdHooks from './components/id-hooks'
import RefHooks from './components/ref-hooks'
import ContextHooks from './components/context-hooks'

const ReactHooks = () => {
  return (
    <div>
      <h1>React Hooks</h1>

      {/* <EffectHooks /> */}
      {/* <MemoHooks /> */}
      {/* <CallbackHooks/> */}
      {/* <IdHooks /> */}
      {/* <RefHooks /> */}
      <ContextHooks />
    </div>
  )
}

export default ReactHooks
