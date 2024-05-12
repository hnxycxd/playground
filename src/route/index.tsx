import * as React from 'react'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from '@/pages/home/home'
import ListSub1 from '@/pages/list/sub1'
import ListSub2 from '@/pages/list/sub2'
import List from '@/pages/list/list'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/list',
    element: <List />,
    children: [
      {
        index: true,
        element: <Navigate to='/list/sub1' replace />,
      },
      {
        path: 'sub1',
        element: <ListSub1 />,
      },
      {
        path: 'sub2',
        element: <ListSub2 />,
      },
    ],
  },
  { path: '*', element: <div>404 :(</div> },
])

export default () => <RouterProvider router={router} />
