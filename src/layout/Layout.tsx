import { Outlet } from "react-router-dom";
import Navbar from "../blocks/Navbar";
import Footer from "../blocks/Footer";
import useScrollToTop from "../hooks/useScrollToTop";

const Layout = () => {
  useScrollToTop()
  
  return (
    <div>
     <Navbar/>
      <main>
        <Outlet /> 
        {/* Page content goes here */}
      </main>
      <Footer/>

    </div>
  )
}

export default Layout