import { createRoot } from 'react-dom/client'
import RootRoute from '@/route'
// import store from "./store"
import './index.css'

// const { Provider } = store

const rootElement = document.getElementById('app')

if (rootElement) createRoot(rootElement).render(<RootRoute />)
