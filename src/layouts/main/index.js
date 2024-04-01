import React from "react";
import MainFooter from "./main-footer";
import MainHeader from "./main-header";

const MainLayout = ({ children }) => {
  return (
    <div>
      <MainHeader/>
      <div>{children}</div>
      <MainFooter />
    </div>
  );
};

export default MainLayout;
