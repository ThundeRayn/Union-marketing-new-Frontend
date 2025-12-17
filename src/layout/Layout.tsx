import { Outlet } from "react-router-dom";
import Navbar from "../blocks/Navbar";

const Layout = () => {
  return (
    <div>

     <Navbar/>
      <main>
        <Outlet /> 
        {/* Page content goes here */}
      </main>

    </div>
  )
}

export default Layout