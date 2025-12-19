import { Outlet } from "react-router-dom";
import Navbar from "../blocks/Navbar";
import Footer from "../blocks/Footer";

const Layout = () => {
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