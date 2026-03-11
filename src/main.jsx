import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AppV2 from './AppV2.jsx'
import AppV3 from './AppV3.jsx'
import AppV4 from './AppV4.jsx'
import './index.css'

function Router() {
  const [route, setRoute] = useState(window.location.hash)

  useEffect(() => {
    const onHashChange = () => setRoute(window.location.hash)
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  if (route === '#/v2') return <AppV2 />
  if (route === '#/v3') return <AppV3 />
  if (route === '#/v4') return <AppV4 />
  return <App />
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
)
