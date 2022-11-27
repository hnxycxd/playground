import { useState } from "react"
import reactLogo from "./assets/react.svg"
import "./App.scss"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="card">
        <div>
          他们目前都是计算机生成的，行为由程序控制，看上去非常机械，没有趣味，时间一长，让人觉得很乏味。
          仔细想一下，你就会发现，NPC 完全可以改成真人扮演。
          举例来说，我扮演一个调酒师，每天晚上到游戏里面上班，专门服务走进酒吧的玩家。游戏公司会提供剧本，告诉我需要做哪些事，说哪些话。除此之外，我可以自由发挥，但是不能离开酒吧。
          这会大大增加游戏的逼真感和可玩性。每个 NPC
          背后都是真人，跟他们互动就是跟人类互动，游戏世界顿时就变成了真实世界。
        </div>

        <div className="i-carbon:bookmark-filled hover:text-teal-400"></div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
