import React, {useRef} from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import BorderColorIcon from '@mui/icons-material/BorderColor';

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

export default function CoinHistorySearchBar({filterAciton}) {
  const closeRef = useRef();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className="navBarBg row ">

          <div className="fs-4 col-7 text-warning text-md-end text-start">
            Coin Order History
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
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ref={closeRef}></button>
                  </div>
                  <div className="modal-body text-start">
                    <div onChange={(e) => {
                      // const myModal = bootstrap.Modal(document.getElementById('myModal'));
                      // myModal.hide();
                      closeRef.current.click()
                      filterAciton(e.target.value)
                    }}>
                      <input type="radio" value="0" name="gender" defaultChecked /> 입금대기
                      <br />
                      <input type="radio" value="1" name="gender" /> 락업기간
                      <br />
                      <input type="radio" value="2" name="gender" /> 출금가능
                      <br />
                      <input type="radio" value="3" name="gender" /> 출금대기
                      <br/>
                      <input type="radio" value="4" name="gender" /> 출금완료
                    </div>
                    {/* <div onChange={(e)=>{
                      console.log("e.target.value", e.target.value == 0);
                      filterAciton(e)
                      setRadionValue(e.target.value)
                      }}>
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="0" checked={radioValue == 0 ? true: false} />
                        <label className="htmlForm-check-label" for="exampleRadios2">
                        Deposite pending
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="1" checked={radioValue == 1 ? true: false} />
                        <label className="htmlForm-check-label" for="exampleRadios2">
                          LockedUp
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="2" checked={radioValue == 2 ? true: false}/>
                        <label className="htmlForm-check-label" for="exampleRadios3">
                          Withdraw Available
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios4" value="3" checked={radioValue == 3 ? true: false}/>
                        <label className="htmlForm-check-label" for="exampleRadios4">
                          Withdraw Pending
                        </label>
                      </div>
                    </div> */}
                  </div>
                  <div className="d-flex justify-content-around mb-5 px-3" style={{ gap: "12px" }}>
                    {/* <button className='btn btn-outline-success w-100'>Save</button> */}
                    {/* <button className='btn btn-danger w-100' onClick={() => { closeRef.current.click() }}>No?</button> */}
                  </div>
                </div>
              </div>
            </div></div>



        </Toolbar>
      </AppBar>
    </Box>
  );
}
