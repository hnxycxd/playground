import React, { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Form, Input, Button, Modal } from "antd"
import Echarts, { ECOption } from "@/components/echarts"

const Home: React.FC = () => {
  const navigate = useNavigate()
  const [theme, setTheme] = useState<"auto" | "dark">("auto")
  const [option, setOption] = useState<ECOption>({})
  // const echartsInstance = useRef<echarts.ECharts>()
  const echartsContainer = useRef(null)

  const linkTo = (path: string) => {
    navigate(path)
  }

  const handleTheme = () => {
    const result = document.documentElement.classList.toggle("dark")
    if (result) {
      localStorage.setItem("color-schema", "dark")
      setTheme("dark")
    } else {
      localStorage.removeItem("color-schema")
      setTheme("auto")
    }
  }

  useEffect(() => {
    setOption({
      title: {
        text: "ECharts 入门示例",
      },
      tooltip: {},
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
      },
      yAxis: {},
      series: [
        {
          name: "销量",
          type: "bar",
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
    })
  }, [theme])
  return (
    <div className="h-full w-full">
      <div className=" mb-2 w-1/4 p-4 shadow-md">
        <Button onClick={() => linkTo("/")}>/</Button>
        <Button onClick={() => linkTo("/list")}>/list</Button>
        <Button onClick={() => linkTo("/ice")}>/ice</Button>
      </div>

      <Button onClick={handleTheme}>toggle theme</Button>
      <p className=" text-black dark:text-white">以下是一段文本内容</p>

      <Echarts theme="dark" option={option} style={{ width: 800 }} />
    </div>
  )
}

export default Home
