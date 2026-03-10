import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../blocks/Navbar";
import Footer from "../blocks/Footer";
import useScrollToTop from "../hooks/useScrollToTop";

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
        <Outlet />
      </main>
      <Footer/>

    </div>
  )
}

export default Layout