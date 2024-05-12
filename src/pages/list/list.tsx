import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Button, Space } from 'antd'

const Home: React.FC = () => {
  const navigate = useNavigate()
  const [theme, setTheme] = useState<'auto' | 'dark'>('auto')

  const handleTheme = () => {
    const result = document.documentElement.classList.toggle('dark')
    if (result) {
      localStorage.setItem('theme', 'dark')
      setTheme('dark')
    } else {
      localStorage.removeItem('theme')
      setTheme('auto')
    }
  }

  return (
    <div className='h-full w-full'>
      <Space className='mb-2 w-1/4 p-4 shadow-md'>
        <Button onClick={() => navigate('/')}>/</Button>
        <Button onClick={() => navigate('/list')}>/list</Button>
        <Button onClick={() => navigate('/list/sub1')}>/sub1</Button>
        <Button onClick={() => navigate('/list/sub2')}>/sub2</Button>
      </Space>

      <Button onClick={handleTheme}>toggle theme</Button>
      <p className=' text-black dark:text-white'>以下是一段文本内容</p>

      {/* 子路由渲染位置 */}
      <Outlet />
    </div>
  )
}

export default Home
