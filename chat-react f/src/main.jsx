import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import App, {loader as appLoader} from './routes/App'
import Login, {loader as loginLoader} from './routes/Login'
import Room, {action as roomAction, loader as roomLoader} from './routes/Room'

const router = createBrowserRouter([
  {
    children: [
      {
        action: roomAction,
        element: <Room />,
        loader: roomLoader,
        path: '/rooms/:roomId',
      },
    ],
    element: <App />,
    loader: appLoader,
    path: '/',
  },
  {
    element: <Login />,
    loader: loginLoader,
    path: '/login',
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
