import { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../blocks/Navbar";
import Footer from "../blocks/Footer";
import useScrollToTop from "../hooks/useScrollToTop";
import { PageSkeleton } from "../components/skeletons";

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
        <Suspense fallback={<PageSkeleton />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer/>

    </div>
  )
}

export default Layout