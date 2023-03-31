import React from "react";
import SideNav from "../components/SideNav";
import Box from "@mui/material/Box";
import NavBar from "../components/NavBar";
import CoinTable from "../components/Tables/CoinTable";

const CoinOrderHistory = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Box height={70} />
      <Box sx={{ display: "flex" }}>
        <SideNav></SideNav>
        <Box component="main" sx={{ flexGrow: 1, p: 3, overflow: "auto" }}>
          <h1>Coin Order History</h1>
          <CoinTable />
        </Box>
      </Box>
    </div>
  );
};

export default CoinOrderHistory;
