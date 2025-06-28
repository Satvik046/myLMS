import { createRoot } from 'react-dom/client'
import './index.css'
import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import { AppContextProvider } from './context/AppContext.jsx'
import {BrowserRouter, BrowserRouter as Router} from "react-router-dom"

const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement)

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </BrowserRouter>
)
