import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'

//ten plik bedzie zawieral tylko root.render App
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
