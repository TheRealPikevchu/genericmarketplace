import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import './style/index.css'
import Header from './parts/Header'
import ProductHighlight from './parts/ProductHighlight'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Header
        specialOffer="Flash offer ! See our best deals by clicking"
        specialOfferLink="http://www.google.fr"
      />
      <ProductHighlight />
    </Router>
  </React.StrictMode>,
)
