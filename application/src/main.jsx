import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/Home.jsx'
import AppRoute from './routes/AppRoute.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRoute/>
  </React.StrictMode>,
)
