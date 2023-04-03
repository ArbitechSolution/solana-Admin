import React from "react";

const UserDetailsModel = () => {
  return (
    <div>
      <a data-bs-toggle="modal" href="#exampleModalToggle" role="button">
        <i class="far fa-edit btn btn-outline-warning text-white"></i>
      </a>
      <div
        className="modal fade"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabIndex={-1}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalToggleLabel">
                Change Password
              </h5>
              <button
                type="button btn-warning"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <form>
                <div className=" mb-3">
                  <input
                    type="password"
                    className="form-control style_input_field"
                    id="exampleInputPassword1"
                    placeholder="Current Password"
                  />
                </div>
                <div className=" mb-3 ">
                  <input
                    type="password"
                    className="form-control style_input_field"
                    id="exampleInputPassword1"
                    placeholder="New Password"
                  />
                </div>
                <div className=" mb-3">
                  <input
                    type="password"
                    className="form-control style_input_field"
                    id="exampleInputPassword1"
                    placeholder="Confirm Password"
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="submit"
                className="btn btn-warning text-white"
                data-bs-target="#exampleModalToggle"
                data-bs-toggle="modal"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsModel;
