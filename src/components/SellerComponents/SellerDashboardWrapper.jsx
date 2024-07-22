import React from "react";
import AdminSideBar from "./AdminSidebar/AdminSidebar";

const SellerThemeWrapper = ({children}) => {
  return <>
  <AdminSideBar>{children}</AdminSideBar>
  </>;
};

export default SellerThemeWrapper;
