import React, { useRef } from "react"
import { Button } from "antd"
import Comp from "./comp"

const App = () => {
  const compRef = useRef<HTMLDivElement | null>(null)
  return (
    <div>
      <Comp ref={compRef} age={11} />
      <Button
        onClick={() => {
          compRef.current?.getData()
        }}
      >
        button
      </Button>
    </div>
  )
}

export default App
