import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cads from './pages/cads'
import Home from './pages/home'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cads" element={<Cads />} />
      </Routes>
    </Router>
  </StrictMode>,
)
