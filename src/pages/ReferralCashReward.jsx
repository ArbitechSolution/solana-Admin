import React from "react";
import SideNav from "../components/SideNav";
import Box from "@mui/material/Box";
import NavBar from "../components/NavBar";
import ReferralTable from "../components/Tables/ReferralTable";

const ReferealCashReward = () => {
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
          <h1>Referral Cash Reward</h1>
          <ReferralTable />
        </Box>
      </Box>
    </div>
  );
};

export default ReferealCashReward;
