import React, { useEffect, useMemo, useState } from "react"
import layoutResponsiveObserve from "./layoutResponsiveObserve"

const useLayoutResize = () => {
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  })
  useEffect(() => {
    // 监听
    const token = layoutResponsiveObserve.subscribe((size) => {
      setSize(size)
    })
    // 组件销毁时取消监听
    return () => {
      layoutResponsiveObserve.unSubscribe(token)
    }
  }, [])

  return [size]
}

export default useLayoutResize
