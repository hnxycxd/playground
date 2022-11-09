import { BrowserRouter, useRoutes } from 'react-router-dom'
import Home from '@/pages/home/home'
import List from '@/pages/list/list'

const routeConfig = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/list',
    element: <List />,
  },
]

const Index = () => {
  const element = useRoutes(routeConfig)
  return <div>{element}</div>
}

export default function () {
  return <BrowserRouter>{<Index />}</BrowserRouter>
}
