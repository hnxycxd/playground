import ReactDOM from "react-dom/client"
import App from "./App"
import { Ctx } from "./utils"
import "uno.css"
// import "antd/lib/style"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Ctx.Provider value={{ name: "zs" }}>
    <App />
  </Ctx.Provider>
)
