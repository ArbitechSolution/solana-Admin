import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
const CanvousNavbar = () => {
  return (
    <div className="d-block d-md-none">
      <a
        className="text-light me-2"
        data-bs-toggle="offcanvas"
        href="#offcanvasExample"
        role="button"
        aria-controls="offcanvasExample"
      >
        <MenuIcon />
      </a>

      <div
        className="offcanvas offcanvas-start w-50 navBarBg"
        tabIndex={-1}
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title text-white" id="offcanvasExampleLabel">
            Coin Buy
          </h5>
          <button
            type="button"
            className="btn-close text-reset bg-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body ">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0 text-start ">
            <li class="nav-item">
              <Link class="nav-link text-white" aria-current="page" to="/">
                Members List
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link text-white"
                aria-current="page"
                to="/coinorderhistory"
              >
                Coin Order History
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link text-white"
                aria-current="page"
                to="/referralcashreward"
              >
                Referral Cash Reward
              </Link>
            </li>
          </ul>
          {/* <div className="dropdown mt-3">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
            >
              Dropdown button
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CanvousNavbar;
