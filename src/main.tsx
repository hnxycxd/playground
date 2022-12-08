import ReactDOM from "react-dom/client"
// import App from './App'
import RootRoute from "@/route"
import store from "./store"
import "./index.css"

const { Provider } = store

function App() {
  return (
    <Provider>
      <RootRoute />
    </Provider>
  )
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App />
)
