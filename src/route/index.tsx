import { BrowserRouter, useRoutes } from "react-router-dom"
import Home from "@/pages/home/home"
import List from "@/pages/list/list"
import Ice from "@/pages/ice/ice"

const routeConfig = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/list",
    element: <List />,
  },
  {
    path: "/ice",
    element: <Ice />,
  },
]

const Index = () => {
  const element = useRoutes(routeConfig)
  return <>{element}</>
}

export default function () {
  return <BrowserRouter>{<Index />}</BrowserRouter>
}
