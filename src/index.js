import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/header.js'
import './styles/style.css'

const App = () => <Header />

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
