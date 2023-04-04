import React, { useRef } from "react";
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

export default function ReferralSearchBar({ filterAciton, filter }) {
  const closeRef = useRef();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className="navBarBg row ">

          <div className="fs-4 col-7 text-warning text-md-end text-start">
            Referral Cash Reward
          </div>
          <div className="text-end col-3 d-flex ms-auto justify-content-end">
            <select className="form-select form-select-lg " name="" id="" value={filter}
              onChange={(e) => { filterAciton(e.target.value) }}
            >
              <option value="all">
                all
                {/* Deposite pending */}
              </option>
              <option value="0">
                입금대기
                {/* Deposite pending */}
              </option>
              <option value="1">
                락업기간
                {/* LockedUp */}
              </option>
              <option value="2">
                출금가능
                {/* Withdraw Available */}
              </option>
              <option value="3">
                출금대기
                {/* Withdraw Pending */}
              </option>
              <option value="4">
                출금완료
                {/* Withdrawal complete */}
              </option>
            </select>
          </div>

        </Toolbar>
      </AppBar>
    </Box>
  );
}
