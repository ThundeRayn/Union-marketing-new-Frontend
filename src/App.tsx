import { useEffect, lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'
import Layout from './layout/Layout'
import { ProtectedRoute } from './components/ProtectedRoute'

const HomePage = lazy(() => import('./pages/HomePage'))
const ServicePage = lazy(() => import('./pages/ServicePage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const EventPage = lazy(() => import('./pages/EventPage'))
const ProjectPage = lazy(() => import('./pages/ProjectPage'))
const BrokerPortalLogin = lazy(() => import('./pages/BrokerPortalLogin'))
const AuthCallback = lazy(() => import('./pages/AuthCallback'))
const BrokerPortal = lazy(() => import('./pages/BrokerPortal'))
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
    <BrowserRouter>
      <Suspense fallback={null}>
        <Routes>
          {/* Routes without navbar/footer */}
          <Route path="auth/callback" element={<AuthCallback />} />
          <Route
            path="broker-portal"
            element={
              <ProtectedRoute>
                <BrokerPortal />
              </ProtectedRoute>
            }
          />

          {/* Routes with navbar/footer */}
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="service" element={<ServicePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="event" element={<EventPage />} />
            <Route path="project" element={<ProjectPage />} />
            <Route path="login" element={<BrokerPortalLogin />} />
            <Route path="projects/fifth" element={<FifthPage />} />
            <Route path="projects/eleven" element={<ElevenPage />} />
            <Route path="projects/eversley" element={<EversleyPage />} />
            <Route path="projects/georgina" element={<GeorginaPage />} />
            <Route path="projects/cgtower" element={<CGTowerPage />} />
            <Route path="projects/abeja" element={<AbejaPage />} />
            <Route path="projects/lakewilcox" element={<LakeWilcoxPage />} />
            <Route path="projects/woodbridge" element={<WoodbridgePage />} />
            <Route path="*" element={<div>404 Not Found</div>} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
