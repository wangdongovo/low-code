import React from 'react'

import { Outlet } from "react-router-dom"


import { Provider } from 'react-redux';
import store from '@/store/index'

import './App.less'

function App() {
  return (
    <Provider store={store}>
      <Outlet></Outlet>
    </Provider>
    
  )
}

export default App
