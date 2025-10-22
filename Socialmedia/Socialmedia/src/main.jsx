import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Left from './components/others/Left.jsx'
import Right from './components/others/Right.jsx'
import Story from './components/others/Story.jsx'
import Header from './components/others/Header.jsx'
import AuthProvider from "./context/AuthProvider";
import { LogIn } from 'lucide-react'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <AuthProvider>
        <App>
        </App>
    </AuthProvider>
    </BrowserRouter>
    


)
