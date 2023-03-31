import React from "react";
import SideNav from "../components/SideNav";
import Box from "@mui/material/Box";
import NavBar from "../components/NavBar";
import MemberListTable from "../components/Tables/MemberListTable";

const MemberList = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Box height={70} />
      <Box sx={{ display: "flex" }}>
        <SideNav></SideNav>
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, overflow: "auto" }}
          
        >
          <h1>Members List</h1>
          <MemberListTable></MemberListTable>
        </Box>
      </Box>
    </div>
  );
};

export default MemberList;
