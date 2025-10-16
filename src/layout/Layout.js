import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
// import "../index.css";

const Layout = () => {
  return (
    <div className="app-container">
      <Navbar />
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
