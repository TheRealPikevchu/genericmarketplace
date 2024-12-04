import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import './style/index.css'
import Header from './parts/Header'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Header
        specialOffer="Flash offer ! See our best deals by clicking"
        specialOfferLink="http://www.google.fr"
      />
    </Router>
  </React.StrictMode>,
)
