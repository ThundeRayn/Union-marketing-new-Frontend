import { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../blocks/Navbar";
import Footer from "../blocks/Footer";
import useScrollToTop, { ScrollToTopOnMount } from "../hooks/useScrollToTop";

const Layout = () => {
  useScrollToTop()
  const location = useLocation()

  return (
    <div>
     <Navbar/>
      <main
        key={location.pathname}
        className="animate-[fadeIn_0.4s_ease-out]"
      >
        <Suspense fallback={
          <div className="min-h-screen bg-(--color-secondary) flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-(--color-primary) border-t-transparent rounded-full animate-spin" />
          </div>
        }>
          <ScrollToTopOnMount />
          <Outlet />
        </Suspense>
      </main>
      <Footer/>

    </div>
  )
}

export default Layout