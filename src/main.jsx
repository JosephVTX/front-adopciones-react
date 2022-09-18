import React from 'react'
import ReactDOM from 'react-dom/client'
import { Card } from './card/Card'
import Nav from './navbar/Nav'

import { Pet } from './Tests'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <Pet />
    
    <Nav />
    <Card />
  </React.StrictMode>
)
