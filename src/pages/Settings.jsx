import React from "react";
import SideNav from "../components/SideNav";
import Box from "@mui/material/Box";
import NavBar from "../components/NavBar";
import AdminUserDetails from "../components/ChangePassword/AdminUserDetails";

const Settings = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Box height={70} />
      <Box sx={{ display: "flex" }}>
        <SideNav></SideNav>
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, overflow: "auto", mt: 8 }}
        >
          <h1> User Details</h1>

          <AdminUserDetails />
        </Box>
      </Box>
    </div>
  );
};

export default Settings;
