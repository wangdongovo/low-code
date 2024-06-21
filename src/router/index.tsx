import { createBrowserRouter } from 'react-router-dom'

import App from '@/App'
import Error from '@/components/error/index'

import Home from '@/pages/home/index'
import Me from '@/pages/me/index'
import Production from '@/pages/production/index'
import Login from '@/pages/login/index'

import Detail from '@/pages/detail/index'
import ReactHooks from '@/pages/hooks/index'



import Editor from '@/pages/editor/index'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home children={null}/>
      },
      {
        path: '/editor',
        element: <Editor />
      },
      {
        path: '/hooks',
        element: <ReactHooks />
      },
      {
        path: '/detail/:id',
        element: <Detail />
      },
      {
        path: '/me',
        element: <Me />
      },
      {
        path: '/production',
        element: <Production />
      },
      {
        path: '/login',
        element: <Login />
      }
    ]
  }
])

export default router
