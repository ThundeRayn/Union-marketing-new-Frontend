import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'
import Home from './pages/Home'
import Layout from './layout/Layout'
import Service from './pages/Service'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='service' element={<Service />} />
            <Route path='*' element={<div>404 Not Found</div>} />
            
          </Route>
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
