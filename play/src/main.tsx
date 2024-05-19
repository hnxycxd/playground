// import ReactDOM from 'react-dom'
import { createRoot } from "react-dom/client";
import App from "./App";
import "virtual:uno.css";
import "antd/dist/antd.min.css";
import "./style.css";

const container = document.getElementById("root") as HTMLElement;
createRoot(container).render(<App />);
