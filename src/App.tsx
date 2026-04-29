import { useEffect, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'
import Layout from './layout/Layout'

const HomePage = lazy(() => import('./pages/HomePage'))
const ServicePage = lazy(() => import('./pages/ServicePage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const EventPage = lazy(() => import('./pages/EventPage'))
const ProjectPage = lazy(() => import('./pages/ProjectPage'))
const BrokerPortalLogin = lazy(() => import('./pages/BrokerPortalLogin'))
const FifthPage = lazy(() => import('./projects/FifthPage'))
const ElevenPage = lazy(() => import('./projects/ElevenPage'))
const EversleyPage = lazy(() => import('./projects/EversleyPage'))
const GeorginaPage = lazy(() => import('./projects/GeorginaPage'))
const CGTowerPage = lazy(() => import('./projects/CGTowerPage'))
const AbejaPage = lazy(() => import('./projects/AbejaPage'))
const LakeWilcoxPage = lazy(() => import('./projects/LakeWilcoxPage'))
const WoodbridgePage = lazy(() => import('./projects/WoodbridgePage'))

function App() {
  useEffect(() => {
    const preloader = document.getElementById('preloader')
    if (preloader) {
      preloader.classList.add('preloader-fade')
      setTimeout(() => preloader.remove(), 600)
    }
  }, [])

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
              <Route path='projects/lakewilcox' element={<LakeWilcoxPage />} ></Route>
              <Route path='projects/woodbridge' element={<WoodbridgePage />} ></Route>
            <Route path='*' element={<div>404 Not Found</div>} />
            
            
          </Route>
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
