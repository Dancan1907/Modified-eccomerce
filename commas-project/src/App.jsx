import { Routes, Route } from 'react-router-dom';

import { HomePage } from './pages/HomePage'
import './App.css'

function App() {
  return (
    <Routes>
      <Route index  element={<HomePage />} />
      <Route path="/orders" element={<div>Orders Page</div>} />
      <Route path="/checkout" element={<div>Checkout Page</div>} />
      {/* Add more routes here as needed */}
    </Routes>
      
  
  )
}

export default App
