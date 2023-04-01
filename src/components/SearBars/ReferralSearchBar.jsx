import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function ReferralSearchBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className="navBarBg row ">
          
          <div className="fs-4 col-7 text-warning text-md-end text-start">
          Referral Cash Reward
          </div>
          <div className="text-end col-5 d-flex justify-content-end">
        <button type="button" className="btn  btn-outline-warning shadow-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
Status Action
</button>


<div className="modal fade " id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div className="modal-dialog modal-dialog-centered">
    <div className="modal-content  bg-warning text-white">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalToggleLabel">Status Action</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body text-start">
      <div>
      <div className="form-check">
  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
  <label className="htmlForm-check-label" for="exampleRadios1">
   Deposite pending
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
  <label className="htmlForm-check-label" for="exampleRadios2">
   LockedUp 
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" />
  <label className="htmlForm-check-label" for="exampleRadios3">
    Withdraw Available
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios4" value="option4" />
  <label className="htmlForm-check-label" for="exampleRadios4">
    Withdraw Pending
  </label>
</div>
      </div>
      </div>
    <div className="d-flex justify-content-around mb-5 px-3" style={{gap:"12px"}}>
      <button className='btn btn-outline-success w-100'>Save</button>
      <button className='btn btn-danger w-100'>Cancal</button>
    </div>
    </div>
  </div>
</div></div>
          
        

        </Toolbar>
      </AppBar>
    </Box>
  );
}
