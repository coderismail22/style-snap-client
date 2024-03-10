import React from "react";
import { Footer } from "../../pages/sharedPages/Footer";
import { Outlet } from "react-router-dom";
import { TopBanner } from "../../pages/sharedPages/TopBanner";
import { NavbarWrap } from "../../pages/sharedPages/NavbarWrap";

export const Main = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBanner></TopBanner>
      <NavbarWrap />

      <div className="flex-grow">
        <Outlet />
      </div>

      <div className="flex-shrink-0">
        <Footer />
      </div>
    </div>
  );
};
