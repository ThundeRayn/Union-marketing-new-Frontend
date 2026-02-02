import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'
import Layout from './layout/Layout'

import HomePage from './pages/HomePage'
import ServicePage from './pages/ServicePage'
import AboutPage from './pages/AboutPage'
import EventPage from './pages/EventPage'
import ProjectPage from './pages/ProjectPage'
import BrokerPortalLogin from './pages/BrokerPortalLogin'
import FifthPage from './projects/FifthPage'
import ElevenPage from './projects/ElevenPage'
import EversleyPage from './projects/EversleyPage'
import GeorginaPage from './projects/GeorginaPage'
import CGTowerPage from './projects/CGTowerPage'
import AbejaPage from './projects/AbejaPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='service' element={<ServicePage />} />
            <Route path='about' element={<AboutPage />} />
            <Route path='event' element={<EventPage />} />
            <Route path='project' element={<ProjectPage />} />
            <Route path='login' element={<BrokerPortalLogin />} />
              <Route path='projects/fifth' element={<FifthPage />} ></Route>
              <Route path='projects/eleven' element={<ElevenPage />} ></Route>
              <Route path='projects/eversley' element={<EversleyPage />} ></Route>
              <Route path='projects/georgina' element={<GeorginaPage />} ></Route>
              <Route path='projects/cgtower' element={<CGTowerPage />} ></Route>
              <Route path='projects/abeja' element={<AbejaPage />} ></Route>
            <Route path='*' element={<div>404 Not Found</div>} />
            
            
          </Route>
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
