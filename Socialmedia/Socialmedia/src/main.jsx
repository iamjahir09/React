import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Left from './components/others/Left.jsx'
import Right from './components/others/Right.jsx'

createRoot(document.getElementById('root')).render(
  
    <App>
        <Left/>
        <Right />
    </App>
  
)
