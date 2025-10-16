// import { Outlet } from "react-router-dom";
// import Navbar from "../components/Navbar";
// // import "../index.css";

// const Layout = () => {
//   return (
//     <div className="app-container">
//       <Navbar />
//       <main className="content">
//         <Outlet />
//       </main>
//     </div>
//   );
// };

// export default Layout;
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  const location = useLocation();

  // Routes where Navbar should be hidden
  const noNavbarRoutes = ["/", "/login", "/register"];
  const hideNavbar = noNavbarRoutes.includes(location.pathname);

  return (
    <div className="app-container">
      {!hideNavbar && <Navbar />}
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
