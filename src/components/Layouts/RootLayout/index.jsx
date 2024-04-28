// import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../../Header";
import Sidebar from "../../Sidebar";

const RootLayout = () => {
  const location = useLocation();

  // Regular expression to match "/register" and its children
  const registerPageRegex = /^\/register(?:\/.*)?$/;

  const showButton = !(
    location.pathname === "/login" ||
    location.pathname === "/resetPassword" ||
    registerPageRegex.test(location.pathname)
  );

  return (
    <div>
      <Header />
      <section className="flex">
        {showButton && <Sidebar />}
        <Outlet />
      </section>
    </div>
  );
};

export default RootLayout;
